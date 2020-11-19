const Country = require('../models/countriesModel');
const countriesController = require('./countriesController')(Country);

jest.mock('./../models/countriesModel.js');

describe('countriesController', () => {
  afterEach(() => {
   Country.mockRestore();
  });

  test('should call res.json on getMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const errorOnFind = false;
    const successOnFind = true;

    Country.find=jest.fn().mockImplementationOnce((query, callback)=>(callback(errorOnFind, successOnFind)));


    countriesController.getMethod(null, res);

    expect(res.json.mock.calls.length).toBe(1);
  });

  test('should call res.send on getMethod error', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const errorOnFind = true;
    const successOnFind = null;

    Country.find=jest.fn().mockImplementationOnce((query, callback)=>(callback(errorOnFind, successOnFind)));


    countriesController.getMethod(null, res);

    expect(res.send.mock.calls.length).toBe(1);
  });

  test('should call res.json on putMethod', () => {
    const req={};
    
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const errorOnFind = false;
    const successOnFind = true;

    Country.create=jest.fn().mockImplementationOnce((query, callback)=>(callback(errorOnFind, successOnFind)));


    countriesController.putMethod(req, res);

    expect(res.json.mock.calls.length).toBe(1);
  });

  test('should call res.send on putMethod error', () => {
    const req={};
    
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const errorOnFind = true;
    const successOnFind = null;

    Country.create=jest.fn().mockImplementationOnce((query, callback)=>(callback(errorOnFind, successOnFind)));


    countriesController.putMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });

});