const ToDo = require('../../models/todoModel');
const ListController = require('./ListController')(ToDo);

describe('ListController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    ToDo.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'toDoList');
    });

    ListController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    ToDo.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindToDo');
    });

    ListController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const req = {
      body: { description: 'Skylab mola!' },
    };
    const res = {
      json: jest.fn(),
    };

    ToDo.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'newProduct');
    });

    ListController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on postMethod', () => {
    const req = {
      body: { description: 'Skylab mola!' },
    };
    const res = {
      send: jest.fn(),
    };

    ToDo.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorAddProduct');
    });

    ListController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1', description: 'Skylab mola molt!' } };

    ToDo.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    ListController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on putMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1', description: 'Skylab mola molt!' } };

    ToDo.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
      callback(true, 'errorDeleteItem');
    });

    ListController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    ToDo.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    ListController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    ToDo.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorDeleteItem');
    });

    ListController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
