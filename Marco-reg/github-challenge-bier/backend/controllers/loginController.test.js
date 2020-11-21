const loginController = require('./loginController')();

describe('login getMethod', () => {
  test('should redirect to oauth', () => {
    const res = {
      redirect: jest.fn(),
    };

    loginController.getMethod({}, res);

    expect(res.redirect).toHaveBeenCalled();
  });
});
