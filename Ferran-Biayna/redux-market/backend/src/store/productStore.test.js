const Product = require('./productStore');

describe('cartController', () => {
  test('should call response json on getMethod', () => {
    const cart = [1];

    Product.deleteProduct();

    expect(cart.filter()).toHaveBeenCalled();
  });
});
