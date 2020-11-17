const Hero = require('../models/heroModel');
const heroController = require('./heroController')(Hero);

jest.mock('../models/heroModel');

describe('heroController', () => {
  afterEach(() => {
    Hero.mockRestore();
  });
});

describe('allMiddleware', () => {
  test('calling next', () => {
    Hero.findOne.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    const res = { send: jest.fn() };
    const req = { params: { heroId: '12' } };
    const next = jest.fn();

    heroController.allMiddleware(req, res, next);
    expect(next.mock.calls.length).toBe(1);
  });
  test('calling send', () => {
    Hero.findOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    const res = { send: jest.fn() };
    const req = { params: { heroId: '12' } };
    const next = jest.fn();

    heroController.allMiddleware(req, res, next);
    expect(res.send).toHaveBeenCalled();
  });
});
describe('getMethod', () => {
  test('should call res.json', () => {
    const req = { hero: {} };
    const res = { json: jest.fn() };

    heroController.getMethod(req, res);
    expect(res.json.mock.calls.length).toBe(1);
  });
});
describe('postMethod', () => {
  test('calling res.send error', () => {
    Hero.findOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    const req = { hero: {} };
    const res = { send: jest.fn() };

    heroController.postMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('calling res.send', () => {
    Hero.findOne.mockImplementationOnce((query, callback) => {
      callback(false, { save: jest.fn() });
    });
    const req = {
      hero: {},
      modify: { name: '', id: '' },
    };
    const res = { send: jest.fn() };

    heroController.postMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
});
describe('deleteMethod', () => {
  test('calling res.send error', () => {
    Hero.findOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    const req = {};
    const res = { send: jest.fn() };

    heroController.deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('callind res.send', () => {
    Hero.findOne.mockImplementationOnce((query, callback) => {
      callback(false, { delete: jest.fn() });
    });
    const req = {
      hero: {},
      delete: {},
    };
    const res = { send: jest.fn() };

    heroController.deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
});
