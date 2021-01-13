const User = require('../../models/userModel');
const favAuthorController = require('./favAuthorController')(User);

jest.mock('axios');

describe('favAtuthorController', () => {
  test('should call res.send on getMethod if found user', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { authors: ['ferran'] };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(false, user);
    });

    favAuthorController.getMethod({ params: { userId: '2' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call res.send on getMethod if not found user', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = {};

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    favAuthorController.getMethod({ params: { userId: '2' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call res.send on postMethod if found user and author', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { authors: ['ferran'], save: jest.fn() };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    favAuthorController.postMethod({ body: { uid: '2', authors: 'ferran' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call res.send on postMethod if not found author', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { authors: [] };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    favAuthorController.postMethod({ body: { uid: '2', authors: 'ferran' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.send on postMethod if not found user', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = null;

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    favAuthorController.postMethod({ body: { uid: '2', authors: 'ferran' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call res.send on putMethod', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { authors: ['ferran'], save: jest.fn() };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    favAuthorController.putMethod({ body: { uid: '2', authors: 'ferran' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call res.json on putMethod', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { authors: ['edith'], save: jest.fn() };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    favAuthorController.putMethod({ body: { uid: '2', authors: 'ferran' } }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send on putMethodvif not found user', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = null;

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    favAuthorController.putMethod({ body: { uid: '2', authors: 'ferran' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
