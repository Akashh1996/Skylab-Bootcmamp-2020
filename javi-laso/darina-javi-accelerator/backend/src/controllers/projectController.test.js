const projectSchema = require('../models/projectSchema');
const projectController = require('./projectController')(projectSchema);

jest.mock('../models/projectSchema');

describe('projectController', () => {
  let res;
  beforeEach(() => {
    res = { send: jest.fn() };
  });

  describe('getMethod', () => {
    test('shoould call send', () => {
      projectSchema.find = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback()),
        }),
      });
      projectController.getProjectsMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('shoould call res.send with error', () => {
      projectSchema.find = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true)),
        }),
      });

      projectController.getProjectsMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    let req;
    beforeEach(() => {
      req = { body: { categories: 'a,b,c' } };
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('shoould call send', () => {
      projectSchema.create = jest.fn().mockImplementationOnce((query, callback) => (
        callback()
      ));

      projectController.postProjectMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('shoould call send with error', () => {
      projectSchema.create = jest.fn().mockImplementationOnce((query, callback) => (
        callback(true)
      ));

      projectController.postProjectMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
