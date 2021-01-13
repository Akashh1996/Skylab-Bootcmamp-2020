const Barber = require('../../models/barberModel');
const reservationByUserIdController = require('../reservationByUserIdController')(Barber);

describe('test reservation by user controller', () => {
  test('find throws error', () => {
    const res = { send: jest.fn() };
    const req = { query: '' };
    Barber.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    reservationByUserIdController.getMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find throws well', () => {
    const res = { json: jest.fn() };
    const req = { query: '' };

    Barber.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    reservationByUserIdController.getMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('delete throws error', () => {
    const res = { send: jest.fn() };
    const req = { query: '' };
    Barber.findOneAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    reservationByUserIdController.deleteMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('delete throws well', () => {
    const res = { json: jest.fn() };
    const req = { query: '' };

    Barber.findOneAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    reservationByUserIdController.deleteMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
