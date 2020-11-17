const Item = require('../models/toDoListModel');
const itemDeleteController = require('./itemDeleteController')(Item);

jest.mock('../models/toDoListModel');

describe('itemController', () => {
  test('should call response send on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };

    Item.findByIdAndRemove.mockImplementationOnce((query, callback) => {
      callback(true);
    });

    itemDeleteController.deleteMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };

    Item.findByIdAndRemove.mockImplementationOnce((query, callback) => {
      callback(null);
    });

    itemDeleteController.deleteMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
});
