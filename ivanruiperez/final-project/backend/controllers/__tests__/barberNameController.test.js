const Barber = require('../../models/barberModel');
const barberNameController = require('../barberNameController')(Barber);

describe('test barbers controller', () => {
  test('find throws error', () => {
    const res = { send: jest.fn() };
    const req = { query: '' };
    Barber.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    barberNameController.getMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find throws well', () => {
    const res = { json: jest.fn() };
    const req = { query: '' };

    Barber.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    barberNameController.getMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
