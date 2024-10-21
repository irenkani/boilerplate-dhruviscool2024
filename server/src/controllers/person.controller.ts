/**
 * All the controller functions containing the logic for routes relating to a
 * user's authentication such as login, logout, and registration.
 */
import express from 'express';
import { IPerson } from "../models/person.model";
import {
  createPerson
} from '../services/person.service';
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
  /*const { firstName, imageURL,imageTitle, toxicTrait1, toxicTrait2, toxicTrait3, toxicTrait4, toxicTrait5 } = req.body;*/
  return createPerson (Person) 
  
};

export {
  addPersonController
};
