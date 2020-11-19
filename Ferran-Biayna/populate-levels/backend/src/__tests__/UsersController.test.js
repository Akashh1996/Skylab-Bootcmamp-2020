const Users = require('../models/usersModel');
const usersController = require('../controllers/UsersController')(Users);

describe('UsersController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };
    Users.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(false, 'UsersList'); }),
      }),
    });

    usersController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    Users.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true, 'errorFindUsers'); }),
      }),
    });

    usersController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const req = {
      body: { name: 'Skylab mola!' },
    };
    const res = {
      json: jest.fn(),
    };

    Users.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'newUser');
    });

    usersController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on postMethod', () => {
    const req = {
      body: { name: 'Skylab mola!' },
    };
    const res = {
      send: jest.fn(),
    };

    Users.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorAddUser');
    });

    usersController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Users.findByIdAndUpdate = jest.fn().mockImplementationOnce((body, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    usersController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on putMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Users.findByIdAndUpdate = jest.fn().mockImplementationOnce((body, callback) => {
      callback(true, 'errorDeleteUser');
    });

    usersController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Users.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    usersController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Users.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorDeleteUser');
    });

    usersController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
