const user = require('../models/userModel');
const userController = require('./userController')(user);

describe('getMethod', () => {
  test('should get method return error', () => {
    const res = {
      send: jest.fn(),
    };

    user.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementation((callback) => {
          callback(true, null);
        }),
      }),
    });

    userController.getMethod({ query: { name: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should get method to have been called', () => {
    const res = {
      json: jest.fn(),
    };

    user.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementation((callback) => {
          callback(false, null);
        }),
      }),
    });

    userController.getMethod({ query: { name: '' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('should put method return error', () => {
    const res = {
      send: jest.fn(),
    };

    user.findOneAndUpdate = jest.fn()
      .mockImplementationOnce((query, body, upsert, callback) => {
        callback(true, {});
      });

    userController.putMethod({ body: { name: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should put method get called', () => {
    const res = {
      json: jest.fn(),
    };

    user.findOneAndUpdate = jest.fn()
      .mockImplementationOnce((query, body, upsert, callback) => {
        callback(false, {});
      });

    userController.putMethod({ body: { name: '' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('postMethod', () => {
  test('should call res.send on putMethod', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const userFound = { favourite: ['ferran'], save: jest.fn() };

    user.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, userFound);
    });

    userController.postMethod({ body: { uid: '2', pet: 'ferran' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call res.json on putMethod', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const userFound = { favourite: ['edith'], save: jest.fn() };

    user.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, userFound);
    });

    userController.postMethod({ body: { uid: '2', pet: 'ferran' } }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send on putMethodvif not found user', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const userFound = null;

    user.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, userFound);
    });

    userController.postMethod({ body: { uid: '2', pet: 'ferran' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
