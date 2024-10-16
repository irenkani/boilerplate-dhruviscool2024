/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
import mongoose from 'mongoose';
interface CardConstant extends mongoose.Document {
    toxicPersonName: string;
    imageURL: string;
    imageTitle: string;
    trait1: string;
    trait2: string;
    trait3: string;
    trait4: string;
    trait5: string;
}
declare const ToxicPerson: mongoose.Model<CardConstant, {}, {}, {}, any>;
export { CardConstant, ToxicPerson };
//# sourceMappingURL=toxicPerson.model.d.ts.map