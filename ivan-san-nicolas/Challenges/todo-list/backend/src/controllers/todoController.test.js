const Todo = require('../models/todoModel');
const todoController = require('./todoController')(Todo);

describe('todoController', () => {
    test('should call res.send without error', () => {
        const req = null;
        const res = {
            send: jest.fn(),
        };
        Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
            callback(false, {});
        });
        todoController.getMethod(req, res);
        expect(res.send).toHaveBeenCalled();
    });
    test('should call res.send when there is an error', ()=> {
        const req = null;
        const res = {
            send: jest.fn(),
        };
        Todo.find = jest.fn().mockImplementationOnce((query, callback) => {
            callback(true, {});
        });
        todoController.getMethod(req, res);
        expect(res.send).toHaveBeenCalled();
    })
});