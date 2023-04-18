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
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
      });
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);//findIndex retorna la poscion donde esta el objeto
    if (index === -1) {//se valida si el elemento existe
      throw new Error('User not Found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];

  }

  delete(id) {
    const index = this.users.findIndex(item => item.id === id);//findIndex retorna la poscion donde esta el objeto
    if (index === -1) {//se valida si el elemento existe
      throw new Error('User not Found');
  }
  this.users.splice(index, 1);
  return { id };

  }

}

module.exports = UsersService;
