/**
 * All the controller functions containing the logic for routes relating to a
 * user's authentication such as login, logout, and registration.
 */
import express from 'express';
import { IPerson } from '../models/person.model';
import StatusCode from '../util/statusCode';
import { createPerson, getAllPeopleFromDB } from '../services/person.service';
import ApiError from '../util/apiError';

const addPersonController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const Person: IPerson | null = req.body as IPerson;
  if (!Person) {
    next(ApiError.missingFields(['Person']));
    return;
  }
  /* const { firstName, imageURL,imageTitle, toxicTrait1, toxicTrait2, toxicTrait3, toxicTrait4, toxicTrait5 } = req.body; */
  // eslint-disable-next-line consistent-return
  return createPerson(Person);
};

const getAllPeopleController = async (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: express.NextFunction,
) => {
  const people = await getAllPeopleFromDB(); // Call the service function to get data
  res.status(200).json({ data: people });
};

// eslint-disable-next-line import/prefer-default-export
export { addPersonController, getAllPeopleController };
