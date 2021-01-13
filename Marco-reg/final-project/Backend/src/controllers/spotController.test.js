const spotController = require('./spotController');

describe('spotController', () => {
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = { params: { spotId: {} } };
    const spot = {
      findById: jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, false);
      }),
    };
    spotController(spot).getMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = { params: { spotId: {} } };
    const spot = {
      findById: jest.fn().mockImplementation((query, callback) => {
        callback(false, {});
      }),
    };
    spotController(spot).getMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
