const Addresses = require('../models/addressesModel');
const addressesController = require('../controllers/AddressesController')(Addresses);

describe('AddressesController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };
    Addresses.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(false, 'AddressesList'); }),
      }),
    });

    addressesController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    Addresses.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true, 'errorFindAddessesList'); }),
      }),
    });

    addressesController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const req = {
      body: { name: 'Skylab mola!' },
    };
    const res = {
      json: jest.fn(),
    };
    Addresses.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'newAddress');
    });

    addressesController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on postMethod', () => {
    const req = {
      body: { name: 'Skylab mola!' },
    };
    const res = {
      send: jest.fn(),
    };
    Addresses.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorAddAddress');
    });

    addressesController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };
    const req = { body: { _id: '1' } };
    Addresses.findByIdAndUpdate = jest.fn().mockImplementationOnce((body, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    addressesController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on putMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = { body: { _id: '1' } };
    Addresses.findByIdAndUpdate = jest.fn().mockImplementationOnce((body, callback) => {
      callback(true, 'errorDeleteAddress');
    });

    addressesController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };
    const req = { body: { _id: '1' } };
    Addresses.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    addressesController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = { body: { _id: '1' } };
    Addresses.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorDeleteAddress');
    });

    addressesController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
