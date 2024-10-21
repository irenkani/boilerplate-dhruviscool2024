/**
 * Specifies the middleware and controller functions to call for each route
 * relating to authentication.
 */
import express from 'express';
import {
  addPersonController
} from '../controllers/person.controller';
import { isAuthenticated } from '../controllers/auth.middleware';
import 'dotenv/config';

const router = express.Router();


router.post('/add-person', addPersonController);

export default router