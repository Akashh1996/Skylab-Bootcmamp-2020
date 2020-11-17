// const Hero = require('../stores/heroStore');
const heroesController = require('./heroesController')();

describe.skip('heroesController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    heroesController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: null };

    heroesController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
