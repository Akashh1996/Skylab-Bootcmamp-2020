const mongoose = require('mongoose');
const Product = require('../models/productModel');

const productData = {
  id: 4,
  'product-name': "MEN'S BETTER THAN NAKED&trade; JACKET",
  'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
  'header-top-right-text': 'Shop All',
  'header-top-left-text': "Men's",
  'product-url': 'http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html',
  'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-mens/',
  price: 28,
};
// mongoose test done with the tutorial: https://medium.com/javascript-in-plain-english/how-i-setup-unit-test-for-mongodb-using-jest-mongoose-103b772ee164

describe('listontroller', () => {
  afterEach(() => {
    Product.mockRestore();
  });

  beforeAll(async () => {
    // eslint-disable-next-line no-underscore-dangle
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true }, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(1);
      }
    });
  });

  test('create & save product successfully', async () => {
    const validProduct = new Product(productData);
    const savedProduct = await validProduct.save();
    // Object Id should be defined when successfully saved to MongoDB.
    // eslint-disable-next-line no-underscore-dangle
    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe(productData.name);
    expect(savedProduct.gender).toBe(productData.gender);
    expect(savedProduct.dob).toBe(productData.dob);
    expect(savedProduct.loginUsing).toBe(productData.loginUsing);
  });

  test('insert product successfully, but the field does not defined in schema should be undefined', async () => {
    const productWithInvalidField = new Product({
      id: 4,
      'product-name': "MEN'S BETTER THAN NAKED&trade; JACKET",
      'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
      color: 'black',
    });
    const savedProductWithInvalidField = await productWithInvalidField.save();
    expect(savedProductWithInvalidField.id).toBeDefined();
    expect(savedProductWithInvalidField.color).toBeUndefined();
  });
});
