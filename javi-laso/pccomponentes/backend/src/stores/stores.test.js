const ShoppingCartStore = require('./shoppingCartStore');

describe('ShoppingCartStore', () => {
  let fakeItem;
  beforeEach(() => {
    fakeItem = { id: 1 };
  });

  afterEach(() => {
    ShoppingCartStore.resetCart();
  });

  describe('getItems', () => {
    test('should return cart', () => {
      expect(ShoppingCartStore.getItems()).toEqual({});
    });
  });

  describe('addItem', () => {
    test('should add an item', () => {
      ShoppingCartStore.addItem(fakeItem);

      expect(ShoppingCartStore.getItems()['1'].length).toBe(1);
    });
  });

  describe('deleteItem', () => {
    test('should delete an item', () => {
      ShoppingCartStore.addItem(fakeItem);
      ShoppingCartStore.deleteItem(fakeItem);

      expect(ShoppingCartStore.getItems()['1'].length).toBe(0);
    });

    test('should not throw an error if trying to delete when there are no items', () => {
      ShoppingCartStore.addItem(fakeItem);
      ShoppingCartStore.deleteItem(fakeItem);
      ShoppingCartStore.deleteItem(fakeItem);

      expect(ShoppingCartStore.getItems()['1'].length).toBe(0);
    });
  });
});
