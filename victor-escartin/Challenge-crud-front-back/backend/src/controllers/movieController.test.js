const Movie = require('../models/movieModel');
const movieController = require('./movieController')(Movie);

jest.mock('../models/movieModel');

describe('movieController', () => {
  afterEach(() => {
    Movie.mockRestore();
  });

  test('Should call response next on allMiddleware', () => {
    Movie.findOne.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });

    const req = {
      params: {
        movieId: '12',
      },
    };
    const res = {
      send: jest.fn(),
    };
    const next = jest.fn();

    movieController.allMiddleware(req, res, next);

    expect(next.mock.calls.length).toBe(1);
  });

  test('Should call response next on allMiddleware when there is an error', () => {
    Movie.findOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    const req = {
      params: {
        movieId: '12',
      },
    };
    const res = {
      send: jest.fn(),
    };
    const next = jest.fn();

    movieController.allMiddleware(req, res, next);

    expect(res.send.mock.calls.length).toBe(1);
  });

  test('Should call response res.json on getMethod', () => {
    const req = {
      params: {
        movieId: '12',
      },
    };
    const res = {
      json: jest.fn(),
    };

    movieController.getMethod(req, res);

    expect(res.json.mock.calls.length).toBe(1);
  });

  test('Should call response res.json on postMethod', () => {
    const req = {
      params: {
       movieId: '12',
        body: null,
      },
    };
    const res = {
      json: jest.fn(),
    };

    Movie.setMovie = jest.fn();

    Movie.setMovie();

    movieController.postMethod(req, res);

    expect(res.json.mock.calls.length).toBe(1);
  });

  test('Should call response res.json on deleteMethod', () => {
    const req = {
      params: {
        movieId: '12',
      },
    };
    const res = {
      json: jest.fn(),
    };

    Movie.deleteMovie = jest.fn();
    Movie.getMovies= jest.fn()

    movieController.deleteMethod(req, res);

    expect(res.json.mock.calls.length).toBe(1);
  });
});
