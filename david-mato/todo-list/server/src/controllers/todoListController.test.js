const TodoList = require('../models/todoListModel');
const controller = require('./todoListController')(TodoList);

jest.mock('../models/todoListModel');
describe('productsController', () => {
  afterEach(() => {
    TodoList.mockRestore();
  });

  describe('getMethod', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
        setHeader: jest.fn(),
      };

      TodoList.find.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      controller.getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
        setHeader: jest.fn(),
      };

      TodoList.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      controller.getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('should call res.send when there is an error', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };

      TodoList.create.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      controller.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const req = {
        body: {},
      };
      const res = {
        json: jest.fn(),
      };

      TodoList.create.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      controller.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('should call res.send when there is an error', () => {
      const req = {
        body: { id: null },
      };
      const res = {
        send: jest.fn(),
      };

      TodoList.findByIdAndUpdate = jest.fn()
        .mockImplementationOnce((query1, query2, query3, callback) => {
          callback(false, {});
        });

      controller.putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send', () => {
      const req = {
        body: { id: null },
      };
      const res = {
        send: jest.fn(),
      };

      TodoList.findByIdAndUpdate = jest.fn()
        .mockImplementationOnce((query1, query2, query3, callback) => {
          callback(true, {});
        });

      controller.putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('deleteMethod', () => {
    test('should call res.json when there is an error', () => {
      const req = {
        body: { id: null },
      };
      const res = {
        json: jest.fn(),
      };

      TodoList.findByIdAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      controller.deleteMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call res.send', () => {
      const req = {
        body: { id: null },
      };
      const res = {
        send: jest.fn(),
      };

      TodoList.findByIdAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      controller.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
