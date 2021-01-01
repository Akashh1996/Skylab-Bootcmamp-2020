const User = require('../models/userModel');
const userController = require('./userController');

describe('userController', () => {
  test('should call res.json', () => {
    const user = {
      find: jest.fn().mockReturnValueOnce({
        populate: jest.fn(),
        exec: jest.fn().mockImplementationOnce((callback) => { callback(); }),
      }),
    };

    const res = { json: jest.fn(), send: jest.fn() };
    userController(user, null).getMethod(null, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send', () => {
    const user = {
      find: jest.fn().mockReturnValueOnce({
        populate: jest.fn(),
        exec: jest.fn().mockImplementationOnce((callback) => { callback(); }),
      }),
    };

    const res = { json: jest.fn(), send: jest.fn() };
    userController(user, null).getMethod(null, res);
    expect(res.send).toHaveBeenCalled();
  });

  test('should call response send on deleteMethod when there is an error', () => {
    const user = {
      findByIdAndRemove: jest.fn().mockImplementationOnce((query, callback) => {
        callback(true);
      }),
    };

    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };

    userController(user, null).deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });

  test('should call response send on deleteMethod when there is not an error', () => {
    const user = {
      findByIdAndRemove: jest.fn().mockImplementationOnce((query, callback) => {
        callback(false);
      }),
    };

    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };

    userController(user, null).deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });

  test('should call response send on postMethod when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        id: '1',
      },
    };
    User.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    userController.postMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });

  test('should call response send on postMethod when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        id: '1',
      },
    };
    User.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });
    userController.postMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });

  it('call the response send on putMethod when there is an error', () => {
    const req = { body: { id: 12 } };
    const res = {
      send: jest.fn(),
    };
    User.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    userController.putMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });

  it('call the response send on putMethod ', () => {
    const req = { body: { id: 12 } };
    const res = {
      json: jest.fn(),
    };
    User.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    userController.putMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
