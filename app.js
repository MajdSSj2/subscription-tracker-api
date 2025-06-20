import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import subscriptionRouter from './routes/subscription.js';
import connectToDb from './database/mongoDB.js';
import errorMiddleware from './middleware/error.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'api is live',
    status: 'true',
  });
});

app.listen(PORT, async () => {
  console.log(
    `Subscription tracker api is running on http://localhost:${PORT}`
  );
  await connectToDb();
});

export default app;
