const Todo = require('../models/todoModel');
const todoController = require('./todoController')(Todo);

describe('todoController', () => {
  it('should call response send on get when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    todoController.getMethod({ input: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('should call response send on get when there is not an error', () => {
    const res = {
      json: jest.fn(),
    };
    Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    todoController.getMethod({ input: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
  it('call the response send on putMethod when there is an error', () => {
    const req = { body: { id: 12 } };
    const res = {
      send: jest.fn(),
    };
    Todo.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    todoController.putMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('call the response send on putMethod when there is not error', () => {
    const req = { body: { id: 12 } };
    const res = {
      json: jest.fn(),
    };
    Todo.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    todoController.putMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('should call response send on deleteMethod when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };
    Todo.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    todoController.deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on deleteMethod when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };
    Todo.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });
    todoController.deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on updateMethod when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        id: '1',
      },
    };
    Todo.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    todoController.updateMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on updateMethod when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        id: '1',
      },
    };
    Todo.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });
    todoController.updateMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
});
