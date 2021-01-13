const Barber = require('../../models/barberModel');
const barbersController = require('../barbersController')(Barber);

describe('test barbers controller', () => {
  test('find throws error', () => {
    const res = { send: jest.fn() };

    Barber.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    barbersController.getMethod({ user: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find throws well', () => {
    const res = { json: jest.fn() };

    Barber.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    barbersController.getMethod({ user: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
});
