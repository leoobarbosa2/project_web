const express = require('express');

const routes = express.Router();
const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

// Session
routes.post('/sessions', SessionController.store);

// User Actions
routes.post('/users', UserController.store);

// Authenticate
routes.use(authMiddleware);

// Authenticated Actions
routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;
