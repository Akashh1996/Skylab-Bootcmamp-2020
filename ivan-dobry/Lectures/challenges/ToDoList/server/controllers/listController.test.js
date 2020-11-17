const items = require('../models/listModel');
const listController = require('./listController')(items);

describe('getMethod', () => {
  test('should getMethod return error', () => {
    const res = {
      send: jest.fn(),
    };

    items.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    listController.getMethod({ item: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should getMethod return res.json', () => {
    const res = {
      json: jest.fn(),
    };

    items.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    listController.getMethod({ item: null }, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('deleteMethod', () => {
  test('should return error message', () => {
    const res = {
      send: jest.fn(),
    };

    items.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    listController.deleteMethod({ query: { id: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should return a sucess delete message', () => {
    const res = {
      send: jest.fn(),
    };

    items.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });

    listController.deleteMethod({ query: { id: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('should get an error message', () => {
    const res = {
      send: jest.fn(),
    };

    items.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });

    listController.putMethod({ query: { value: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should get add a new document', () => {
    const res = {
      send: jest.fn(),
    };

    items.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });

    listController.putMethod({ query: { value: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('patchMethod', () => {
  test('should return error', () => {
    const res = {
      send: jest.fn(),
    };

    items.findByIdAndUpdate = jest.fn().mockImplementationOnce((id, value, callback) => {
      callback(true);
    });

    listController.patchMethod({ query: { id: '' } }, { value: '' }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should update document', () => {
    const res = {
      send: jest.fn(),
    };

    items.findByIdAndUpdate = jest.fn().mockImplementationOnce((id, value, callback) => {
      callback(false);
    });

    listController.patchMethod({ query: { id: '' } }, { value: '' }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
