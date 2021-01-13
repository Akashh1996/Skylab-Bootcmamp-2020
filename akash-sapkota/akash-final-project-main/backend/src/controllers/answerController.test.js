const Answer = require('../models/answerModel');
const answerController = require('./answerController')(Answer);

jest.mock('../models/answerModel');

describe('AnswerController', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    req = {
      query: {
        _id: '123a',
      },
    };
  });

  describe('DeleteMethod', () => {
    test('should send error when send function is called', () => {
      Answer.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      answerController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send deleted answer when json function is called', () => {
      Answer.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      answerController.deleteMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
