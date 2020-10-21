const Collection = require('./categories.collection');
const categoryModel = require('./categories.schema');
class Category extends Collection {
  constructor() {
    super(categoryModel);
  }
}

module.exports = new Category();
