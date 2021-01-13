const Character = require('../models/characterModel');
const characterByKeyController = require('./characterByKeyController')(Character);

describe('characterByKeyController', () => {
  const req = {
    query: {
      characterUniqueKey: 'string',
      userId: 'string',
    },
  };
  const res = {
    send: jest.fn(),
    json: jest.fn(),
  };

  test('should call res.json without error in getMethod', () => {
    Character.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {});
        }),
      }),
    });

    characterByKeyController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    Character.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {});
        }),
      }),
    });

    characterByKeyController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
