import { Router } from 'express';
import userController from '../controllers/users/userController';
import registeredUserController from '../controllers/users/registeredUserController';
import validator from '../validator/userValidator';
import tokenValidation from '../validator/tokenValidation';

function userRouter(UserModel: any) {
  const router = Router();
  const registeredUser = registeredUserController(UserModel);
  const users = userController(UserModel);

  router.route('/signup')
    .post(validator.signupValidation, users.userSignUp);

  router.route('/login')
    .post(validator.loginValidation, users.userLogIn);

  router.route('/profile')
    .get(tokenValidation, users.tokenValidation);

  router.route('/registered/:id')
    .get(registeredUser.getUserById);

  return router;
}

export default userRouter;
