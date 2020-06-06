const UserRepository = require('../repositories/UserRepository');

class UserService {
  store(userData) {
    return UserRepository.create(userData);
  }

  checkUserExists(email) {
    return UserRepository.userExists(email);
  }

  checkPassword(password) {
    return UserRepository.CheckPassword(password);
  }
}

module.exports = new UserService();
