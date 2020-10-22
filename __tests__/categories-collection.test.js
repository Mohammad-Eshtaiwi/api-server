const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
const category = require('../lib/models/categories/category');

describe('category Model', () => {
  const obj = {
    name: 'electronics',
    display_name: 'dispalyelectronics',
    description: 'electronics category',
  };
  it('should  create new category', async () => {
    const result = await category.create(obj);
    Object.keys(obj).forEach(key => {
      expect(result[key]).toEqual(obj[key]);
    });
  });
  it('should  get category ', async () => {
    let result = await category.create(obj);
    result = await category.get();
    result.forEach(item => {
      Object.keys(obj).forEach(key => {
        expect(item[key]).toEqual(obj[key]);
      });
    });
  });
  it('should  get category with the given id ', async () => {
    let createdResult = await category.create(obj);
    let result = await category.get(createdResult._id);

    expect(result[0]._id).toEqual(createdResult._id);
  });

  it('should  get category with the given id ', async () => {
    let newObj = {
      name: 'electronics updated',
      display_name: 'dispalyelectronics',
      description: 'electronics category',
    };
    let createdResult = await category.create(obj);
    let result = await category.update(createdResult._id, newObj);
    // console.log('result[0]result[0]result[0]result[0]result[0]', result[0]);
    // console.log('createdResult[0]._idcreatedResult[0]._idcreatedResult[0]._id', createdResult);
    expect(result._id).toEqual(createdResult._id);
    expect(result.name).toEqual('electronics updated');
  });
  it('should  get category with the given id ', async () => {
    let newObj = {
      name: 'electronics updated',
      display_name: 'dispalyelectronics',
      description: 'electronics category',
    };
    let createdResult = await category.create(obj);
    let result = await category.update(createdResult._id, newObj);
    // console.log('result[0]result[0]result[0]result[0]result[0]', result[0]);
    // console.log('createdResult[0]._idcreatedResult[0]._idcreatedResult[0]._id', createdResult);
    expect(result._id).toEqual(createdResult._id);
    expect(result.name).toEqual('electronics updated');
  });
  it('should  get category with the given id ', async () => {
    let newObj = {
      name: 'electronics updated',
      display_name: 'dispalyelectronics',
      description: 'electronics category',
    };
    let createdResult = await category.create(obj);
    let deletedResult = await category.delete(createdResult._id);
    let getResult = await category.get(deletedResult._id);

    expect(getResult.length).toEqual(0);
  });
});
