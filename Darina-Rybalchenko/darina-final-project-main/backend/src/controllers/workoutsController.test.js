const workoutSchema = require('../models/workoutSchema');
const workoutsController = require('./workoutsController')(workoutSchema);

describe('workoutSchema', () => {
  describe('getMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn()
      };
      workoutSchema.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      workoutsController.getWorkoutMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call json with error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };
      workoutSchema.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      workoutsController.getWorkoutMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn()
      };

      const req = {
        body: {}
      };
      workoutSchema.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      workoutsController.postWorkoutMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call json with an error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };

      const req = {
        body: {}
      };
      workoutSchema.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      workoutsController.postWorkoutMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('patchMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn()
      };

      const req = {
        body: { _id: '1' }
      };
      workoutSchema.findByIdAndUpdate = jest.fn().mockImplementationOnce(
        (query, body, callback) => {
          callback(false, {});
        }
      );

      workoutsController.patchWorkoutMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call json with an error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };

      const req = {
        body: { _id: '1' }
      };
      workoutSchema.findByIdAndUpdate = jest.fn().mockImplementationOnce(
        (query, body, callback) => {
          callback(true, {});
        }
      );

      workoutsController.patchWorkoutMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('deleteMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn()
      };

      const req = {
        body: { _id: '1' }
      };
      workoutSchema.findByIdAndRemove = jest.fn().mockImplementationOnce(
        (query, body, callback) => {
          callback(false, {});
        }
      );

      workoutsController.deleteWorkoutMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call json with an error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };

      const req = {
        body: { _id: '1' }
      };
      workoutSchema.findByIdAndRemove = jest.fn().mockImplementationOnce(
        (query, body, callback) => {
          callback(true, {});
        }
      );

      workoutsController.deleteWorkoutMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
