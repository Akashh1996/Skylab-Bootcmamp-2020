/* eslint-disable node/no-callback-literal */
const workoutController = require('./workoutController');

describe('workoutController', () => {
  describe('GetMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn()
      };

      const req = {
        params: { workoutId: '1' }
      };

      const workout = {
        findOne: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => callback())
          })
        })
      };

      workoutController(workout).getWorkoutMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call json with an error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };

      const req = {
        params: { workoutId: '1' }
      };

      const workout = {
        findOne: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => callback(true))
          })
        })
      };

      workoutController(workout).getWorkoutMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
