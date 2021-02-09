const express = require('express');
const router = express.Router();

const peopleController = require('./controllers/people.controller');

router.get('/people', peopleController.getAllPeople);

module.exports = router;
