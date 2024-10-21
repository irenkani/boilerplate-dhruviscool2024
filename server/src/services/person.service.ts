/**
 * All the functions for interacting with user data in the MongoDB database
 */
import { IPerson, Person } from '../models/person.model';
const mongoose = require('mongoose');

const passwordHashSaltRounds = 10;
const removeSensitiveDataQuery = [
  '-password',
  '-verificationToken',
  '-resetPasswordToken',
  '-resetPasswordTokenExpiryDate',
];

const removeSensitiveDataQueryKeepPassword = [
  '-verificationToken',
  '-resetPasswordToken',
  '-resetPasswordTokenExpiryDate',
];

/* const createPerson = async (
  firstName: string,
  imageURL: string,
  imageTitle: string,
  toxicTrait1: string,
  toxicTrait2: string,
  toxicTrait3: string,
  toxicTrait4: string,
  toxicTrait5: string
) => {
  const newPerson = new Person({
    firstName,
    imageURL,
    imageTitle,
    toxicTrait1,
    toxicTrait2,
    toxicTrait3,
    toxicTrait4,
    toxicTrait5
  });
  const person = await newPerson.save();
  return person;
} */

  const createPerson = async (person: IPerson) => {
    const newPerson = new Person(person)
    const result = await newPerson.save();
    return result;
  }


export {
  createPerson
};
