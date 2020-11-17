/* eslint-disable no-undef */
const Product = require('../stores/productStore');
const productsController = require('./productsController')(Product);

describe('productsControler', () => {
  test('should call json', () => {
    const res = {
      json: jest.fn(),
    };
    productsController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });
});
