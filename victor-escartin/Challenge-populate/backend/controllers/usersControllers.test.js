const User = require('../models/usersModel');
const usersController = require('./usersControllers')(User);

jest.mock('./../models/usersModel.js');

describe('usersController', () => {
  afterEach(() => {
   User.mockRestore();
  });

  test('should call res.json on getMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const errorOnFind = false;
    const successOnFind = true;

    User.find=jest.fn().mockReturnValue({populate: jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback)=>(callback(errorOnFind, successOnFind)))})});


    usersController.getMethod(null, res);

    expect(res.json.mock.calls.length).toBe(1);
  });

  test('should call res.json on getMethod error', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const errorOnFind = true;
    const successOnFind = null;

    User.find=jest.fn().mockReturnValue({populate: jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback)=>(callback(errorOnFind, successOnFind)))})});


    usersController.getMethod(null, res);

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

    User.create=jest.fn().mockReturnValue({populate: jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback)=>(callback(errorOnFind, successOnFind)))})});
    
      usersController.putMethod(req, res);

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

    User.create=jest.fn().mockReturnValue({populate: jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback)=>(callback(errorOnFind, successOnFind)))})});
    
      usersController.putMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });

});