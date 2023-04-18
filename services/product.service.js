const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate(); // cada vez que se genere una instancia en el servicio iniciara con los 100 productos
  }

  generate() {
    const limit = 100;// se le dice que inicie con 100 productos
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);

  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);//findIndex retorna la poscion donde esta el objeto
    if (index === -1) {//se valida si el elemento existe
      throw new Error('Product not Found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id);//findIndex retorna la poscion donde esta el objeto
    if (index === -1) {//se valida si el elemento existe
      throw new Error('Product not Found');
  }
  this.products.splice(index, 1);
  return { id };
  }
}

module.exports = ProductsService;
