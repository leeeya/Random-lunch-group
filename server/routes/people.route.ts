import express from 'express';
import { getAllPeople, createPeople } from './controllers/people.controller';

const router = express.Router();

router.get('/people', getAllPeople);
router.post('/person', createPeople);

export default router;
