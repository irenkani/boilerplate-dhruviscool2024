/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
import mongoose from 'mongoose';

const ToxicPersonSchema = new mongoose.Schema({
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

const ToxicPerson = mongoose.model<CardConstant>(
  'ToxicPerson',
  ToxicPersonSchema,
);

export { CardConstant, ToxicPerson };
