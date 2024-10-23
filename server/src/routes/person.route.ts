/**
 * Specifies the middleware and controller functions to call for each route
 * relating to authentication.
 */
import express from 'express';
import {
  addPersonController,
  getAllPeopleController,
} from '../controllers/person.controller';
import 'dotenv/config';

const router = express.Router();

router.post('/add-person', addPersonController);

router.get('/all-people', getAllPeopleController);

export default router;
