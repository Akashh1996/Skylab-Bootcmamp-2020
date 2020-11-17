const Product = require('../../models/laptopModel');
const productListController = require('../productsListController')(Product);

describe('Test product list controller', () => {
  test('Test Get Methods', () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'Myproduct');
    });
    // act
    productListController.getMethod(null, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });
  test('Test Get Methods', () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback();
    });
    // act
    productListController.getMethod(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
});
