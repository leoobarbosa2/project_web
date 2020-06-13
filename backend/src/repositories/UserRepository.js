const User = require('../models/User');
const { ErrorHandler } = require('../shared/errors/AppError');

class UserRepository {
  async index() {
    const users = User.find().select('-__v -password');

    return users;
  }

  async create(cpf, age, name, country, email, password) {
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

  async update(email, name, age, country, cpf, password, id) {
    const options = { new: true };

    const user = await User.findById(id);
    const userExists = await User.findOne({ email });

    if (userExists && email !== user.email)
      throw new ErrorHandler('Email already in use', 401);

    const updatedUser = await User.findOneAndUpdate(
      id,
      { email, name, age, country, cpf, password },
      options,
      (err, userInfo) => {
        userInfo.password = password;
        userInfo.save();
      }
    );

    return updatedUser;
  }

  async userExists(email) {
    const user = await User.findOne({ email });

    if (!user) throw new ErrorHandler('User does not found');

    return user;
  }

  async delete(userId) {
    const userExists = await User.findById(userId);

    if (!userExists) throw new ErrorHandler('User does not found', 401);

    await User.findByIdAndDelete(userId);
  }
}

module.exports = new UserRepository();
