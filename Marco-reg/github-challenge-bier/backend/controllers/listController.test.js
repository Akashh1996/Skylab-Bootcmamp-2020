const list = require('../models/listModels');
const listController = require('./listController')(list);

describe('getMethod', () => {
  test('should return a res send error message', () => {
    const res = {
      send: jest.fn(),
    };

    list.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    listController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should return res.send with list data', () => {
    const res = {
      send: jest.fn(),
    };

    list.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });

    listController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('should return error mesage on error', () => {
    const res = {
      send: jest.fn(),
    };

    list.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    listController.putMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return item added message on putMethod success', () => {
    const res = {
      send: jest.fn(),
    };

    list.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });

    listController.putMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('deleteMethod', () => {
  test('should return error', () => {
    const res = {
      send: jest.fn(),
    };

    list.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    listController.deleteMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return message on delete item', () => {
    const res = {
      send: jest.fn(),
    };

    list.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });

    listController.deleteMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
});
