import mongoose from 'mongoose';

import { NODE_ENV, DB_URI } from '../config/env.js';

if (!DB_URI) {
  throw new Error(
    'please define the MONGODB_URI environment variable inside .env<development/production>.local'
  );
}

const connectToDb = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`connected to db in ${NODE_ENV} mode`);
  } catch (error) {
    console.error('Error connecting to DB', error);
    process.exit(1);
  }
};

export default connectToDb;
