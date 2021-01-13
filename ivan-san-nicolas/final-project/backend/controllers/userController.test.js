const User = require('../models/userModel');
const userController = require('./userController')(User);

describe('userController getMethod', () => {
  const req = {
    query: {
      userId: 'string',
    },
  };
  const res = {
    send: jest.fn(),
    json: jest.fn(),
  };
  test('should call res.json without error in getMethod', () => {
    User.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {});
        }),
      }),
    });

    userController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    User.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {});
        }),
      }),
    });

    userController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('userController patchMethod', () => {
  const req = {
    body: {
      userId: 'string',
      updatedUser: {},
    },
  };
  const res = {
    send: jest.fn(),
    json: jest.fn(),
  };
  test('should call res.json without error in patchMethod', () => {
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (query, updatedUser, newOption, callback) => {
        callback(false, {});
      },
    );

    userController.patchMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in patchMethod', () => {
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (query, updatedUser, newOption, callback) => {
        callback(true, {});
      },
    );

    userController.patchMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('userController deleteMethod', () => {
  const req = {
    query: ['string'],
  };
  const res = {
    send: jest.fn(),
    json: jest.fn(),
  };
  test('should call res.json without error in deleteMethod', () => {
    User.findOneAndDelete = jest.fn().mockImplementationOnce(
      (query, callback) => {
        callback(false, {});
      },
    );

    userController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in deleteMethod', () => {
    User.findOneAndDelete = jest.fn().mockImplementationOnce(
      (query, callback) => {
        callback(true, {});
      },
    );

    userController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('userController postMethod', () => {
  const req = {
    body: { email: 'string' },
  };
  const res = {
    send: jest.fn(),
    json: jest.fn(),
  };
  test('should call res.send without error  when the user exists in postMethod', async () => {
    User.findOne = jest.fn().mockReturnValueOnce(true);

    await userController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call res.send without error  when the user dont exist in postMethod', async () => {
    User.findOne = jest.fn().mockReturnValueOnce(false);
    User.create = jest.fn().mockReturnValueOnce({});

    await userController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call res.send without error  when the user dont exist in postMethod', async () => {
    User.findOne = jest.fn().mockRejectedValueOnce(true);

    await userController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
