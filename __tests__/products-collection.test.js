const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
const product = require('../lib/models/products/product');

describe('products Model', () => {
  const obj = {
    category: 'electronics',
    display_name: 'dispalyelectronics',
    description: 'electronics product',
  };
  it('should  create new product', async () => {
    const result = await product.create(obj);
    Object.keys(obj).forEach(key => {
      expect(result[key]).toEqual(obj[key]);
    });
  });
  it('should  get product ', async () => {
    let result = await product.create(obj);
    result = await product.get();
    result.forEach(item => {
      Object.keys(obj).forEach(key => {
        expect(item[key]).toEqual(obj[key]);
      });
    });
  });
  it('should  get product with the given id ', async () => {
    let createdResult = await product.create(obj);
    let result = await product.get(createdResult._id);

    expect(result[0]._id).toEqual(createdResult._id);
  });

  it('should  get product with the given id ', async () => {
    let newObj = {
      category: 'electronics updated',
      display_name: 'dispalyelectronics',
      description: 'electronics product',
    };
    let createdResult = await product.create(obj);
    let result = await product.update(createdResult._id, newObj);
    // console.log('result[0]result[0]result[0]result[0]result[0]', result[0]);
    // console.log('createdResult[0]._idcreatedResult[0]._idcreatedResult[0]._id', createdResult);
    expect(result._id).toEqual(createdResult._id);
    expect(result.category).toEqual('electronics updated');
  });
  it('should  get product with the given id ', async () => {
    let newObj = {
      category: 'electronics updated',
      display_name: 'dispalyelectronics',
      description: 'electronics product',
    };
    let createdResult = await product.create(obj);
    let result = await product.update(createdResult._id, newObj);
    // console.log('result[0]result[0]result[0]result[0]result[0]', result[0]);
    // console.log('createdResult[0]._idcreatedResult[0]._idcreatedResult[0]._id', createdResult);
    expect(result._id).toEqual(createdResult._id);
    expect(result.category).toEqual('electronics updated');
  });
  it('should  get product with the given id ', async () => {
    let newObj = {
      category: 'electronics updated',
      display_name: 'dispalyelectronics',
      description: 'electronics product',
    };
    let createdResult = await product.create(obj);
    let deletedResult = await product.delete(createdResult._id);
    let getResult = await product.get(deletedResult._id);

    expect(getResult.length).toEqual(0);
  });
});
