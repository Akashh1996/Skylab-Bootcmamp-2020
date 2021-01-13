const User = require('../../models/userModel');
const readArticlesController = require('./readArticlesController')(User);
const { getfavArticles } = require('./helpers/helperFn');

jest.mock('axios');
jest.mock('./helpers/helperFn');

describe('readArticlesController', () => {
  test('should call res.json on getMethod if found user', async () => {
    const res = {
      json: jest.fn(),
    };
    const user = { readArticles: ['Hola'] };

    User.findOne = jest.fn().mockImplementationOnce(async (req, callback) => {
      callback(false, user);
    });

    getfavArticles.mockReturnValue(Promise.resolve('articlesFromMock'));

    await readArticlesController.getMethod({ params: { userId: '2' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.send on getMethod if not found user', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = {};

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    readArticlesController.getMethod({ params: { userId: '2' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call res.send on putMethod', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { readArticles: ['1234'], save: jest.fn() };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    readArticlesController.putMethod({ body: { uid: '2', articleId: '1234' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call res.json on putMethod', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { readArticles: ['1234'], save: jest.fn() };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    readArticlesController.putMethod({ body: { uid: '2', articleId: '12345' } }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send on putMethod if not found user', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = null;

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    readArticlesController.putMethod({ body: { uid: '2', articleId: '12345' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call res.send on askSaveArticleMethod if not found author', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { readArticles: [] };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    readArticlesController.askSaveArticleMethod({ body: { uid: '2', articleId: 'ferran' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.send on askSaveArticleMethod if not found user', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = null;

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    readArticlesController.askSaveArticleMethod({ body: { uid: '2', articleId: 'ferran' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call res.send on askSaveArticleMethod if found user and articles', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const user = { readArticles: ['ferran'], save: jest.fn() };

    User.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, user);
    });

    readArticlesController.askSaveArticleMethod({ body: { uid: '2', articleId: 'ferran' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
