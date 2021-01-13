const challengeSchema = require('../models/challengeSchema');
const challengesController = require('./challengesController')(challengeSchema);

jest.mock('../models/challengeSchema');

describe('challengesController', () => {
  let res;
  beforeEach(() => {
    res = { send: jest.fn() };
  });

  describe('getChallengesMethod', () => {
    test('should call res.send ', () => {
      challengeSchema.find = jest.fn().mockImplementationOnce((query, callback) => callback());

      challengesController.getChallengesMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send with error', () => {
      challengeSchema.find = jest.fn().mockImplementationOnce((query, callback) => callback(true));

      challengesController.getChallengesMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('postChallengesMethod', () => {
    let req;
    beforeEach(() => {
      req = { body: { name: 'Carlos' } };
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should call res.send', () => {
      challengeSchema.create = jest.fn().mockImplementationOnce((query, callback) => (
        callback()
      ));

      challengesController.postChallengesMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call send with error', () => {
      challengeSchema.create = jest.fn().mockImplementationOnce((query, callback) => (
        callback(true)
      ));

      challengesController.postChallengesMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('should call res.send ', () => {
      const req = {
        body: { _id: null },
      };

      challengeSchema.findByIdAndUpdate = jest.fn()
        .mockImplementationOnce((query1, query2, query3, callback) => {
          callback(false, {});
        });

      challengesController.putChallengeMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send when there is an error', () => {
      const req = {
        body: { _id: null },
      };

      challengeSchema.findByIdAndUpdate = jest.fn()
        .mockImplementationOnce((query1, query2, query3, callback) => {
          callback(true, null);
        });

      challengesController.putChallengeMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('deleteMethod', () => {
    test('should call res.send when there is an error', () => {
      const req = {
        body: { _id: null },
      };

      challengeSchema.findByIdAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      challengesController.deleteChallengeMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send ', () => {
      const req = {
        body: { _id: null },
      };

      challengeSchema.findByIdAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      challengesController.deleteChallengeMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
