const Todos = require('../../models/todoListModel');
const todoListController = require('../todoListController')(Todos);

jest.mock('../../models/todoListModel');

describe('Test TodoList controllers', () => {
  test('Testing GET methods happy path', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Todos.find.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    // act
    todoListController.getMethod(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('Test GET Methods not happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
    };
    Todos.find.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    // act
    todoListController.getMethod(null, res);
    // assert
    expect(res.send.mock.calls.length).toBe(1);
  });

  test('Test POST Methods happy path', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: {},
    };

    Todos.create.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    todoListController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('Test POST Methods not happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
    };
    const req = {
      body: {},
    };
    // act
    Todos.create.mockImplementationOnce((query, callback) => {
      callback(true);
    });
    todoListController.postMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });

  test('Test DELETE Methods happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
    };
    const req = {
      body: { todoId: 1 },
    };
    // act
    Todos.deleteOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    todoListController.deleteMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });
  test('Test DELETE Methods happy path', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: { todoId: 1 },
    };
    // act
    Todos.deleteOne.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    todoListController.deleteMethod(req, res);
    // assert
    expect(res.json.mock.calls.length).toBe(1);
  });
  test('Test PATCH Method', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      body: {},
    };

    Todos.findOneAndUpdate.mockImplementationOnce(((query1, query2, query3, callback) => {
      callback(true, null);
    }));

    todoListController.patchMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
  test('Test PATCH Method not happy path', () => {
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: {},
    };

    Todos.findOneAndUpdate.mockImplementationOnce(((query1, query2, query3, callback) => {
      callback(null, true);
    }));

    todoListController.patchMethod(req, res);

    expect(res.json.mock.calls.length).toBe(1);
  });
});
