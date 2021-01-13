const userSchema = require('../models/userSchema');
const scheduleSchema = require('../models/scheduleSchema');
const userController = require('./userController')(userSchema, scheduleSchema);

describe('userController', () => {
  describe('getUsersMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn()
      };
      userSchema.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      userController.getUsersMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('should call json with error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };
      userSchema.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });
      userController.getUsersMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('getUserMethod', () => {
    test('should call json', () => {
      const req = {
        params: { userId: { _id: '1' } }
      };

      const res = {
        json: jest.fn()
      };
      userSchema.findOne = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback(false))

        })
      });
      userController.getUserMethod(req, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('should call send', () => {
      const req = {
        params: { userId: { _id: '1' } }
      };
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };
      userSchema.findOne = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true))

        })
      });
      userController.getUserMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('patchMethod', () => {
    test('should call json', () => {
      const res = {
        json: jest.fn()
      };
      const req = {
        body: { uid: 'uid' }
      };
      userSchema.findOneAndUpdate = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => callback(false))
        })
      });
      userController.patchUserMethod(req, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('should call json with error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn()
      };
      const req = {
        body: { uid: 'uid' }
      };

      userSchema.findOneAndUpdate = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true))
        })
      });
      userController.patchUserMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('puthMethod', () => {
    test('should call send with error', async () => {
      const res = {
        send: jest.fn()
      };
      const req = {
        body: { user: { _id: '1' } }
      };
      scheduleSchema.findOne = jest.fn().mockImplementationOnce((queryFound, callback) => {
        callback(true, {});
      });
      await userController.putUserMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should call scheduleSchema', async () => {
      const res = {
        send: jest.fn()
      };
      const req = {
        body: { user: { _id: '1' } }
      };
      scheduleSchema.findOne = jest.fn().mockImplementationOnce((queryFound, callback) => {
        callback(false, { participants: [{ body: { user: { _id: '1' } } }], save: jest.fn() });
      });
      await userController.putUserMethod(req, res);
      expect(scheduleSchema.findOne).toHaveBeenCalled();
    });

    test('should call send with error', () => {
      const res = {
        send: jest.fn()
      };
      const req = {
        body: { user: { _id: '1' } }
      };
      userSchema.findOne = jest.fn().mockImplementationOnce((queryFound, callback) => {
        callback(true, {});
      });
      userController.putUserMethod(req, res);
      expect(scheduleSchema.findOne).toHaveBeenCalled();
    });
    test('should call userSchema', async () => {
      const res = {
        send: jest.fn()
      };
      const req = {
        body: { user: { _id: '1' } }
      };
      const days = [{ body: { _id: '1' } }];
      scheduleSchema.findOne = jest.fn().mockImplementationOnce((queryFound, callback) => {
        callback(false, { participants: [{ body: { user: { _id: '1' } } }], save: jest.fn() });
      });
      userSchema.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, { days, save: jest.fn() });
      });

      await userController.putUserMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
