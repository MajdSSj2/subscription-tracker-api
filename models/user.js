import mongoose from 'mongoose';

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'user name is required'],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'user name is required'],
      trim: true,
      minLength: 2,
      maxLength: 255,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'please add a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userschema);

export default User;
