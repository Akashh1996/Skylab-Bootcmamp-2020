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
  describe('putMethod', () => {
    test('should call response json on putMethod', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        body: {},
      };
      Todo.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      todoController.putMethod(req, res);
      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should call response send on putMethod', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        body: {},
      };
      Todo.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      todoController.putMethod(req, res);
      expect(res.send.mock.calls.length).toBe(1);
    });
  });
  describe('PostMethod', () => {
    test('should throw error while calling post method', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };
      Todo.findByIdAndUpdate.mockImplementationOnce((query, query1, callback) => {
        callback(true, null);
      });
      todoController.postMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should send updated todo on calling', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };
      Todo.findByIdAndUpdate.mockImplementationOnce((query, query1, callback) => {
        callback(false, {});
      });
      todoController.postMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('deleteMethod', () => {
    test('should throw error on res.send', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };
      Todo.findByIdAndRemove.mockImplementationOnce((query, query1, callback) => {
        callback(true, null);
      });
      todoController.deleteMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should throw error on res.send', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };
      Todo.findByIdAndRemove.mockImplementationOnce((query, query1, callback) => {
        callback(false, {});
      });
      todoController.deleteMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
