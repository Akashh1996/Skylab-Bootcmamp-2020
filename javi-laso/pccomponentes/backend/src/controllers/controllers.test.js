const ItemsStore = require('../stores/itemsStore');
const itemsController = require('./itemsController')(ItemsStore);
const ShoppingCartStore = require('../stores/shoppingCartStore');
const shoppingCarController = require('./shoppingCartController')(ShoppingCartStore);

describe('itemsController', () => {
  describe('getMethod', () => {
    let res;
    beforeEach(() => {
      res = { send: jest.fn(), status: jest.fn() };
    });

    test('should call res.send', () => {
      itemsController.getMethod(null, res);

      expect(res.send).toHaveBeenCalledTimes(1);
    });

    test('should call res.status', () => {
      itemsController.getMethod(null, res);

      expect(res.status).toHaveBeenCalledTimes(1);
    });
  });

  describe('getByIdMethod', () => {
    let res;
    let req;
    beforeEach(() => {
      req = { params: { itemId: null } };
      res = { send: jest.fn(), status: jest.fn() };
    });

    test('should call res.send', () => {
      itemsController.getByIdMethod(req, res);

      expect(res.send).toHaveBeenCalledTimes(1);
    });

    test('should call res.status', () => {
      itemsController.getByIdMethod(req, res);

      expect(res.status).toHaveBeenCalledTimes(1);
    });
  });
});

describe('shoppingCarController', () => {
  describe('getMethod', () => {
    let res;
    beforeEach(() => {
      res = { send: jest.fn(), status: jest.fn() };
    });

    test('should call res.send', () => {
      shoppingCarController.getMethod(null, res);

      expect(res.send).toHaveBeenCalledTimes(1);
    });

    test('should call res.status', () => {
      shoppingCarController.getMethod(null, res);

      expect(res.status).toHaveBeenCalledTimes(1);
    });
  });

  describe('putMethod', () => {
    let res;
    let req;
    beforeEach(() => {
      req = { body: { item: { id: null } } };
      res = { send: jest.fn(), status: jest.fn() };
    });

    test('should call res.send', () => {
      shoppingCarController.putMethod(req, res);

      expect(res.send).toHaveBeenCalledTimes(1);
    });

    test('should call res.status', () => {
      shoppingCarController.putMethod(req, res);

      expect(res.status).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteMethod', () => {
    let res;
    let req;
    beforeEach(() => {
      req = { body: { item: { id: null } } };
      res = { send: jest.fn(), status: jest.fn() };
    });

    test('should call res.send', () => {
      shoppingCarController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledTimes(1);
    });

    test('should call res.status', () => {
      shoppingCarController.deleteMethod(req, res);

      expect(res.status).toHaveBeenCalledTimes(1);
    });
  });
});
