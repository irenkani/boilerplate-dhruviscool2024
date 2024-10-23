import express from 'express';
import { createToxicPersonRequest } from '../services/toxicPerson.service';
import ApiError from '../util/apiError';

const addToxicPerson = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const {
      name,
      imageURL,
      imageTitle,
      trait1,
      trait2,
      trait3,
      trait4,
      trait5,
    } = req.body;

    const result = await createToxicPersonRequest({
      name,
      imageURL,
      imageTitle,
      trait1,
      trait2,
      trait3,
      trait4,
      trait5,
    });

    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(ApiError.internal('Unable to add new toxic person'));
  }
};

// eslint-disable-next-line import/prefer-default-export
export { addToxicPerson };
