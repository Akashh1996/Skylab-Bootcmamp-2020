const Product = require('../store/productStore');
const listController = require('./listController')(Product);

describe('listontroller', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    listController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });
});
