/* eslint-disable no-undef */
const Basket = require('../models/productModel');
const basketController = require('./basketController')(Basket);

describe('basketControler', () => {
  test('should call json', () => {
    const res = {
      json: jest.fn(),
    };
    Basket.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    basketController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.json with error', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Basket.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    basketController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });
});
