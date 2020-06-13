const UserRepository = require('../repositories/UserRepository');

class UserService {
  index() {
    return UserRepository.index();
  }

  store({ cpf, age, name, country, email, password }) {
    return UserRepository.create(cpf, age, name, country, email, password);
  }

  update({ email, name, age, country, cpf, password }, id) {
    return UserRepository.update(email, name, age, country, cpf, password, id);
  }

  checkUserExists(email) {
    return UserRepository.userExists(email);
  }

  delete(userId) {
    return UserRepository.delete(userId);
  }
}

module.exports = new UserService();
