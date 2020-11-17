const Todo = require('../models/todoModel');
const todoController = require('./todoController')(Todo);

describe('todoController getMethod', () => {
  test('should call res.send without error', () => {
    const res = {
      json: jest.fn(),
    };
    Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    todoController.getMethod(null, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    todoController.getMethod(null, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('todoController deleteMethod', () => {
  test('should call res.send without error in deleteMethod', () => {
    const req = {
      body: {
        todoId: 1,
      },
    };
    const res = {
      json: jest.fn(),
    };
    Todo.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null);
    });
    todoController.deleteMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
