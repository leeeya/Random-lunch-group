import express, { Express } from 'express';
import logger from 'morgan';
import cors from 'cors';
import dbLoader from './db';
import configs from '../configs';

const initLoaders = (app: Express) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
  }

  app.use(cors(configs.corsOptions));
  app.use(express.json());
  dbLoader();
};

export default initLoaders;
