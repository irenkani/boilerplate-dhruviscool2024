import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    imageURL: {
        type:String,
        required: true,
    },
    imageTitle: {
        type:String,
        required: true,
    },
    toxicTrait1: {
        type:String,
        required: true,
    },
    toxicTrait2: {
        type:String,
        required: true,
    },
    toxicTrait3: {
        type:String,
        required: true,
    },
    toxicTrait4: {
        type:String,
        required: true,
    },
    toxicTrait5: {
        type:String,
        required: true,
    },
});

interface IPerson extends mongoose.Document {
    firstName: string;
    imageURL: string;
    imageTitle: string;
    toxicTrait1: string;
    toxicTrait2: string;
    toxicTrait3: string;
    toxicTrait4: string;
    toxicTrait5: string;
}

const Person = mongoose.model<IPerson>('Person', PersonSchema)

export { IPerson, Person }