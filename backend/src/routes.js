const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

module.exports = routes;
