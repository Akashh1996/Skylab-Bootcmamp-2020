const cloudinary = require('cloudinary').v2;
const pets = require('../models/petModel');
const petsController = require('./petsController')(pets);

describe('getMethod', () => {
  test('Should getMethod return error', () => {
    const res = {
      send: jest.fn(),
    };

    pets.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    petsController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('Should getMethod return res.json', () => {
    const res = {
      json: jest.fn(),
    };

    pets.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    petsController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('Should putMethod return error', () => {
    const res = {
      send: jest.fn(),
    };

    pets.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    petsController.putMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('Should putMethod send a create document message', async () => {
    const res = {
      send: jest.fn(),
    };

    pets.create = await jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    cloudinary.uploader.upload = await jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    pets.findByIdAndUpdate = await jest.fn()
      .mockImplementationOnce((query, body, upsert, callback) => {
        callback(true, {});
      });

    petsController.putMethod({ body: { photo: 'asd' } }, res);

    expect(res.send).toHaveBeenCalledTimes(0);
  });

  test('Should putMethod send a create document message', async () => {
    const res = {
      json: jest.fn(),
    };

    pets.create = await jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    cloudinary.uploader.upload = await jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    pets.findByIdAndUpdate = await jest.fn()
      .mockImplementationOnce((query, body, upsert, callback) => {
        callback(false, {});
      });

    petsController.putMethod({ body: { photo: 'asd' } }, res);

    expect(res.json).toHaveBeenCalledTimes(0);
  });
});
