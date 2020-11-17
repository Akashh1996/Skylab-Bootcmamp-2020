const Todo = require('../models/todoModel');
const todoController = require('./todoController')(Todo);

jest.mock('../models/todoModel');

describe('todoController', () => {
  afterEach(() => {
    Todo.mockRestore();
  });
  describe('getMethod', () => {
    test('should throw error in getMethod', () => {
      const res = {
        send: jest.fn(),
      };
      Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      todoController.getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
      };
      Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todoController.getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('deleteMethod', () => {
    test('should throw error in deleteMethod', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
          _id: '1234',
        },
      };
      Todo.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      todoController.getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
    /*  test('should call res.json', () => {
      const res = {
        json: jest.fn(),
      };
      Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todoController.getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    }); */
  });
});
