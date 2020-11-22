const projectController = require('./projectController');

describe('projectController', () => {
  describe('getMethod', () => {
    test('shoould call send', () => {
      const project = {
        find: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => callback()),
          }),
        }),
      };
      const res = {
        send: jest.fn(),
      };
      projectController(project).getProjectsMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('shoould call res.send with error', () => {
      const project = {
        find: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => callback(true)),
          }),
        }),
      };
      const res = {
        send: jest.fn(),
      };
      projectController(project).getProjectsMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('shoould call send', () => {
      const project = {
        create: jest.fn().mockImplementationOnce((query, callback) => callback()),
      };
      const res = {
        send: jest.fn(),
      };

      const req = {};

      projectController(project).postProjectMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('shoould call send with error', () => {
      const project = {
        create: jest.fn().mockImplementationOnce((query, callback) => callback(true)),
      };
      const res = {
        send: jest.fn(),
      };
      const req = {};
      projectController(project).postProjectMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
