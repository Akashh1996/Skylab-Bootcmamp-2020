const videogames = require('../../models/videogameModel');
const videogamesController = require('./videogamesController')(videogames);

describe('videogamesController Methods', () => {
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('GetMethod', () => {
    test('Should call getMethod and get videogames', () => {
      videogames.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      videogamesController.getMethod({}, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call getMethod and return error', () => {
      videogames.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      videogamesController.getMethod({}, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('PutMethod', () => {
    test('Should call putMethod and create document', () => {
      videogames.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      videogamesController.putMethod({}, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call putMethod and return error', () => {
      videogames.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      videogamesController.putMethod({}, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
