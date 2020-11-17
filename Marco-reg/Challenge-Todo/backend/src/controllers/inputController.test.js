const { italic } = require('chalk');
const Input = require('../models/inputModel');
const inputController = require('./inputController')(Input);

describe('InputController', () => {
  it('should call response send on getMethod whe find throws an error', () => {
    const res = {
      send: jest.fn(),
    };

    Input.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    inputController.getMethod({ input: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
  it('should call response send on getMethod whe find throws an error', () => {
    const res = {
      json: jest.fn(),
    };

    Input.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    inputController.getMethod({ input: null }, res);

    expect(res.json).toHaveBeenCalled();
  });
});
