const inputsSchema = require('../models/inputsSchema');

jest.mock('../models/inputsSchema');
const inputsController = require('./inputsController')(inputsSchema);

describe('inputsController tests', () => {
  let req;
  let res;
  let result;
  let error;

  beforeEach(()=> {
    res = { send: jest.fn(), json: jest.fn() };
  })

  afterAll(() => {
    inputsSchema.mockRestore();
  });

  describe('getMethod', () => {
    beforeEach(() => {
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
      req = { body: { text: null } };
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
      req = { body: { input: {_id: null}, newInput: {text:null} } };
      updatedItem = {};
    });

    test('if there is an error should call res.send with the error', () => {
      error = true;
      inputsSchema.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, change, callback) => {
        callback(error, updatedItem);
      });

      inputsController.patchMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(error);
    });

    test('should call res.send with the updatedItem if there is no error', () => {
      error = false;
      inputsSchema.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, change, callback) => {
        callback(error, updatedItem);
      });

      inputsController.patchMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });

  describe('deleteMethod', () => {
    beforeEach(() => {
      req = { body: { _id: null } };
      response = {};
    });

    test('if there is an error should call res.send with the error', () => {
      error = true;
      inputsSchema.findByIdAndDelete = jest.fn().mockImplementationOnce((id, callback) => {
        callback(error, response);
      });

      inputsController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(error);
    });

    test('should call res.send with the response if there is no error', () => {
      error = false;
      inputsSchema.findByIdAndDelete = jest.fn().mockImplementationOnce((id, callback) => {
        callback(error, response);
      });

      inputsController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });
});
