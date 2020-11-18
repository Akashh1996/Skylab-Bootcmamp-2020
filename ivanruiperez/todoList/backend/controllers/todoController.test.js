const Todo = require('../models/todoModel');
const todoController = require('./todoController')(Todo);

describe('todoController', () => {
  describe('test getMethod', () => {
    test('find throws error', () => {
      const res = { send: jest.fn() };

      Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });
      todoController.getMethod({ todo: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('find not throws error', () => {
      const res = { json: jest.fn() };

      Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      todoController.getMethod({ todo: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('test postMethod', () => {
    test('create throws error', () => {
      const res = { send: jest.fn() };

      Todo.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });
      todoController.postMethod({ todo: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('create not throws error', () => {
      const res = { json: jest.fn() };

      Todo.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      todoController.postMethod({ todo: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('test deleteMethod', () => {
    test('delete throws error', () => {
      const res = { send: jest.fn() };

      Todo.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });
      todoController.deleteMethod({ todo: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('delete not throws error', () => {
      const res = { send: jest.fn() };

      Todo.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, { delete: jest.fn() });
      });
      todoController.deleteMethod({ todo: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
