const ListProduct = require('../models/toDoListModel');
const toDoListController = require('./toDoListController')(ListProduct);

jest.mock('../models/toDoListModel');
describe('toDoListController', () => {
  test('should call response json on getMethod', () => {
      const res = {
          send: jest.fn(),
          json: jest.fn()
      };

      ListProduct.find.mockImplementationOnce((query, callback) => {
          callback(null, true)
      });

      toDoListController.getMethod(null, res);

      expect(res.json.mock.calls.length).toBe(1)
    })

    test('should call response error on getMethod', () => {
        const res = {
            send: jest.fn(),
            json: jest.fn()
        };

        ListProduct.find.mockImplementationOnce((query, callback) => {
            callback(true, null)
        });

        toDoListController.getMethod(null, res);

        expect(res.send.mock.calls.length).toBe(1)
    })

    test('should call response json on putMethod', () => {
        const res = {
            send: jest.fn(),
            json: jest.fn()
        }
        const req = {
            body: {}
        }
  
        ListProduct.create.mockImplementationOnce((query, callback) => {
            callback(null, true)
        });
  
        toDoListController.putMethod(req, res);
  
        expect(res.json.mock.calls.length).toBe(1)
    })

    test('should call response error on putMethod', () => {
        const res = {
            send: jest.fn(),
            json: jest.fn()
        }
        const req = {
            body: {}
        }

        ListProduct.create.mockImplementationOnce((query, callback) => {
            callback(true, null)
        });

        toDoListController.putMethod(req, res);

        expect(res.send.mock.calls.length).toBe(1)
    })
});

    

