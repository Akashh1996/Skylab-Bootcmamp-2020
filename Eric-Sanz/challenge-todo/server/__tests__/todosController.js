const Todo = require('../src/models/todoModel');
const todosController = require('../src/controllers/todosController')(Todo);

jest.mock('../src/models/todoModel');

describe('todosController', () => {
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
  });
  afterEach(() => {
    Todo.mockRestore();
  });

  describe('getMethod', () => {
    test('should call res json on getMethod', () => {
      Todo.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todosController.getMethod({}, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send in the getMethod if there is an error', () => {
      Todo.find.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      todosController.getMethod({}, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('Should call res json on putMehod', () => {
      const req = { body: '' };

      Todo.create.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todosController.putMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send on putMehod if there is an error', () => {
      const req = { body: '' };

      Todo.create.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      todosController.putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('Should call res json on postMethod', () => {
      const req = { body: { _id: '' } };

      Todo.findByIdAndUpdate.mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });

      todosController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send on postMethod if there is an error', () => {
      const req = { body: { _id: '' } };

      Todo.findByIdAndUpdate.mockImplementationOnce((query, body, callback) => {
        callback(true, {});
      });

      todosController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('deleteMethod', () => {
    test('Should call res json on deleteMethod', () => {
      const req = { body: { _id: '' } };

      Todo.findByIdAndRemove.mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });

      todosController.deleteMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send on deleteMethod if there is an error', () => {
      const req = { body: { _id: '' } };

      Todo.findByIdAndRemove.mockImplementationOnce((query, body, callback) => {
        callback(true, {});
      });

      todosController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
