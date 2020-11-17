const inputsSchema = require('../models/inputsSchema');

jest.mock('../models/inputsSchema');
const inputsController = require('./inputsController')(inputsSchema);

describe('inputsController tests', () => {
  let req;
  let res;
  let result;
  let error;

  afterAll(() => {
    inputsSchema.mockRestore();
  });

  describe('getMethod', () => {
    beforeEach(() => {
      res = { send: jest.fn(), json: jest.fn() };
      result = {};
    });

    test('if there is an error should call res.send with the error', () => {
      error = true;
      inputsSchema.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(error, result);
      });

      inputsController.getMethod(null, res);

      expect(res.send).toHaveBeenCalledWith(error);
    });

    test('should call res.json with the result if there is no error', () => {
      error = false;
      inputsSchema.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(error, result);
      });

      inputsController.getMethod(null, res);

      expect(res.json).toHaveBeenCalledWith(result);
    });
  });

  describe('postMethod', () => {
    beforeEach(() => {
      res = { send: jest.fn() };
      req = { body: { input: null } };
      result = {};
    });

    test('if there is an error should call res.send with the error', () => {
      error = true;
      inputsSchema.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(error, result);
      });

      inputsController.postMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(error);
    });

    test('should call res.send with the result if there is no error', () => {
      error = false;
      inputsSchema.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(error, result);
      });

      inputsController.postMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });

  describe('patchMethod', () => {
    beforeEach(() => {
      res = { send: jest.fn() };
      req = { body: { input: {_id: null}, newInput: {text:null} } };
      response = {};
    });

    test('if there is an error should call res.send with the error', () => {
      error = true;
      inputsSchema.updateOne = jest.fn().mockImplementationOnce((query, change, callback) => {
        callback(error, response);
      });

      inputsController.patchMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(error);
    });

    test('should call res.send with the response if there is no error', () => {
      error = false;
      inputsSchema.updateOne = jest.fn().mockImplementationOnce((query, change, callback) => {
        callback(error, response);
      });

      inputsController.patchMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });

  describe('deleteMethod', () => {
    beforeEach(() => {
      res = { send: jest.fn() };
      req = { body: { input: {_id: null} } };
      response = {};
    });

    test('if there is an error should call res.send with the error', () => {
      error = true;
      inputsSchema.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(error, response);
      });

      inputsController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(error);
    });

    test('should call res.send with the response if there is no error', () => {
      error = false;
      inputsSchema.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(error, response);
      });

      inputsController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });
});
