const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();

const peopleRouter = require('./routes/people.route');

app.use('/api', peopleRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.error(err);

  app.use((err, req, res, next) => {
    console.log(err);

    if (process.env.NODE_ENV === 'production') {
      if (err instanceof mongoose.Error) err = createError(500);
      err.stack = null;
    }

    res.status(err.status || 500);
    res.json(err);
  });
});

app.listen(2021, () => {
  console.log('Lunch app is listening on port 2021!') // eslint-disable-line no-console
});

module.exports = app;
