const nodemailer = require('nodemailer');
const contact = require('../models/contactModel');
const contactController = require('./contactController')(contact);

jest.mock('nodemailer');

describe('getMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    contact.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    contactController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res json when there is not an error', () => {
    const res = {
      json: jest.fn(),
    };
    contact.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });
    contactController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };

    contact.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    contactController.putMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res json when there is not an error', () => {
    const res = {
      json: jest.fn(),
    };
    contact.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });
    contactController.putMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });
});

xdescribe('postMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };

    const req = {
      body: {
        email: 'a',
        name: 's',
        subject: 'as',
        message: 'asd',
      },
    };

    nodemailer.createTransport = jest.fn().mockImplementationOnce(() => ({
      sendMail: jest.fn().mockImplementationOnce(null, (callback) => {
        callback(null, {});
      }),
      close: jest.fn(),
    }));

    contactController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
