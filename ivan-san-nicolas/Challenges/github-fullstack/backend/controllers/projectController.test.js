const Projects = require('../models/projectModel');
const projectController = require('./projectController')(Projects);

describe('projectController getMethod', () => {
  test('should call res.json without error', () => {
    const req = {
      body: {
        projectId: 1,
      },
    };
    const res = {
      json: jest.fn(),
    };

    Projects.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(false, {});
          }),
        }),
      }),
    });

    projectController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    const req = {
      body: {
        projectId: 1,
      },
    };
    const res = {
      send: jest.fn(),
    };

    Projects.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(true, {});
          }),
        }),
      }),
    });

    projectController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('projectController postMethod', () => {
  test('should call res.json without error in postMethod', () => {
    const req = {
      body: {
        name: 'string',
        description: 'string',
        url: 'string',
        participants: ['string'],
        creator: 'string',
      },
    };
    const res = {
      json: jest.fn(),
    };

    Projects.create = jest.fn().mockImplementationOnce((newProject, callback) => {
      callback(false, {});
    });

    projectController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in postMethod', () => {
    const req = {
      body: {
        name: 'string',
        description: 'string',
        url: 'string',
        participants: ['string'],
        creator: 'string',
      },
    };
    const res = {
      send: jest.fn(),
    };

    Projects.create = jest.fn().mockImplementationOnce((newProject, callback) => {
      callback(true, {});
    });

    projectController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('projectController patchMethod', () => {
  test('should call res.json without error in patchMethod', () => {
    const req = {
      body: {
        projectId: 1,
        updatedProject: {
          name: 'string',
          description: 'string',
          url: 'string',
          participants: ['string'],
          creator: 'string',
        },
      },
    };
    const res = {
      json: jest.fn(),
    };

    Projects.findOneAndUpdate = jest.fn().mockImplementationOnce((
      query, conditionToUpdate, callback,
    ) => {
      callback(false, {});
    });

    projectController.patchMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in patchMethod', () => {
    const req = {
      body: {
        projectId: 1,
        updatedProject: {
          name: 'string',
          description: 'string',
          url: 'string',
          participants: ['string'],
          creator: 'string',
        },
      },
    };
    const res = {
      send: jest.fn(),
    };

    Projects.findOneAndUpdate = jest.fn().mockImplementationOnce((
      query, conditionToUpdate, callback,
    ) => {
      callback(true, {});
    });

    projectController.patchMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('projectController deleteMethod', () => {
  test('should call res.json without error in deleteMethod', () => {
    const req = {
      body: {
        projectId: 1,
      },
    };
    const res = {
      json: jest.fn(),
    };

    Projects.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    projectController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in deleteMethod', () => {
    const req = {
      body: {
        projectId: 1,
      },
    };
    const res = {
      send: jest.fn(),
    };

    Projects.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    projectController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
