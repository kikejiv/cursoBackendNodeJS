const { faker } = require('@faker-js/faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
      });
    }
  }

  create() {

  }

  find() {
    return this.users;
  }

  findOne() {
    return this.users.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = UsersService;
