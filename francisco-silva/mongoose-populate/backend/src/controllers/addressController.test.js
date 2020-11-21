const Address = require('../models/addressModel');
const addressController = require('./addressController')(Address);

describe('countryController', () => {
  test('should call response send on deleteMethod when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };
    Address.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    addressController.deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on deleteMethod when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };
    Address.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });
    addressController.deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on postMethod when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        id: '1',
      },
    };
    Address.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    addressController.postMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on postMethod when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        id: '1',
      },
    };
    Address.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });
    addressController.postMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });

  it('call the response send on putMethod when there is an error', () => {
    const req = { body: { id: 12 } };
    const res = {
      send: jest.fn(),
    };
    Address.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    addressController.putMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('call the response send on putMethod ', () => {
    const req = { body: { id: 12 } };
    const res = {
      json: jest.fn(),
    };
    Address.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    addressController.putMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
