const Hero = require('../models/heroModel');
const heroesController = require('./heroesController')(Hero);

describe('test heroes controller', () => {
  test('find throws error', () => {
    const res = { send: jest.fn() };

    Hero.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    heroesController.getMethod({ hero: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find throws well', () => {
    const res = { json: jest.fn() };

    Hero.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    heroesController.getMethod({ hero: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('create throws error', () => {
    const res = { send: jest.fn() };

    Hero.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    heroesController.putMethod({ hero: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('create throws well', () => {
    const res = { json: jest.fn() };

    Hero.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    heroesController.putMethod({ hero: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
});
