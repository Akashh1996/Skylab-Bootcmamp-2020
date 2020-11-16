const Hero = require('../stores/productStore');
const heroController = require('./productController')(Hero);

describe('productController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    heroController.getMethod({ hero: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      hero: {
        id: 12,
      },
      body: {},
    };

    heroController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        heroId: 12,
      },
    };

    heroController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod with null id', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        heroId: null,
      },
    };

    heroController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod with string id', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        heroId: 'asd',
      },
    };

    heroController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call next on allMiddleware', () => {
    const req = {
      hero: null,
      params: {
        heroId: null,
      },
    };

    const next = jest.fn();

    heroController.allMiddleware(req, null, next);

    expect(next).toHaveBeenCalled();
  });
});
