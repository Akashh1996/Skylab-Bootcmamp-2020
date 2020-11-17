const Sabers = require('../models/saberModel');
const sabersController = require('../controllers/sabersController')(Sabers);

describe('sabersController', () => {
    test('should call res.status in getMethod', () => {
        const res = {
            send: jest.fn(),
            status: jest.fn(),
        };
        Sabers.find = jest.fn().mockImplementationOnce((query, callback)=>{
            callback(false, {});
        });
        sabersController.getMethod(null, res);
        expect(res.status).toHaveBeenCalled();
    });
    test('should call res.send in error in getMethod', () => {
        const res = {
            send: jest.fn(),
            status: jest.fn(),
        };
        Sabers.find = jest.fn().mockImplementationOnce((query, callback) => {
            callback(true, {});
        });
        sabersController.getMethod(null, res);
        expect(res.send).toHaveBeenCalled();
    })
});