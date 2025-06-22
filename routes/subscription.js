import { Router } from 'express';
import {authorize} from '../middleware/auth.js'
import {createSubscription, getUserSubscriptions} from '../controllers/subscription.js'

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({ Title: 'GET all susbcriptions' });
});

subscriptionRouter.get('/:id' );

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
  res.send({ Title: 'update susbcription' });
});

subscriptionRouter.delete('/', (req, res) => {
  res.send({ Title: 'delete susbcriptions' });
});

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({ Title: 'cancel susbcription' });
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({ Title: 'get upcoming renewals' });
});

export default subscriptionRouter;
