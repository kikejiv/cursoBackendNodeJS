const { faker } = require('@faker-js/faker');

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        categoriasId: faker.datatype.number(1000),
        nameCategories: faker.commerce.productAdjective(),
      });
    }
  }

  create() {

  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);

  }

  update() {

  }

  delete() {

  }

}

module.exports = CategoriesService;

