const Product = require('../models/productModel');
const productController = require('./productController')(Product);

describe('productController', () => {
  describe('allMiddleWare', () => {
    test('should call next on allMiddleware', () => {
      const req = {
        hero: null,
        params: {
          heroId: null,
        },
      };
      const next = jest.fn();
      productController.allMiddleware(req, null, next);
      expect(next).toHaveBeenCalled();
    });
  });
  
/*   describe('getMethod', () => {
    test('should call response json on getMethod', () => {
      const res = {
        json: jest.fn(),
      };
    
  
      productController.getMethod({ product: null }, res);
  
      expect(res.json).toHaveBeenCalled();
    });
  
  }); */
  
 

  describe('postMethod', () => {
    test('should call response json on postMethod', () => {
      const res = {
        json: jest.fn(),
      };
  
      const req = {
        product: {
          id: 12,
        },
        body: {},
      };

      Product.setProduct=jest.fn()
  
      productController.postMethod(req, res);
  
      expect(res.json).toHaveBeenCalled();
    });
  
  });
  
 
 /*  describe('delete method', () => {
    test('should call response json on deleteMethod', () => {
      const res = {
        json: jest.fn(),
      };
  
      const req = {
        params: {
          productId: 12,
        },
      };
  
      productController.deleteMethod(req, res);
  
      expect(res.json).toHaveBeenCalled();
    });
  
    test('should call response json on deleteMethod with null id', () => {
      const res = {
        json: jest.fn(),
      };
  
      const req = {
        params: {
          productId: null,
        },
      };
  
      productController.deleteMethod(req, res);
  
      expect(res.json).toHaveBeenCalled();
    });
  
    test('should call response json on deleteMethod with string id', () => {
      const res = {
        json: jest.fn(),
      };
  
      const req = {
        params: {
          productId: 'asd',
        },
      };
  
      productController.deleteMethod(req, res);
  
      expect(res.json).toHaveBeenCalled();
    });
  
  });
   */
  describe  ('getMethod', () => {
    test('should call  getMethod and throw an error', () => {
      const res = {
        send : jest.fn()
      };
      const req = {
        id: "11"
      }
      Product.findOne = jest.fn().mockImplementationOnce((query, callback)=>{
        callback(true, null)
      })
      productController.getMethod(req, res)

      expect(res.send).toHaveBeenCalled()
    });
    test('should call  one method and throw send json', () => {
      const res = {
        json : jest.fn()
      }
      const req = {
        id: "11"
      }
      Product.findOne = jest.fn().mockImplementationOnce((query, callback)=>{
        callback(false, {})
      })
      productController.getMethod(req, res)

      expect(res.json).toHaveBeenCalled()
    });
    
  });
  describe('deleteMethod', () => {
    test('should call deleteOne method and throw error', () => {
      const res = {
        send : jest.fn()
      }
      const req = {
        id : 21
      }
      Product.deleteOne = jest.fn().mockImplementationOnce((query, callback)=>{
        callback(true, {})
      })

      productController.deleteMethod(req,res)

      expect(res.send).toHaveBeenCalled()
    });
    test('should call deleteOne method and send message deleted', () => {
      const res = {
        send : jest.fn()
      }
      const req = {
        id : 21
      }
      Product.deleteOne = jest.fn().mockImplementationOnce((query, callback)=>{
        callback(null, {})
      })

      productController.deleteMethod(req,res)

      expect(res.send).toHaveBeenCalled()
    });
    
  });
  
  
 

  
});
