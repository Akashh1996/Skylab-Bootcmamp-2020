const Sabers = require('../models/saberModel');
const saberController = require('../controllers/saberController')(Sabers);


describe('saberController', () => {
    test('should call res.status on getMethod', () => {
        const req = {
            params: {
                saberName: "Archon",
            },
        };
        const res = {
            send: jest.fn(),
            status: jest.fn(),
        }
        Sabers.find = jest.fn().mockImplementation((query, callback) => {
            callback(false, {});
        });
        const getMethod = saberController.getMethod(req, res);
        expect(res.status).toHaveBeenCalled();
    });
    
    test('should call res.send with error on getMethod', () => {
        const req = {
            params: {
                saberName: "Archon",
            },
        };
        const res = {
            send: jest.fn(),
            status: jest.fn(),
        }
        Sabers.find = jest.fn().mockImplementation((query, callback) => {
            callback(true, {});
        });
        const getMethod = saberController.getMethod(req, res);
        expect(res.send).toHaveBeenCalled();
    })
})