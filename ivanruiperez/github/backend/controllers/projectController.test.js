const Project = require('../models/projectModel');
const projectController = require('./projectController')(Project);

describe('ProjectController', () => {
  describe('GetMethod', () => {
    test('find throws error', () => {
      const res = { send: jest.fn() };

      Project.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });
      projectController.getMethod({ project: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('find no throw error', () => {
      const res = { json: jest.fn() };
      Project.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      projectController.getMethod({ project: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
