/* eslint-disable linebreak-style */
/* const { test, jest, expect } = require('@jest/globals'); */
const Hero = require('../models/heroModel');
const heroController = require('./heroController')(Hero);

describe('heroController', () => {
  test('should call response send when find throws error', () => {
    const res = {
      send: jest.fn(),
    };

    Hero.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    heroController.getMethod({ id: null, params: { heroId: 1 } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response send when find goes well', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    heroController.getMethod({ id: null, params: { heroId: 1 } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response send when findAndRemove throws error', () => {
    const res = {
      send: jest.fn(),
    };

    Hero.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    heroController.deleteMethod({ id: null, params: { heroId: 1 } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response send when findAndRemove goes well', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    heroController.deleteMethod({ id: null, params: { heroId: 1 } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json when findOne goes well', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    heroController.allMiddleware({ id: null, params: { heroId: 1 } }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json when findOne throws error', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    heroController.allMiddleware({ id: null, params: { heroId: 1 } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json when findOneAndUpdate goes well', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.findOneAndUpdate = jest.fn().mockImplementationOnce((query, option, callback) => {
      callback(false, {});
    });

    heroController.postMethod({ id: null, params: { heroId: 1 } }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json when findOneAndUpdate throws error', () => {
    const res = {
      json: jest.fn(),
    };

    Hero.findOneAndUpdate = jest.fn().mockImplementationOnce((query, option, callback) => {
      callback(true, {});
    });

    heroController.postMethod({ id: null, params: { heroId: 1 } }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
