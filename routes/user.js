import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
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
