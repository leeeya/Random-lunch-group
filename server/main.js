const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();

const peopleRouter = require('./routes/people.route');

app.use('/api', peopleRouter);

app.listen(2018, () => {
  console.log('Lunch app is listening on port 2018!') // eslint-disable-line no-console
});

module.exports = app;
