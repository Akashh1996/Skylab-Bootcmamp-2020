const usersController = require('./usersController');

describe('userController', () => {
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = { params: { userId: {} } };
    const user = {
      findById: jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, false);
      }),
    };
    usersController(user).getMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = { params: { userId: {} } };
    const user = {
      findById: jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      }),
    };
    usersController(user).getMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('should call a response on putMethod', () => {
    const res = {
      json: jest.fn(),
    };
    const req = { body: { user: { email: 'dasd' } } };

    const user = {
      findOne: jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      }),
    };
    usersController(user).putMethod(req, res);
    expect(res).toHaveBeenCalled();
  });
  test('should call a response on putMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const email = {
      create: jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      }),
    };
    usersController(email).putMethod({}, res);
    expect(res.send).toHaveBeenCalled();
  });
});
