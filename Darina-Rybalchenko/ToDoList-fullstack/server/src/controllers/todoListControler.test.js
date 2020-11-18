/* eslint-disable no-undef */
TodoList = require('../model/todoListModel');
const todoListController = require('./todoListController')(TodoList);

describe('todoListController', () => {
  describe('GetMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn(),
      };
      TodoList.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todoListController.getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('should call res.json with error', () => {
      const res = {
        json: jest.fn(),
      };
      TodoList.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      todoListController.getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('PUT Method', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn(),
      };
      const req = {
        body: '1',
      };
      TodoList.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todoListController.putMethod(req, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('should call json with error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: '1',
      };
      TodoList.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      todoListController.putMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('POST Method', () => {
    test('should call json', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: { _id: '1' },
      };
      TodoList.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });

      todoListController.postMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call json with error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: { _id: '1' },
      };
      TodoList.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(true, {});
      });

      todoListController.postMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('DELETE Method', () => {
    test('should call json', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: { _id: '1' },
      };
      TodoList.findByIdAndRemove = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(false, {});
      });

      todoListController.deleteMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call json with  error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: { _id: '1' },
      };
      TodoList.findByIdAndRemove = jest.fn().mockImplementationOnce((query, body, callback) => {
        callback(true, {});
      });

      todoListController.deleteMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
