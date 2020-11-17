const Hero = require('../models/heroModel');
const heroesController = require('./heroesController')(Hero);

describe('mongodb heroes controller', () => {
  test('should call getMethod on mongoose', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    heroesController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('Should enter in the bad path of getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Hero.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    heroesController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
});
