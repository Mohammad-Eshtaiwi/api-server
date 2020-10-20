const logger = require('../lib/middlewares/timestamp');

describe('timestamp', () => {
  const req = {};
  const res = {};
  const next = jest.fn();
  it('should add requestTime into req object', () => {
    logger(req, res, next);
    expect(req).toHaveProperty('requestTime');
  });
});
