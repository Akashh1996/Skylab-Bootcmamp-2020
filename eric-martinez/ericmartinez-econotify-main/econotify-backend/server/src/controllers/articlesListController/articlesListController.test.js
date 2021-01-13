const axios = require('axios');
const articleListController = require('./articlesListController')();

jest.mock('axios');

describe('articleController', () => {
  test('should call response json on getMethod', async () => {
    const req = { params: { articleId: '2' } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    axios.get = jest.fn().mockResolvedValueOnce({});

    await articleListController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call response send error on getMethod', async () => {
    const req = { params: { articleId: '2' } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    axios.get = jest.fn().mockRejectedValueOnce({});

    await articleListController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
