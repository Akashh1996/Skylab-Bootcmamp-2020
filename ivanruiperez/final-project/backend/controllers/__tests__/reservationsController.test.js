const Reservation = require('../../models/reservation');
const reservationsController = require('../reservationsController')(Reservation);

describe('test reservations controller', () => {
  test('find throws error', () => {
    const res = { send: jest.fn() };

    Reservation.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    reservationsController.getMethod({ reservations: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find throws well', () => {
    const res = { json: jest.fn() };

    Reservation.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    reservationsController.getMethod({ reservations: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('create throws error', () => {
    const res = { send: jest.fn() };

    Reservation.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    reservationsController.postMethod({ reservations: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('create throws well', () => {
    const res = { json: jest.fn() };

    Reservation.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    reservationsController.postMethod({ reservations: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
});
