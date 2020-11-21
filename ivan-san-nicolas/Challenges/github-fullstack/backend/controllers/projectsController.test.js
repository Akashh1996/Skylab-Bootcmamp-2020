const Projects = require('../models/projectModel');
const projectsController = require('./projectsController')(Projects);

describe('projectsController getMethod', () => {
  test('should call res.json without error in getMethod', () => {
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

    projectsController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when tere is an error in getMethod', () => {
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

    projectsController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });
});
