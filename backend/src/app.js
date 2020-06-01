const express = require('express');

const cors = require('cors');
const mongoConnection = require('./database');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
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
}

module.exports = new App().server;
