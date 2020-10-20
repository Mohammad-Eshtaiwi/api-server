const logger = require('../lib/middlewares/timestamp');

describe('timestamp', () => {
  let consoleSpy;
  const req = { requestTime: 'test', method: 'method', path: 'path' };
  const res = {};
  const next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it('log the output correctly', () => {
    logger(req, res, next);

    console.log('hiiiiii');
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('move to the next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
