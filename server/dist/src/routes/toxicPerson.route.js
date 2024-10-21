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
const express_1 = __importDefault(require("express"));
const toxicPerson_model_1 = require("../models/toxicPerson.model");
const router = express_1.default.Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personData = req.body;
    try {
        // Create a new instance of ToxicPerson
        const toxicPerson = new toxicPerson_model_1.ToxicPerson({
            name: personData.firstName,
            pokemonImage: personData.imageURL,
            pokemonName: personData.imageTitle,
            toxicTrait1: personData.toxictrait1,
            toxicTrait2: personData.toxictrait2,
            toxicTrait3: personData.toxictrait3,
            toxicTrait4: personData.toxictrait4,
            toxicTrait5: personData.toxictrait5,
        });
        // Save the toxic person to the database
        yield toxicPerson.save();
        // Respond with the saved toxic person
        res.status(201).json(toxicPerson);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Get receieved');
    try {
        const toxicPersons = yield toxicPerson_model_1.ToxicPerson.find();
        res.json(toxicPersons);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
//# sourceMappingURL=toxicPerson.route.js.map