import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const token: any = req.header('token');
  if (!token) return res.status(401).json({ errors: [{ msg: 'AUTH_ERROR' }] });
  try {
    const decoded:any = jwt.verify(token, 'secret');
    req.body.user = decoded.id;
    next();
  } catch (error) {
    res.status(500).json({ errors: [{ msg: 'INVALID_TOKEN' }] });
  }
  return true;
}
