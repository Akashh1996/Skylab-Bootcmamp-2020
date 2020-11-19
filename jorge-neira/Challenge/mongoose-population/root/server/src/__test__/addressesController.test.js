const Address = require('../models/addressModel');
const addressController = require('../controllers/addressesController')(Address);

jest.mock('../models/addressModel');

describe('Address Controllers', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    req = {
      body: {
        street: 'String',
        number: 99,
        city: 'String',
        country: 'String',
      },
    };
  });
  describe('GET methods', () => {
    test('should return json request if no error occurs', () => {
      // arrange
      Address.find.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      addressController.getAddressMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });

    test('should return send request if error occurs', () => {
      // arrange
      Address.find.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      addressController.getAddressMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
  });

  describe('PUT Methods', () => {
    test('should return json request if no error occurs', () => {
      // arrange
      Address.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      addressController.putAddressMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should return send request if error occurs', () => {
      // arrange
      Address.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      addressController.putAddressMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
  });
});
