const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('products path', () => {
  it('should respond with 200 get method with the write route', () => {
    return mockRequest.get('/api/v1/products').then(results => {
      expect(results.status).toBe(200);
    });
  });
  it('should respond with 200 on a correct route and given id', () => {
    return mockRequest.get('/api/v1/products/1').then(results => {
      expect(results.status).toBe(200);
    });
  });
  it('should respond with 201 for post', () => {
    return mockRequest.post('/api/v1/products').then(results => {
      expect(results.status).toBe(201);
    });
  });
  it('should respond with 200 for put', () => {
    return mockRequest.put('/api/v1/products/1').then(results => {
      expect(results.status).toBe(200);
    });
  });
  it('should respond with 200 for delete', () => {
    return mockRequest.delete('/api/v1/products/1').then(results => {
      expect(results.status).toBe(200);
    });
  });
});
