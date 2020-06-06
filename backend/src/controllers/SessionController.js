const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');
const { ErrorHandler } = require('../shared/errors/AppError');

const authConfig = require('../database/config');

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;
    const user = await UserService.checkUserExists(email);

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid)
      throw new ErrorHandler('Password does not match', 401);

    const { _id } = user;

    return response.status(200).json({
      _id,
      email,
      token: jwt.sign({ _id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
