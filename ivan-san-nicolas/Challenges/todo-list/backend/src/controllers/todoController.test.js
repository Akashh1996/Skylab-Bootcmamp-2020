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
  test('should call res.send when there is an error in deleteMethod', () => {
    const req = {
      body: {
        todoId: 1,
      },
    };
    const res = {
      send: jest.fn(),
    };
    Todo.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    todoController.deleteMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('todoController patchMethod', () => {
  test('should call res.json without error in patchMethod', () => {
    const req = {
      body: {
        todoId: 1,
        todoNewName: 'Skylab-updated',
      },
    };
    const res = {
      json: jest.fn(),
    };
    Todo.findOneAndUpdate = jest.fn().mockImplementationOnce((query, update, callback) => {
      callback(null, {});
    });
    todoController.patchMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.send when there is an error in patchMethod', () => {
    const req = {
      body: {
        todoId: 1,
        todoNewName: 'Skylab-updated',
      },
    };
    const res = {
      send: jest.fn(),
    };
    Todo.findOneAndUpdate = jest.fn().mockImplementationOnce((query, update, callback) => {
      callback(true, {});
    });
    todoController.patchMethod(req, res);
  });
});

describe('todoController postMethod', () => {
  test('should call res.json in postMethod', () => {
    const req = {
      body: {
        newId: 20,
        newTodo: 'newTodo',
      },
    };
    const res = {
      json: jest.fn(),
    };
    Todo.create = jest.fn().mockImplementationOnce((newInput, callback) => {
      callback(null, {});
    });
    todoController.postMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.send when there is an error', () => {
    const req = {
      body: {
        newId: 20,
        newTodo: 'newTodo',
      },
    };
    const res = {
      send: jest.fn(),
    };
    Todo.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    todoController.postMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
