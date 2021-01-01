const projectIdController = require('./projectIdController');

describe('projectIdController', () => {
  describe('getMethod', () => {
    test('shoould call json', () => {
      const project = {
        findOne: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => callback()),
          }),
        }),
      };

      const req = { params: { projectID: '2' } };

      const res = {

        send: jest.fn(),
      };

      projectIdController(project).getProjectDetailMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('shoould call json with error', () => {
      const project = {
        findOne: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => callback(true)),
          }),
        }),
      };

      const res = {
        send: jest.fn(),
        json: jest.fn(),
      };
      const req = { params: { projectID: '2' } };

      projectIdController(project).getProjectDetailMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
