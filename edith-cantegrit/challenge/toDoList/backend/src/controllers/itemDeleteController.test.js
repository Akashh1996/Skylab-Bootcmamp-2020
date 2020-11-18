const ListItem = require('../models/toDoListModel');
const itemDeleteController = require('./itemDeleteController')(ListItem);

jest.mock('../models/toDoListModel');
describe('itemDeleteController', () => {
    test('should call response send on deleteMethod', () => {
        const req = {
            params : {
                id: '12'
            }
        }
        const res = {
            send: jest.fn(),
        }

        ListItem.findByIdAndRemove.mockImplementationOnce((query, callback) =>{
            callback(null)
        })

        itemDeleteController.deleteMethod(req, res)

        expect(res.send.mock.calls.length).toBe(1)

    })

    test('should call response send error on deleteMethod', () => {
        const req = {
            params : {
                id: '12'
            }
        }
        const res = {
            send: jest.fn(),
        }

        ListItem.findByIdAndRemove.mockImplementationOnce((query, callback) =>{
            callback(true)
        })

        itemDeleteController.deleteMethod(req, res)

        expect(res.send.mock.calls.length).toBe(1)

    })
})