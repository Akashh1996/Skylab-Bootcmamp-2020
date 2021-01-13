const Character = require('../models/characterModel');
const charactersController = require('./charactersController')(Character);

describe('charactersController getMethod', () => {
  const req = {
    query: {
      ownerId: 'string',
    },
  };
  const res = {
    send: jest.fn(),
    json: jest.fn(),
  };

  test('should call res.json without error in getMethod', () => {
    Character.find = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {});
        }),
      }),
    });

    charactersController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    Character.find = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {});
        }),
      }),
    });

    charactersController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
