const Question = require('../models/questionsModel');
const questionController = require('./questionController')(Question);

describe('QuestionController', () => {
  let req;
  let res;
  beforeEach(() => {
    req = {
      params: {
        questionId: '123a',
      },
      id: '123a',
      body: {
        questionId: 'abc123',
      },
    };
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('AllMiddleWare', () => {
    test('should call next function on allmiddleware function', () => {
      const next = jest.fn();

      questionController.allMiddleware(req, null, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe('getMethod', () => {
    test('should send error when send function is called', () => {
      Question.findById = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(true, {});
            }),
          }),
        }),
      });
      questionController.getMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send error when send function is called', () => {
      Question.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(true, {});
      });

      questionController.putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send updated question when json function is called', () => {
      Question.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });

      questionController.putMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
