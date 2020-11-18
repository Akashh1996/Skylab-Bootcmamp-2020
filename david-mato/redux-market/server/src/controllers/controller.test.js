const Product = require('../models/productModel');
const controller = require('./controller')(Product);

jest.mock('../models/productModel');

describe('productsController', () => {
  afterEach(() => {
    Product.mockRestore();
  });

  describe('getMethod', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
        setHeader: jest.fn(),
      };

      Product.find.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      controller.getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
        setHeader: jest.fn(),
      };

      Product.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      controller.getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('should call res.send when there is an error', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };

      Product.create.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      controller.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const req = {
        body: {},
      };
      const res = {
        json: jest.fn(),
      };

      Product.create.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      controller.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('should call res.send when there is an error', () => {
      const req = {
        body: { id: null },
      };
      const res = {
        send: jest.fn(),
      };

      Product.findByIdAndUpdate = jest.fn()
        .mockImplementationOnce((query1, query2, query3, callback) => {
          callback(false, {});
        });

      controller.putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send', () => {
      const req = {
        body: { id: null },
      };
      const res = {
        send: jest.fn(),
      };

      Product.findByIdAndUpdate = jest.fn()
        .mockImplementationOnce((query1, query2, query3, callback) => {
          callback(true, {});
        });

      controller.putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('deleteMethod', () => {
    test('should call res.send when there is an error', () => {
      const req = {
        body: { id: null },
      };
      const res = {
        send: jest.fn(),
      };

      Product.findByIdAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      controller.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send3', () => {
      const req = {
        body: { id: null },
      };
      const res = {
        send: jest.fn(),
      };

      Product.findByIdAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      controller.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  //   test('should call response json on postMethod', () => {
  //     const res = {
  //       json: jest.fn(),
  //     };

  //     const req = {
  //       hero: {
  //         id: 12,
  //       },
  //       body: {},
  //     };

  //     controller.postMethod(req, res);

  //     expect(res.json).toHaveBeenCalled();
  //   });

  //   test('should call response json on deleteMethod', () => {
  //     const res = {
  //       json: jest.fn(),
  //     };

  //     const req = {
  //       params: {
  //         heroId: 12,
  //       },
  //     };

  //     controller.deleteMethod(req, res);

  //     expect(res.json).toHaveBeenCalled();
  //   });

  //   test('should call response json on deleteMethod with null id', () => {
  //     const res = {
  //       json: jest.fn(),
  //     };

  //     const req = {
  //       params: {
  //         heroId: null,
  //       },
  //     };

  //     controller.deleteMethod(req, res);

  //     expect(res.json).toHaveBeenCalled();
  //   });

  //   test('should call response json on deleteMethod with string id', () => {
  //     const res = {
  //       json: jest.fn(),
  //     };

  //     const req = {
  //       params: {
  //         heroId: 'asd',
  //       },
  //     };

  //     controller.deleteMethod(req, res);

//     expect(res.json).toHaveBeenCalled();
//   });
});
