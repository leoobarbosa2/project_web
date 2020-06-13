/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const authConfig = require('../database/config');

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      status: 'error',
      message: 'Token not provided',
    });
  }
  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.secret);

    request.userId = decoded._id;

    return next();
  } catch (err) {
    return response.status(401).json({
      status: 'error',
      message: 'Token invalid',
    });
  }
};
