import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  imageTitle: {
    type: String,
    required: true,
  },
  trait1: {
    type: String,
    required: true,
  },
  trait2: {
    type: String,
    required: true,
  },
  trait3: {
    type: String,
    required: true,
  },
  trait4: {
    type: String,
    required: true,
  },
  trait5: {
    type: String,
    required: true,
  },
});

interface IPerson extends mongoose.Document {
  name: string;
  imageURL: string;
  imageTitle: string;
  trait1: string;
  trait2: string;
  trait3: string;
  trait4: string;
  trait5: string;
}

const Person = mongoose.model<IPerson>('Person', PersonSchema);

export { IPerson, Person };
