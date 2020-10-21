const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

let obj = {
  name: 'electronics',
  display_name: 'dispalyelectronics',
  description: 'electronics category',
};

describe('categories path', () => {
  it('should respond with 200 get method with the write route', async () => {
    let results = await mockRequest.post('/api/v1/categories').send(obj);
    results = await mockRequest.get(`/api/v1/categories`);
    expect(results.status).toBe(200);
  });
  it('should respond with 200 on a correct route and given id', async () => {
    let results = await mockRequest.post('/api/v1/categories').send(obj);
    results = await mockRequest.get(`/api/v1/categories/${results.body._id}`);
    expect(results.status).toBe(200);
  });
  it('should respond with 201 for post', async () => {
    const results = await mockRequest.post('/api/v1/categories').send(obj);
    expect(results.status).toBe(201);
  });
  it('should respond with 200 for put', async () => {
    let results = await mockRequest.post('/api/v1/categories').send(obj);

    obj = {
      name: 'hahahahh',
      display_name: 'hehheeheh',
      description: 'jajajajaja category',
    };
    results = await mockRequest.put(`/api/v1/categories/${results.body._id}`).send(obj);
    expect(results.status).toBe(200);
  });
  it('should respond with 200 for delete', async () => {
    let results = await mockRequest.post('/api/v1/categories').send(obj);

    obj = {
      name: 'hahahahh',
      display_name: 'hehheeheh',
      description: 'jajajajaja category',
    };
    results = await mockRequest.delete(`/api/v1/categories/${results.body._id}`);
    expect(results.status).toBe(200);
  });
});
