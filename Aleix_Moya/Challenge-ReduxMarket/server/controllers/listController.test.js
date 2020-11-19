/* eslint-disable no-undef */
const Wargear = require('../stores/myStore');
const listController = require('./listController')(Wargear);

describe('listController', () => {
  test('testear getMethod', () => {
    const res = {
      json: jest.fn(),
    };
    listController.getMethod(null, res);
    expect(res.json()).toHaveBeenCalled();
  });

  test('testear putMethod', () => {
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: null,
    };
    listController.putMethod(req, res);

    expect(res.json()).toHaveBeenCalled();
  });
});
