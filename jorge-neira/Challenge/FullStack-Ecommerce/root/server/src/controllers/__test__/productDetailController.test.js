const Laptop = require('../../models/laptopModel');
const productDetailController = require('../productDetailController')(Laptop);

describe('Detail Controllers', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    req = {
      params: {
        productName: 'H500GV-HC002R',
      },
    };
  });

  test('GET Methods should return json if no error occurs', () => {
    // arrange
    Laptop.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    // act
    productDetailController.getMethod(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
    expect(res.json.mock.calls.length).toBe(1);
  });

  test('GET Methods should return send if error occurs', () => {
    // arrange
    Laptop.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    // act
    productDetailController.getMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
    expect(res.send.mock.calls.length).toBe(1);
  });
});
