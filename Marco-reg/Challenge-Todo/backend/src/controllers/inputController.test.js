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
  it('call the create method inside the puthod', () => {
    const req = { body: { id: 12 } };
    const res = {
      send: jest.fn(),
    };
    Input.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    inputController.putMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('call the create method inside the puthod', () => {
    const req = { body: { id: 12 } };
    const res = {
      json: jest.fn(),
    };
    Input.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    inputController.putMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  it('call the deleteMethod', () => {
    const req = { body: {} };
    const res = {
      send: jest.fn(),
    };
    Input.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    inputController.deleteMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('call the deleteMethod', () => {
    const req = { body: {} };
    const res = {
      json: jest.fn(),
    };
    Input.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });
    inputController.deleteMethod(req, res);
    expect(json.send).toHaveBeenCalled();
  });
  it('call the UpdateMethod', () => {
    const req = { params: { id: 1 } };
    const res = {
      send: jest.fn(),
    };
    Input.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    inputController.updateMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('call the UpdateMethod', () => {
    const req = { params: { id: 1 } };
    const res = {
      send: jest.fn(),
    };
    Input.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    inputController.updateMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
