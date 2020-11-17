/* eslint-disable linebreak-style */
const Hero = require('../stores/heroStore');
const heroesController = require('./heroesController')(Hero);

describe('heroesController', () => {
  test('should call response send on getMethod throws error', () => {
    const res = {
      send: jest.fn(),
    };

    Hero.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    heroesController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response send on getMethod goes well', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    heroesController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response send on putMethod that throws error', () => {
    const res = {
      send: jest.fn(),
    };

    Hero.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    heroesController.putMethod({ query: { id: 1, name: 'null' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response send on putMethod that goes well', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    heroesController.putMethod({ query: { id: 1, name: 'null' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
