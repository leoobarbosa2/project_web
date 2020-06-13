const UserService = require('../services/UserService');

class UserController {
  // List all users
  async index(request, response) {
    const users = await UserService.index();

    return response.status(200).json(users);
  }

  async store(request, response) {
    // Create a new user
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

  async update(request, response) {
    // Update a user using ID
    const userData = request.body;
    const { id } = request.params;

    const { _id, email, name, age, country, cpf } = await UserService.update(
      userData,
      id
    );

    return response.status(200).json({
      _id,
      email,
      name,
      age,
      country,
      cpf,
    });
  }

  async delete(request, response) {
    // Delete user using ID
    const { id: userId } = request.params;

    await UserService.delete(userId);

    return response.status(204).send();
  }
}

module.exports = new UserController();
