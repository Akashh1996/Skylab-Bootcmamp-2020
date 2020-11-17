const Hero = require('../models/heroModel');
const heroController = require('./heroController')(Hero);

jest.mock('../models/heroModel');

describe('heroController', () => {
  afterEach(() => {
    Hero.mockRestore();
  });

  test('should call next on getMethod', () => {
    const req = { params: { heroId: '12' } };
    const res = { send: jest.fn() };
    const next = jest.fn();

    Hero.findOne.mockImplementationOnce((query, callback) => {
      callback(false, null);
    });

    heroController.allMiddleware(req, res, next);

    expect(next.mock.calls.length).toBe(1);
  });

  test('should call res send on middlewate when there is an error', () => {
    const req = { params: { heroId: '12' } };
    const res = { send: jest.fn() };
    const next = jest.fn();

    Hero.findOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    heroController.allMiddleware(req, res, next);

    expect(res.send.mock.calls.length).toBe(1);
  });

  describe('getMethod', () => {
    test('Should call getMethod', () => {
      const req = { hero: {} };
      const res = { json: jest.fn() };

      heroController.getMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('Should call res json on postMethod', () => {
      const req = { hero: {}, body: {} };
      const res = { json: jest.fn() };

      Hero.findOneAndUpdate.mockImplementationOnce(
        (searchQuery, updateQuery, callback) => {
          callback(false, null);
        },
      );

      heroController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should enter in the bad path of getMethod', () => {
      const req = { hero: {}, body: {} };
      const res = { send: jest.fn() };

      Hero.findOneAndUpdate.mockImplementationOnce(
        (searchQuery, updateQuery, callback) => {
          callback(true, null);
        },
      );

      heroController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
