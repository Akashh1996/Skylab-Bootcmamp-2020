const Users = require('../models/userModel');
const userController = require('./userController')(Users);

describe('userController getMethod', () => {
  test('should call res.json without error in getMethod', () => {
    const req = {
      body: {
        userId: 1,
      },
    };
    const res = {
      json: jest.fn(),
    };
    Users.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    userController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    const req = {
      body: {
        userId: 1,
      },
    };
    const res = {
      send: jest.fn(),
    };

    Users.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    userController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('userController postMethod', () => {
  test('should call res.json without error in postMethod', () => {
    const req = {
      body: {
        name: 'string',
        profilePic: 'string',
        githubUrl: 'string',
      },
    };
    const res = {
      json: jest.fn(),
    };

    Users.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    userController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an erro in postMethod', () => {
    const req = {
      body: {
        name: 'string',
        profilePic: 'string',
        githubUrl: 'string',
      },
    };
    const res = {
      send: jest.fn(),
    };

    Users.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    userController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('userController patchMethod', () => {
  test('should call res.json without error in patchMethod', () => {
    const req = {
      body: {
        userId: 'string',
        updatedUser: {
          name: 'string',
          profilePic: 'string',
          githubUrl: 'string',
        },
      },
    };
    const res = {
      json: jest.fn(),
    };

    Users.findOneAndUpdate = jest.fn()
      .mockImplementationOnce((query, conditionToUpdate, callback) => {
        callback(false, {});
      });

    userController.patchMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an erro in postMethod', () => {
    const req = {
      body: {
        userId: 'string',
        updatedUser: {
          name: 'string',
          profilePic: 'string',
          githubUrl: 'string',
        },
      },
    };
    const res = {
      send: jest.fn(),
    };

    Users.findOneAndUpdate = jest.fn()
      .mockImplementationOnce((query, conditionToUpdate, callback) => {
        callback(true, {});
      });

    userController.patchMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('userController deleteMethod', () => {
  test('should call res.json without error in patchMethod', () => {
    const req = {
      body: {
        userId: 'string',
      },
    };
    const res = {
      json: jest.fn(),
    };

    Users.deleteOne = jest.fn()
      .mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

    userController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an erro in postMethod', () => {
    const req = {
      body: {
        userId: 'string',
      },
    };
    const res = {
      send: jest.fn(),
    };

    Users.deleteOne = jest.fn()
      .mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

    userController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
