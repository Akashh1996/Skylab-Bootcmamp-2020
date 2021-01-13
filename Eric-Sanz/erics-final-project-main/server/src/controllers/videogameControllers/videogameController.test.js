const videogames = require('../../models/videogameModel');
const videogameController = require('./videogameController')(videogames);

describe('videogameController Methods', () => {
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('GetMethod', () => {
    test('Should call getMethod and return json with data', () => {
      videogames.findById = jest.fn().mockImplementation((query, callback) => {
        callback(false, {});
      });

      videogameController.getMethod({ params: { id: '' } }, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call getMethod and return error', () => {
      videogames.findById = jest.fn().mockImplementation((query, callback) => {
        callback(true, {});
      });

      videogameController.getMethod({ params: { id: '' } }, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
