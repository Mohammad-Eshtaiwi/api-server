const Collection = require('../collection');
const productModel = require('./products.schema');
class Product extends Collection {
  constructor() {
    super(productModel);
  }
}

module.exports = new Product();
