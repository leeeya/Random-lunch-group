import express from 'express';
import {
  getAllPeople,
  createPeople,
  removePerson,
} from './controllers/people.controller';

const router = express.Router();

router.get('/people', getAllPeople);
router.post('/person', createPeople);
router.delete('/person', removePerson);

export default router;
