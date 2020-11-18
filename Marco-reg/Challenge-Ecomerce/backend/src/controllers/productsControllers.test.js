/* eslint-disable linebreak-style */

const Product = require('../models/productModel');
const productsController = require('./productsControllers')(Product);

describe('productsController', () => {
  it('shold call response send on getMethod when find throws error', () => {
    const res = {
      send: jest.fn(),
    };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    productsController.getMethod({ product: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
  it('shold call response send on getMethod when find all ok', () => {
    const res = {
      json: jest.fn(),
    };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    productsController.getMethod({ product: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  xit('shold call response send on getMethod when find all ok', () => {
    const req = { body: { id: 'something' } };
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    Product.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    productsController.putMethod({}, res);

    expect(jest.fn()).toHaveBeenCalled();
  });
});
