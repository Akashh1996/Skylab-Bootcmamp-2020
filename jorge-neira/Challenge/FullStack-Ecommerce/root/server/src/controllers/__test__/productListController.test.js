const Laptops = require('../../models/laptopModel');
const productListController = require('../productsListController')(Laptops);

describe('Test product list controller', () => {
  test('Test Get Methods', () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    Laptops.find = jest.fn().mockImplementationOnce((query, callback) => {
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
    Laptops.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback();
    });
    // act
    productListController.getMethod(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
});
