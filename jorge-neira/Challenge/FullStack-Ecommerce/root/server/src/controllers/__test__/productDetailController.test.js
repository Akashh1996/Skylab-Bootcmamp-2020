const Product = require('../../models/laptopModel');
const productDetailController = require('../productDetailController')(Product);

describe('Test product detail controllers', () => {
  test('Test Get Methods happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      params: {
        productName: 'H500GV-HC002R',
      },
    };
    Product.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback();
    });
    // act
    productDetailController.getMethod(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
  test('Test Get Methods no happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      params: {
        productName: 'H500GV-HC002R',
      },
    };
    Product.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    // act
    productDetailController.getMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });
});
