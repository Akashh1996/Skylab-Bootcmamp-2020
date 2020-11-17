const Cart = require('../models/cartModel');
const cartController = require('./cartController')(Cart)
describe.only('cartController', () => {
  describe('postMethod', () => {
    test('should call response send on getMethod and throw error', () => {
        const res = {
          send: jest.fn(),
        };
        Cart.create = jest.fn().mockImplementationOnce((query, callback)=>{
          callback(true, {})
        })
         
    
        cartController.postMethod({product: null}, res);
    
        expect(res.send).toHaveBeenCalled();
      })
      
       test('should call response send on getMethod and send json', () => {
        const res = {
          send: jest.fn(),
        };
        Cart.create = jest.fn().mockImplementationOnce((query, callback)=>{
          callback(false, {})
        })
         
    
        cartController.postMethod({product: null}, res);
    
        expect(res.send).toHaveBeenCalled();
    
    
      }) 
  });
  describe('getMethod', () => {
      test('should call response on getMethod and throw error', () => {
          const res = {
              send : jest.fn()
          }
          Cart.find = jest.fn().mockImplementationOnce((query, callback)=>{
            callback(true, {})
          })

          cartController.getMethod({product: null}, res);
    
          expect(res.send).toHaveBeenCalled();
           

      });
      test('should call response on getMethod and send cart', () => {
          const res = {
              send : jest.fn()
          }
          Cart.find = jest.fn().mockImplementationOnce((query, callback)=>{
            callback(false, {})
          })

          cartController.getMethod({product: null}, res);
    
          expect(res.send).toHaveBeenCalled();
           

      });
      
  });
  
  
  
})