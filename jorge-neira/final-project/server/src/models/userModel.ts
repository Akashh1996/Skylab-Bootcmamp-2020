import { Schema, model } from 'mongoose';
import IUser from '../../types/models/userModelType';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  shoppingCart: {
    type: Schema.Types.ObjectId,
    ref: 'shoppingcarts',
  },
});

export default model<IUser>('User', userSchema, 'users', true);
