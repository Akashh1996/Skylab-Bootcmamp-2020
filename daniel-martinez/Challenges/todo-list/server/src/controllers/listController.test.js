const Tvshows = require('../models/tvShowModel');
const listController = require('./listController')(Tvshows);

describe('listController', () => {
  test('getMethod should res a json', () => {
    const res = {
      json: jest.fn(),
    };

    Tvshows.find = jest.fn().mockImplementationOnce((query, callback) => callback(false, []));
    listController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('getMethod should send an error', () => {
    const res = {
      send: jest.fn(),
    };

    Tvshows.find = jest.fn().mockImplementationOnce((query, callback) => callback(true, []));
    listController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('putMethod should res a json', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      body: {},
    };

    Tvshows.create = jest.fn().mockImplementationOnce((query, callback) => callback(false, []));
    listController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('putMethod should res an error', () => {
    const res = {
      send: jest.fn(),
    };

    const req = {
      body: {},
    };

    Tvshows.create = jest.fn().mockImplementationOnce((query, callback) => callback(true, []));
    listController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('getMethod should send an error', () => {
    const res = {
      send: jest.fn(),
    };

    Tvshows.find = jest.fn().mockImplementationOnce((query, callback) => callback(true, []));
    listController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('deleteMethod should res a json', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      body: {},
    };

    Tvshows.findOneAndRemove = jest.fn().mockImplementationOnce(
      (query, callback) => callback(false, []),
    );
    listController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('deleteMethod should send an error', () => {
    const res = {
      send: jest.fn(),
    };

    const req = {
      body: {},
    };

    Tvshows.findOneAndRemove = jest.fn().mockImplementationOnce(
      (query, callback) => callback(true, []),
    );
    listController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
