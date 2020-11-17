const Todo = require('../src/models/todoModel');
const todosController = require('../src/controllers/todosController')(Todo);

jest.mock('../src/models/todoModel');

describe('todosController', () => {
  afterEach(() => {
    Todo.mockRestore();
  });

  describe('getMethod', () => {
    test('should call res json on getMethod', () => {
      const res = {
        json: jest.fn(),
      };

      Todo.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todosController.getMethod({}, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send in the getMethod', () => {
      const res = {
        send: jest.fn(),
      };

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
      const res = {
        json: jest.fn(),
      };

      Todo.create.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todosController.putMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send on putMehod', () => {
      const req = { body: '' };
      const res = {
        send: jest.fn(),
      };

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
      const res = { json: jest.fn() };

      Todo.findByIdAndUpdate.mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });

      todosController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send on postMethod', () => {
      const req = { body: { _id: '' } };
      const res = { send: jest.fn() };

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
      const res = { json: jest.fn() };

      Todo.findByIdAndRemove.mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });

      todosController.deleteMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send on deleteMethod', () => {
      const req = { body: { _id: '' } };
      const res = { send: jest.fn() };

      Todo.findByIdAndRemove.mockImplementationOnce((query, body, callback) => {
        callback(true, {});
      });

      todosController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
