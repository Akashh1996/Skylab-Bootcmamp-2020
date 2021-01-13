const axios = require('axios');
const authorController = require('./authorController')();

jest.mock('axios');

describe('authorController', () => {
  test('should call response json on getMethod', async () => {
    const req = { params: { authorId: '12345' } };
    const res = {
      json: jest.fn(),
    };

    axios.get = jest.fn().mockReturnValue({ data: { results: {} } });

    await authorController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response send error on getMethod', async () => {
    const req = { params: { authorId: '2' } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    axios.get = jest.fn().mockRejectedValueOnce({});

    await authorController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
