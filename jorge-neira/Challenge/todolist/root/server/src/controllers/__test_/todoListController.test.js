const Todos = require('../../models/todoListModel');
const todoListController = require('../todoListController')(Todos);

jest.mock('../../models/todoListModel');

describe('TodoList controllers', () => {
  const res = {
    json: jest.fn(),
    send: jest.fn(),
  };
  const req = {
    body: { todoId: 1, todoDescription: 'String' },
  };

  test('GET methods should return json', () => {
    // arrange
    Todos.find.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    // act
    todoListController.getMethod(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('GET Methods should return send if error occurs', () => {
    // arrange
    Todos.find.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    // act
    todoListController.getMethod(null, res);
    // assert
    expect(res.send.mock.calls.length).toBe(1);
  });

  test('POST Methods Should return json request if no error occurs', () => {
    // arrange
    Todos.create.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    // act
    todoListController.postMethod(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('POST Methods should return send request if error occurs', () => {
    // arrange
    Todos.create.mockImplementationOnce((query, callback) => {
      callback(true);
    });
    // act
    todoListController.postMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });

  test('DELETE Methods should return send request if error occurs', () => {
    // arrange
    Todos.deleteOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    // act
    todoListController.deleteMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });
  test('DELETE Methods should return json if no error occurs', () => {
    // arrange
    Todos.deleteOne.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    // act
    todoListController.deleteMethod(req, res);
    // assert
    expect(res.json.mock.calls.length).toBe(1);
  });
  test('PATCH Method should return send request if error occurs', () => {
    // arrange
    Todos.findOneAndUpdate.mockImplementationOnce(((query, update, option, callback) => {
      callback(true, null);
    }));
    // act
    todoListController.patchMethod(req, res);
    // assert
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('PATCH Method should return json with the new objectUpdated request if no error occurs', () => {
    // arrange
    Todos.findOneAndUpdate.mockImplementationOnce(((query, update, option, callback) => {
      callback(null, true);
    }));
    // act
    todoListController.patchMethod(req, res);
    // assert
    expect(res.json.mock.calls.length).toBe(1);
  });
});
