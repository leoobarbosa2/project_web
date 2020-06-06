const UserService = require('../services/UserService');

class UserController {
  async store(request, response) {
    const userData = request.body;

    const user = await UserService.store(userData);

    const { _id, cpf, age, name, country, email } = user;

    return response.status(200).json({
      _id,
      cpf,
      age,
      name,
      country,
      email,
    });
  }
}

module.exports = new UserController();
