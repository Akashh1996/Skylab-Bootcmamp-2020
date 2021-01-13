const userSchema = require('../models/userSchema');
const usersController = require('./usersController')(userSchema);

jest.mock('../models/challengeSchema');

describe('usersController', () => {
  let res;
  beforeEach(() => {
    res = { send: jest.fn() };
  });

  describe('getUsersMethod', () => {
    test('should call res.send ', () => {
      userSchema.find = jest.fn().mockImplementationOnce((query, callback) => callback());

      usersController.getUsersMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send with error', () => {
      userSchema.find = jest.fn().mockImplementationOnce((query, callback) => callback(true));

      usersController.getUsersMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('putUserMethod', () => {
    test('should call res.send ', () => {
      const req = {
        body: { uid: null },
      };

      userSchema.findOneAndUpdate = jest.fn()
        .mockImplementationOnce((query1, query2, query3, callback) => {
          callback(false, {});
        });

      usersController.putUserMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send ', () => {
      const req = {
        body: { uid: null },
      };

      userSchema.findOneAndUpdate = jest.fn()
        .mockImplementationOnce((query1, query2, query3, callback) => {
          callback(true, null);
        });

      usersController.putUserMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
