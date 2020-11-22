/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const Project = require('../models/projectModel');
const detailController = require('./detailController')(Project);

describe('Get method detail', () => {
  test('findOne throws error', () => {
    const res = { send: jest.fn(), json: jest.fn() };
    const req = {
      params: { projectId: { _id: null } },
    };
    Project.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(true, {});
    });
    detailController.getMethodDetail(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('findOne no throws error', () => {
    const res = { send: jest.fn(), json: jest.fn() };
    const req = {
      params: { projectId: { _id: null } },
    };
    Project.findOne = jest.fn().mockImplementationOnce((req, callback) => {
      callback(false, {});
    });
    detailController.getMethodDetail(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
