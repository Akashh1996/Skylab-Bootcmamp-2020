/* eslint-disable no-undef */
TodoList = require('../model/todoListModel');
const todoListController = require('./todoListController')(TodoList);

describe('todoListController', () => {
  describe('GetMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn(),
      };
      TodoList.find = jest.fn().mockImplementationOnce((quiery, callback) => {
        callback(false, {});
      });

      todoListController.getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('should call res.json with error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      TodoList.find = jest.fn().mockImplementationOnce((quiery, callback) => {
        callback(true, {});
      });

      todoListController.getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
