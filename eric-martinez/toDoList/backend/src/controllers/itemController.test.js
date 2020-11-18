const Item = require('../models/toDoListModel');
const itemController = require('./itemController')(Item);

jest.mock('../models/toDoListModel');

describe('itemController', () => {
  test('should call response json on getMethod when find throws error', () => {
    const res = {
      json: jest.fn(),
    };
    Item.find.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });

    itemController.getMethod(null, res);

    expect(res.json.mock.calls.length).toBe(1);
  });
  test('should call response send on getMethod when find throws error', () => {
    const res = {
      send: jest.fn(),
    };
    Item.find.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    itemController.getMethod(null, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: {},
    };

    Item.create.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });

    itemController.putMethod(req, res);

    expect(res.json.mock.calls.length).toBe(1);
  });
  test('should call response send on putMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: {},
    };

    Item.create.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    itemController.putMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
});
