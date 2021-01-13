const user = require('../../models/userModel');
const userController = require('./userController')(user);

describe('userController Methods', () => {
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('GetMethod', () => {
    test('Should call get Method and return json with data', () => {
      user.findOne = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(false, {});
          }),
        }),
      });

      userController.getMethod({ query: { displayName: '' } }, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call get Method and return error', () => {
      user.findOne = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(true, null);
          }),
        }),
      });

      userController.getMethod({ query: { displayName: '' } }, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('PutMethod', () => {
    test('Should call put method and find a user and update it or create it if none', () => {
      user.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, upsert, callback) => {
        callback(false, {});
      });

      userController.putMethod({ body: { name: '' } }, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call put method an return an error', () => {
      user.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, upsert, callback) => {
        callback(true, {});
      });

      userController.putMethod({ body: { name: '' } }, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('PostMethod', () => {
    test('Should call res.send on postMethod and delete game', async () => {
      const userfav = { favorites: ['game'], save: jest.fn() };

      user.findOne = jest.fn().mockImplementationOnce((req, callback) => {
        callback(true, userfav);
      });

      userController.postMethod({ body: { uid: '845390', videogame: 'game' } }, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('Should call res.json on postMethod and save game', async () => {
      const userfav = { favorites: ['newgame'], save: jest.fn() };

      user.findOne = jest.fn().mockImplementationOnce((req, callback) => {
        callback(true, userfav);
      });

      userController.postMethod({ body: { uid: '845390', videogame: 'game' } }, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res.send if no user', async () => {
      const userfav = null;

      user.findOne = jest.fn().mockImplementationOnce((req, callback) => {
        callback(true, userfav);
      });

      userController.postMethod({ body: { uid: '845390', videogame: 'game' } }, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
