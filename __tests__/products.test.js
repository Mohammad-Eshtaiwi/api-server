const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

let obj = {
  category: 'electronics',
  display_name: `product name`,
  description: 'electroics description',
};

describe('products path', () => {
  it('should respond with 200 get method with the write route', async () => {
    let results = await mockRequest.post('/api/v1/products').send(obj);
    results = await mockRequest.get('/api/v1/products');
    expect(results.status).toBe(200);
  });
  it('should respond with 200 on a correct route and given id', async () => {
    let results = await mockRequest.post('/api/v1/products').send(obj);
    results = await mockRequest.get(`/api/v1/products/${results.body._id}`);
    expect(results.status).toBe(200);
  });
  it('should respond with 201 for post', async () => {
    const results = await mockRequest.post('/api/v1/products').send(obj);
    expect(results.status).toBe(201);
  });
  it('should respond with 200 for put', async () => {
    let results = await mockRequest.post('/api/v1/products').send(obj);
    obj = {
      category: 'electronics updated',
      display_name: `product name`,
      description: 'electroics description',
    };
    results = await mockRequest.put(`/api/v1/products/${results.body._id}`).send(obj);
    expect(results.status).toBe(200);
  });
  it('should respond with 200 for delete', async () => {
    let results = await mockRequest.post('/api/v1/products').send(obj);
    results = await mockRequest.delete(`/api/v1/products/${results.body._id}`).send(obj);
    expect(results.status).toBe(200);
  });
});
