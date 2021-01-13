import {
  Request, Response, NextFunction,
} from 'express';
import { check, validationResult } from 'express-validator';

const shoppingCartValidator = [
  check('_id')
    .isMongoId()
    .withMessage('Debe iniciar sesión para añadir articulos al carrito'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    return next();
  },
];

export default shoppingCartValidator;
