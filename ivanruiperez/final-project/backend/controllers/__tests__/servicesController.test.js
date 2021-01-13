const Service = require('../../models/serviceModel');
const servicesController = require('../servicesController')(Service);

describe('test services controller', () => {
  test('find throws error', () => {
    const res = { send: jest.fn() };

    Service.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    servicesController.getMethod({ service: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find throws well', () => {
    const res = { json: jest.fn() };

    Service.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    servicesController.getMethod({ service: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('create throws error', () => {
    const res = { send: jest.fn() };

    Service.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    servicesController.postMethod({ service: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('create throws well', () => {
    const res = { json: jest.fn() };

    Service.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    servicesController.postMethod({ service: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
});
