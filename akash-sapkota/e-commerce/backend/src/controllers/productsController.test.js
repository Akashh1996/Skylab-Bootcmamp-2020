const Product = require('../models/productModel');
const productsController = require('./productsController')(Product)
describe.only('productsController', () => {
  test('should call response send on getMethod and throw error', () => {
    const res = {
      send: jest.fn(),
    };
    Product.find = jest.fn().mockImplementationOnce((query, callback)=>{
      callback(true, {})
    })
     

    productsController.getMethod({product: null}, res);

    expect(res.send).toHaveBeenCalled();
  })
  
    test('should call response send on getMethod and send json', () => {
    const res = {
      json: jest.fn(),
    };
    Product.find = jest.fn().mockImplementationOnce((query, callback)=>{
      callback(false, {})
    })
     

    productsController.getMethod({product: null}, res);

    expect(res.json).toHaveBeenCalled();


  })
})

/*   test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: null };

    productsController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  }); */
