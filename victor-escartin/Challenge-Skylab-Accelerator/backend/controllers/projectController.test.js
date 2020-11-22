const Project = require('../models/projectModel');
const projectController = require('./projectController')(Project);

jest.mock('../models/projectModel');

describe('projectController', () => {
  afterEach(() => {
    Project.mockRestore();
  });
  describe('getMethod', () => {
    test('should throw error in getMethod', () => {
      const res = {
        send: jest.fn(),
      };
      Project.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      projectController.getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
      };
      Project.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      projectController.getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('putMethod', () => {
    test('should call response json on putMethod', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {},
      };
      Project.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      projectController.putMethod(req, res);
      expect(res.send.mock.calls.length).toBe(1);
    });
    test('should call response send on putMethod', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        body: {},
      };
      Project.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      projectController.putMethod(req, res);
      expect(res.send.mock.calls.length).toBe(1);
    });
  });
  describe('PostMethod', () => {
    test('should throw error while calling post method', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };
      Project.findByIdAndUpdate.mockImplementationOnce((query, query1, callback) => {
        callback(true, null);
      });
      projectController.postMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should send updated todo on calling', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };
      Project.findByIdAndUpdate.mockImplementationOnce((query, query1, callback) => {
        callback(false, {});
      });
      projectController.postMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('deleteMethod', () => {
    test('should throw error on res.send', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };
      Project.findByIdAndRemove.mockImplementationOnce((query, query1, callback) => {
        callback(true, null);
      });
      projectController.deleteMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should throw error on res.send', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };
      Project.findByIdAndRemove.mockImplementationOnce((query, query1, callback) => {
        callback(false, {});
      });
      projectController.deleteMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('getOneMethod', () => {
    test('should throw error in getMethod', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {},
      };
      Project.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      projectController.getOneMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
      };
      const req = {
        body: {},
      };
      Project.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      projectController.getOneMethod(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
