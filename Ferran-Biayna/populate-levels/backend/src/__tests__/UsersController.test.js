const Users = require('../models/usersModel');
const Address = require('../models/addressesModel');
const Country = require('../models/countriesModel');
const usersController = require('../controllers/UsersController')(Users);

jest.mock('../models/usersModel');
jest.mock('../models/addressesModel');
jest.mock('../models/countriesModel');

const req = { body: { _id: 1 } };

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

  test('Post method - Country - should have been called', () => {
    Users.create = jest.fn();
    Address.create = jest.fn();
    Country.create = jest.fn();

    usersController.postMethod(req);

    expect(Country.create).toHaveBeenCalled();
  });

  test('Post method - Address - should have been called', () => {
    Users.create = jest.fn();
    Address.create = jest.fn();
    Country.create = jest.fn().mockImplementationOnce((countryInfo, countryCallback) => {
      countryCallback(null, null);
    });

    usersController.postMethod(req);

    expect(Country.create).toHaveBeenCalled();
  });

  test('Users method - Users - should have been called', () => {
    Users.create = jest.fn();
    Address.create = jest.fn().mockImplementationOnce((addressInfo, addressCallback) => {
      addressCallback(null, {});
      Country.create = jest.fn().mockImplementationOnce((countryInfo, countryCallback) => {
        countryCallback(null, {});
      });

      usersController.postMethod(req);

      expect(Country.create).toHaveBeenCalled();
    });
  });

  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

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

    Users.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorDeleteUser');
    });

    usersController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
