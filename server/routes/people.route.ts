import express from 'express';
import { getAllPeople } from './controllers/people.controller';

const router = express.Router();

router.get('/people', getAllPeople);

export default router;
