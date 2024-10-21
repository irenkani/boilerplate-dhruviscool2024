"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToxicPerson = void 0;
/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
const mongoose_1 = __importDefault(require("mongoose"));
const ToxicPersonSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    pokemonImage: {
        type: String,
        required: true,
    },
    pokemonName: {
        type: String,
        required: true,
    },
    toxicTrait1: {
        type: String,
        required: true,
    },
    toxicTrait2: {
        type: String,
        required: true,
    },
    toxicTrait3: {
        type: String,
        required: true,
    },
    toxicTrait4: {
        type: String,
        required: true,
    },
    toxicTrait5: {
        type: String,
        required: true,
    },
});
const ToxicPerson = mongoose_1.default.model('ToxicPerson', ToxicPersonSchema);
exports.ToxicPerson = ToxicPerson;
//# sourceMappingURL=toxicPerson.model.js.map