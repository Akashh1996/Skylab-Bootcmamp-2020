const challengeIdController = require('./challengeIdController');

describe('challengeIdController', () => {
  describe('getByIdMethod', () => {
    test('should call json', () => {
      const challengeSchema = {
        findOne: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback()),
        }),
      };
      const req = { params: { challengeID: '2' } };
      const res = {
        send: jest.fn(),
      };

      challengeIdController(challengeSchema).getByIdMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call json with error', () => {
      const challengeSchema = {
        findOne: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true)),
        }),
      };
      const req = { params: { challengeID: '2' } };
      const res = {
        send: jest.fn(),
        json: jest.fn(),
      };

      challengeIdController(challengeSchema).getByIdMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
