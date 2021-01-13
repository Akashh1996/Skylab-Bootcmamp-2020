const pets = require('../models/petModel');
const petController = require('./petController')(pets);

describe('getMehtod', () => {
  test('should getMethod return error', () => {
    const res = {
      send: jest.fn(),
    };

    pets.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    petController.getMethod({ query: { id: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should getMethod return json with data', () => {
    const res = {
      json: jest.fn(),
    };

    pets.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    petController.getMethod({ query: { id: '' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
});
