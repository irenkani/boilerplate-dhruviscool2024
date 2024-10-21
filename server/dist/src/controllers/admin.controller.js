"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteUser = exports.verifyToken = exports.deleteUser = exports.upgradePrivilege = exports.getAllUsers = void 0;
const crypto_1 = __importDefault(require("crypto"));
const apiError_1 = __importDefault(require("../util/apiError"));
const statusCode_1 = __importDefault(require("../util/statusCode"));
const user_service_1 = require("../services/user.service");
const invite_service_1 = require("../services/invite.service");
const mail_service_1 = require("../services/mail.service");
/**
 * Get all users from the database. Upon success, send the a list of all users in the res body with 200 OK status code.
 */
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return ((0, user_service_1.getAllUsersFromDB)()
        .then((userList) => {
        res.status(statusCode_1.default.OK).send(userList);
    })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((e) => {
        next(apiError_1.default.internal('Unable to retrieve all users'));
    }));
});
exports.getAllUsers = getAllUsers;
/**
 * Upgrade a user to an admin. The email of the user is expected to be in the request body.
 * Upon success, return 200 OK status code.
 */
const upgradePrivilege = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        next(apiError_1.default.missingFields(['email']));
        return;
    }
    const user = yield (0, user_service_1.getUserByEmail)(email);
    if (!user) {
        next(apiError_1.default.notFound(`User with email ${email} does not exist`));
        return;
    }
    if (user.admin) {
        next(apiError_1.default.badRequest(`User is already an admin`));
        return;
    }
    (0, user_service_1.upgradeUserToAdmin)(user._id)
        .then(() => {
        res.sendStatus(statusCode_1.default.OK);
    })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((e) => {
        next(apiError_1.default.internal('Unable to upgrade user to admin.'));
    });
});
exports.upgradePrivilege = upgradePrivilege;
/**
 * Delete a user from the database. The email of the user is expected to be in the request parameter (url). Send a 200 OK status code on success.
 */
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    if (!email) {
        next(apiError_1.default.missingFields(['email']));
        return;
    }
    // Check if user to delete is an admin
    const user = yield (0, user_service_1.getUserByEmail)(email);
    if (!user) {
        next(apiError_1.default.notFound(`User with email ${email} does not exist`));
        return;
    }
    const reqUser = req.user;
    if (reqUser.email === user.email) {
        next(apiError_1.default.badRequest('Cannot delete self.'));
        return;
    }
    if (user.admin) {
        next(apiError_1.default.forbidden('Cannot delete an admin.'));
        return;
    }
    (0, user_service_1.deleteUserById)(user._id)
        .then(() => res.sendStatus(statusCode_1.default.OK))
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((e) => {
        next(apiError_1.default.internal('Failed to delete user.'));
    });
});
exports.deleteUser = deleteUser;
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.params;
    (0, invite_service_1.getInviteByToken)(token)
        .then((invite) => {
        if (invite) {
            res.status(statusCode_1.default.OK).send(invite);
        }
        else {
            next(apiError_1.default.notFound('Unable to retrieve invite'));
        }
    })
        .catch(() => {
        next(apiError_1.default.internal('Error retrieving invite'));
    });
});
exports.verifyToken = verifyToken;
const inviteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { emails } = req.body;
    if (!emails) {
        next(apiError_1.default.missingFields(['email']));
        return;
    }
    const emailList = emails.replaceAll(' ', '').split(',');
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
    function validateEmail(email) {
        if (!email.match(emailRegex)) {
            next(apiError_1.default.badRequest(`Invalid email: ${email}`));
        }
    }
    function combineEmailToken(email, invite) {
        const verificationToken = crypto_1.default.randomBytes(32).toString('hex');
        return [email, invite, verificationToken];
    }
    function makeInvite(combinedList) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = combinedList[0];
                const existingInvite = combinedList[1];
                const verificationToken = combinedList[2];
                if (existingInvite) {
                    yield (0, invite_service_1.updateInvite)(existingInvite, verificationToken);
                }
                else {
                    yield (0, invite_service_1.createInvite)(email, verificationToken);
                }
            }
            catch (err) {
                next(apiError_1.default.internal(`Error creating invite: ${err.message}`));
            }
        });
    }
    function sendInvite(combinedList) {
        try {
            const email = combinedList[0];
            const verificationToken = combinedList[2];
            (0, mail_service_1.emailInviteLink)(email, verificationToken);
            return;
        }
        catch (err) {
            next(apiError_1.default.internal(`Error sending invite: ${err.message}`));
        }
    }
    try {
        if (emailList.length === 0) {
            next(apiError_1.default.missingFields(['email']));
            return;
        }
        emailList.forEach(validateEmail);
        const lowercaseEmailList = emailList.map((email) => email.toLowerCase());
        const userPromises = lowercaseEmailList.map(user_service_1.getUserByEmail);
        const existingUserList = yield Promise.all(userPromises);
        const invitePromises = lowercaseEmailList.map(invite_service_1.getInviteByEmail);
        const existingInviteList = yield Promise.all(invitePromises);
        const existingUserEmails = existingUserList.map((user) => user ? user.email : '');
        const existingInviteEmails = existingInviteList.map((invite) => invite ? invite.email : '');
        const emailInviteList = lowercaseEmailList.filter((email) => {
            if (existingUserEmails.includes(email)) {
                throw apiError_1.default.badRequest(`User with email ${email} already exists`);
            }
            return !existingUserEmails.includes(email);
        });
        const combinedList = emailInviteList.map((email) => {
            const existingInvite = existingInviteList[existingInviteEmails.indexOf(email)];
            return combineEmailToken(email, existingInvite);
        });
        const makeInvitePromises = combinedList.map(makeInvite);
        yield Promise.all(makeInvitePromises);
        const sendInvitePromises = combinedList.map(sendInvite);
        yield Promise.all(sendInvitePromises);
        res.sendStatus(statusCode_1.default.CREATED);
    }
    catch (err) {
        next(apiError_1.default.internal(`Unable to invite user: ${err.message}`));
    }
});
exports.inviteUser = inviteUser;
//# sourceMappingURL=admin.controller.js.map