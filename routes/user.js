import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.js';
import { authorize } from '../middleware/auth.js';
const userRouter = Router();

userRouter.get('/', authorize, getUsers);
userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => {
  res.send({ title: 'create new user' });
});
userRouter.put('/:id', (req, res) => {
  res.send({ title: 'update a specifc user' });
});
userRouter.delete('/:', (req, res) => {
  res.send({ title: 'delete a user' });
});
export default userRouter;
