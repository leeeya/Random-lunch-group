const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dbLoader = require('./db');
const { corsOptions } = require('../configs');

const initLoaders = app => {
  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
  }

  app.use(cors(corsOptions));
  app.use(express.json());
  dbLoader();
};

module.exports = initLoaders;
