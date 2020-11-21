const list = require('../models/listModels');
const detailController = require('./detailController')(list);

describe('getMethod', () => {
  test('should return error', () => {
    const res = {
      send: jest.fn(),
    };

    list.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    detailController.getMethod({ query: { projectName: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return json on success', () => {
    const res = {
      json: jest.fn(),
    };

    list.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });

    detailController.getMethod({ query: { projectName: '' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
});
