const address = require('../models/addressModel');
const addressRouter = require('./addressRouter')(address);

describe('addressRouter', () => {
  test('should call response send on get if there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const Address = {
      find: jest.fn(): {
          populate: jest.fn()
      }
    };
    addressRouter.get({ hero: null }, res);

    expect(res.json).toHaveBeenCalled();
  });
});
