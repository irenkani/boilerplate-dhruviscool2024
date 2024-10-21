import express from 'express';
import { addToxicPerson } from '../controllers/toxicPerson.controller';
import 'dotenv/config';

const router = express.Router();

router.post('/toxic-person', addToxicPerson);

export default router;
