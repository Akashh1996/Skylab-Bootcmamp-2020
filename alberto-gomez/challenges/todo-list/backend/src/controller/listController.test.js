/* eslint-disable linebreak-style */
const List = require('../models/listModel');
const listController = require('./listController')(List);

describe('listController', () => {
  describe('getMethod', () => {
    test('should call response send when find throws error', () => {
      const res = {
        send: jest.fn(),
      };

      List.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      listController.getMethod({ task: 'Hello' }, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call response send when find works OK', () => {
      const res = {
        json: jest.fn(),
      };

      List.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      listController.getMethod({}, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('should call response send when create throws error', () => {
      const res = {
        send: jest.fn(),
      };

      List.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      listController.postMethod({ query: { task: 'Hello' } }, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call response send when create works OK', () => {
      const res = {
        json: jest.fn(),
      };

      List.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      listController.postMethod({ query: { task: 'Hello' } }, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('deleteMethod', () => {
    test('should call response send when create throws error', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };

      List.findByIdAndRemove = jest.fn().mockImplementationOnce((queryA, queryB, callback) => {
        callback(true, null);
      });

      listController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call response send when create works OK', () => {
      const req = {
        body: {},
      };
      const res = {
        json: jest.fn(),
      };

      List.findByIdAndRemove = jest.fn().mockImplementationOnce((queryA, queryB, callback) => {
        callback(false, {});
      });

      listController.deleteMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
