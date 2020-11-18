const Movie = require('../models/movieModel');
const moviesController = require('./moviesController')(Movie);

jest.mock('../models/movieModel');

describe('moviesController', () => {
  afterEach(() => {
   Movie.mockRestore();
  });

  test('should call res.json on getMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const errorOnFind = false;
    const successOnFind = true;

    Movie.find.mockImplementationOnce((query, callback) => (
      callback(errorOnFind, successOnFind)
    ));

    moviesController.getMethod(null, res);

    expect(res.json.mock.calls.length).toBe(1);
  });

  test('should call res.send on getMethod error', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const errorOnFind = true;
    const successOnFind = null;

    Movie.find.mockImplementationOnce((query, callback) => (
      callback(errorOnFind, successOnFind)
    ));

    moviesController.getMethod(null, res);

    expect(res.send.mock.calls.length).toBe(1);
  });

  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: null,
    };

    Movie.addMovie = jest.fn();
    Movie.getMovies = jest.fn();

    moviesController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
