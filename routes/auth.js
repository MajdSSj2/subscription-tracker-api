import { Router } from 'express';
import { signIn, signUp, signOut } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-up', signOut);

export default authRouter;
