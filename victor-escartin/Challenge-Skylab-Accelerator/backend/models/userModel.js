import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    bio: { type: String, required: true },
    github_profile: { type: String, required: true },
    photo: { type: String,required: true },
    projects: { type: String,required: true },
    collaboring_in: { type: String,required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;