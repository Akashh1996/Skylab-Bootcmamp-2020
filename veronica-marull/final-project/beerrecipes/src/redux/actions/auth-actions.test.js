import signinWithGoogle from '../../firebase/firebaseMethods';
import { loginUserWithGoogle, logoutGoogleSuccess } from './auth-actions';

jest.mock('../../firebase/firebaseMethods');

describe('auth-actions', () => {
  let loginFn;
  let dispatch;
  let logoutFn;
  describe('loginUserWithGoogle', () => {
    beforeEach(() => {
      loginFn = loginUserWithGoogle();
      dispatch = jest.fn();
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('have been called dispatch', async () => {
      await loginFn(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('....errorRejected', async () => {
      signinWithGoogle.mockRejectedValueOnce('ErrorRejected');
      try {
        await loginFn(dispatch);
      } catch (error) {
        expect(error).toBe('ErrorRejected');
      }
    });
  });
  describe('logoutGoogleSuccess', () => {
    beforeEach(() => {
      logoutFn = logoutGoogleSuccess();
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should return LOGOUT_USER_GOOGLE', () => {
      logoutFn();
      expect(logoutFn()).toBeCalled();
    });
  });
});
