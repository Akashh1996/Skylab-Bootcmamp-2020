const axios = require('axios');
const { getToken } = require('./utils');

jest.mock('../models/userSchema');
jest.mock('axios');

describe('utils functions', () => {
  let fakeError;
  let fakeToken;
  beforeEach(() => {
    fakeError = 'new error';
    fakeToken = '12345';
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getToken', () => {
    test('should call axios.post', () => {
      axios.post = jest.fn();

      getToken(null);

      expect(axios.post).toHaveBeenCalled();
    });

    test('should return the token if there is no error', async () => {
      axios.post = jest.fn().mockResolvedValue({ data: { access_token: fakeToken } });

      const token = await getToken(null);

      expect(token).toBe(fakeToken);
    });

    test('should return the error if there is an error', async () => {
      axios.post = jest.fn().mockRejectedValue(fakeError);

      const token = await getToken(null);

      expect(token).toBe(fakeError);
    });
  });
});
