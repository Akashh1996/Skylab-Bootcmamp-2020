const Cart = require('../../models/cartModel');
const productDetailController = require('../cartController')(Cart);

jest.mock('../../models/cartModel');

describe('Cart Controllers', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    req = {
      body: {
        _id: 999,
      },
    };
  });

  describe('GET Methods', () => {
    test('should return json request if no error occurs', () => {
    // arrange
      Cart.find.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      productDetailController.getMethod(null, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });

    test('should return send if error occurs', () => {
    // arrange
      Cart.find.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      productDetailController.getMethod(null, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
  });
  describe('POST Methods', () => {
    test('should return json if no error occurs', () => {
    // arrange
      Cart.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      productDetailController.postMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });

    test('should return send if error occurs', () => {
    // arrange
      Cart.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      productDetailController.postMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
  });
  describe('DELETE Methods', () => {
    test('should return send if error occurs', () => {
    // arrange
      Cart.deleteOne.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      productDetailController.deleteMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
    test('should return send if no error occurs', () => {
    // arrange
      Cart.deleteOne.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      productDetailController.deleteMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });
  });
});
