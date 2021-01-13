const pets = require('../models/petModel');
const petTypeController = require('./petTypeController')(pets);

describe('getMethod', () => {
  test('should get method return error', () => {
    const res = {
      send: jest.fn(),
    };

    pets.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    petTypeController.getMethod({ query: { type: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should get method return error', () => {
    const res = {
      json: jest.fn(),
    };

    pets.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    petTypeController.getMethod({ query: { type: '' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
});
