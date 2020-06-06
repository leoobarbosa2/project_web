const express = require('express');
require('express-async-errors');

const cors = require('cors');
const { handleError } = require('./shared/errors/AppError');
const mongoConnection = require('./database');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.errorHandler();
    this.database();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  database() {
    mongoConnection();
  }

  errorHandler() {
    this.server.use((err, req, res, next) => {
      handleError(err, res);
    });
  }
}

module.exports = new App().server;
