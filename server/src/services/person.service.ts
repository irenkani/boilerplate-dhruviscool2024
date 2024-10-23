/**
 * All the functions for interacting with user data in the MongoDB database
 */
import { IPerson, Person } from '../models/person.model';

const createPerson = async (person: IPerson) => {
  const newPerson = new Person(person);
  const result = await newPerson.save();
  return result;
};

const getAllPeopleFromDB = async () => {
  const peopleList = await Person.find({}).exec();
  return peopleList;
};

// eslint-disable-next-line import/prefer-default-export
export { createPerson, getAllPeopleFromDB };
