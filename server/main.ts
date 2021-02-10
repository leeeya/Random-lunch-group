import express, { Request, Response } from 'express';
import createError from 'http-errors';
import initLoaders from './loaders';
import peopleRouter from './routes/people.route';

const app = express();

initLoaders(app);

app.use('/api', peopleRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err: createError.HttpError, req: Request, res: Response) => {
  console.error(err);

  if (process.env.NODE_ENV === 'production') {
    err.stack = '';
  }

  res.status(err.status || 500);
  res.json(err);
});

app.listen(2021, () => {
  console.log('Lunch app is listening on port 2021!'); // eslint-disable-line no-console
});

module.exports = app;
