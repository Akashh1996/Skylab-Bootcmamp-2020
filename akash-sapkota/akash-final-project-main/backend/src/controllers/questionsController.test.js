const Question = require('../models/questionsModel');
const questionsController = require('./questionsController')(Question);

describe('QuestionsController', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    req = {
      query: {
        tag: 'react',
      },
      params: {
        userId: '12baec',
      },
      body: {
        _id: '123abc',
      },
    };
  });

  describe('find question', () => {
    test('should send error when send function is called', () => {
      Question.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(true, {});
            }),
          }),
        }),
      });
      questionsController.getMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send questions when json function is called', () => {
      Question.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(false, {
                tag: 'react',
              });
            }),
          }),
        }),
      });
      questionsController.getMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('getQuestionUser', () => {
    test('should send error when send function is called', () => {
      Question.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(true, {});
            }),
          }),
        }),
      });

      questionsController.getQuestionsUser(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should send user question when json function is called', () => {
      Question.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(false, {});
            }),
          }),
        }),
      });

      questionsController.getQuestionsUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('DeleteQuestion', () => {
    test('should send error when send function is called', () => {
      Question.findByIdAndRemove = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(true, {});
      });
      questionsController.deleteMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should send deleted question when json function is called', () => {
      Question.findByIdAndRemove = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });
      questionsController.deleteMethod(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('PostQuestion', () => {
    test('should send error when send function is called', () => {
      Question.create = jest.fn().mockImplementationOnce((newQuestion, callback) => {
        callback(true, {});
      });

      questionsController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send new question when json function is called', () => {
      Question.create = jest.fn().mockImplementationOnce((newQuestion, callback) => {
        callback(false, {});
      });

      questionsController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('UpdateQuestion', () => {
    test('should send error when send function is called', () => {
      Question.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(true, {});
      });

      questionsController.putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send data when json function is called', () => {
      Question.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });

      questionsController.putMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
