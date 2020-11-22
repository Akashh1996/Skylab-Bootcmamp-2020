const axios = require('axios');
const userSchema = require('../models/userSchema');
const oauthController = require('./oauthController')(userSchema);

jest.mock('../models/userSchema');
jest.mock('axios');

describe('oauthController functions', () => {
  let res;
  let req;
  let fakeUser;
  let fakeError;
  beforeEach(() => {
    req = { query: { code: null } };
    res = { send: jest.fn() };
    fakeUser = { name: 'fakeName' };
    fakeError = 'new error';
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getUser', () => {
    test('should call axios.get', async () => {
      oauthController.getToken = jest.fn().mockReturnValueOnce('abc');
      axios.get = jest.fn();

      await oauthController.getUser(req, res);

      expect(axios.get).toHaveBeenCalled();
    });

    test('should call userSchema.findOneAndUpdate', async () => {
      oauthController.getToken = jest.fn().mockReturnValueOnce('abc');
      axios.get = jest.fn().mockReturnValueOnce({ data: {} });
      userSchema.findOneAndUpdate = jest.fn().mockReturnValueOnce(fakeUser);

      await oauthController.getUser(req, res);

      expect(userSchema.findOneAndUpdate).toHaveBeenCalled();
    });

    test('should call res.send with the user', async () => {
      oauthController.getToken = jest.fn().mockReturnValueOnce('abc');
      axios.get = jest.fn().mockReturnValueOnce({ data: {} });
      userSchema.findOneAndUpdate = jest.fn().mockReturnValueOnce(fakeUser);

      await oauthController.getUser(req, res);

      expect(res.send).toHaveBeenCalledWith(fakeUser);
    });

    test('should call res.send with an error if there is an error', async () => {
      oauthController.getToken = jest.fn().mockReturnValueOnce('abc');
      axios.get = jest.fn().mockReturnValueOnce({ data: {} });
      userSchema.findOneAndUpdate = jest.fn().mockRejectedValueOnce(fakeError);

      await oauthController.getUser(req, res);

      expect(res.send).toHaveBeenCalledWith(fakeError);
    });
  });
});
