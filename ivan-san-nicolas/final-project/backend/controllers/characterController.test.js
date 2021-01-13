const Character = require('../models/characterModel');
const characterController = require('./characterController')(Character);

describe('characterController getMethod', () => {
  const req = {
    query: {
      characterId: 'string',
    },
  };
  const res = {
    json: jest.fn(),
    send: jest.fn(),
  };
  test('should call res.json without error in getMethod', () => {
    Character.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {});
        }),
      }),
    });

    characterController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    Character.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {});
        }),
      }),
    });

    characterController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('characterController patchMethod', () => {
  const req = {
    body: {
      characterId: 'string',
      updatedCharacter: {},
    },
  };
  const res = {
    json: jest.fn(),
    send: jest.fn(),
  };

  test('should call res.json without error in patchMethod', () => {
    Character.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (query, updatedCharacter, newOption, callback) => {
        callback(false, {});
      },
    );

    characterController.patchMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in patchMethod', () => {
    Character.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (query, updatedCharacter, newOption, callback) => {
        callback(true, {});
      },
    );

    characterController.patchMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('characterController deleteMethod', () => {
  const req = {
    query: {
      0: {
        characterId: 'string',
      },
    },
  };
  const res = {
    json: jest.fn(),
    send: jest.fn(),
  };
  test('should call res.json without error in deleteMethod', () => {
    Character.findOneAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    characterController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in deleteMethod', () => {
    Character.findOneAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    characterController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('characterController postMethod', () => {
  const req = {
    body: {
      newCharacter: {},
    },
  };
  const res = {
    json: jest.fn(),
    send: jest.fn(),
  };
  test('should call res.json without error in postMethod', () => {
    Character.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    characterController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in postMethod', () => {
    Character.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    characterController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
