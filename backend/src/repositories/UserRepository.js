const User = require('../models/User');
const { ErrorHandler } = require('../shared/errors/AppError');

class UserRepository {
  async create({ cpf, age, name, country, email, password }) {
    const userExists = await User.findOne({ email });

    if (userExists) throw new ErrorHandler('Email already in use', 401);

    const user = await User.create({
      cpf,
      age,
      name,
      country,
      email,
      password,
    });

    return user;
  }

  async userExists(email) {
    const user = await User.findOne({ email });

    if (!user) throw new ErrorHandler('User does not found');

    return user;
  }
}

module.exports = new UserRepository();
