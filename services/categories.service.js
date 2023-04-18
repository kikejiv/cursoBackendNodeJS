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

  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);

  }

  update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (!index === -1) {
      throw new Error('CAtegory not Found')
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);//findIndex retorna la poscion donde esta el objeto
    if (index === -1) {//se valida si el elemento existe
      throw new Error('Catgory not Found');
  }
  this.categories.splice(index, 1);
  return { id };
  }

}

module.exports = CategoriesService;

