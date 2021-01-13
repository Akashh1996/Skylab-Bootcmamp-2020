import {
  Request, Response, NextFunction,
} from 'express';
import { check, validationResult } from 'express-validator';

const userValidator = {
  loginValidation: [
    check('email')
      .isEmail()
      .withMessage('La dirección de correo electronico, no es correcta!'),
    check('password')
      .isLength({
        min: 6,
      })
      .withMessage('La contraseña, no es valida! Minimo 6 caracteres'),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      return next();
    },
  ],
  signupValidation: [
    check('username')
      .not()
      .trim()
      .isEmpty()
      .withMessage('El nombre de usuario no es valido!'),
    check('email')
      .isEmail()
      .withMessage('La dirección de correo electronico, no es correcta!'),
    check('password')
      .isLength({
        min: 6,
      })
      .withMessage('La contraseña, no es valida! Minimo 6 caracteres'),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      return next();
    },
  ],
};

export default userValidator;
