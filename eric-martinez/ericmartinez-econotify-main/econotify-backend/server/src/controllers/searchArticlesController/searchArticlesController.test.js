const axios = require('axios');
const articleListController = require('./searchArticlesController')();

jest.mock('axios');

describe('searchArticlesController', () => {
  test('should call response json on getMethod', async () => {
    const req = { params: { term: 'science' } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    axios.get = jest.fn().mockResolvedValueOnce({});

    await articleListController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call response send error on getMethod', async () => {
    const req = { params: { term: 'science' } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    axios.get = jest.fn().mockRejectedValueOnce({});

    await articleListController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
