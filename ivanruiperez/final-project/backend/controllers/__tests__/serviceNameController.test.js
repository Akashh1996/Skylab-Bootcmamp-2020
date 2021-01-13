const Service = require('../../models/serviceModel');
const serviceNameController = require('../serviceNameController')(Service);

describe('test services by name controller', () => {
  test('find throws error', () => {
    const res = { send: jest.fn() };
    const req = { query: '' };
    Service.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    serviceNameController.getMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find throws well', () => {
    const res = { json: jest.fn() };
    const req = { query: '' };

    Service.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    serviceNameController.getMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
