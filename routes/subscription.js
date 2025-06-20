import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({ Title: 'GET all susbcriptions' });
});

subscriptionRouter.get('/:id', (req, res) => {
  res.send({ Title: 'GET susbcription details' });
});

subscriptionRouter.post('/', (req, res) => {
  res.send({ Title: 'create susbcription' });
});

subscriptionRouter.put('/:id', (req, res) => {
  res.send({ Title: 'update susbcription' });
});

subscriptionRouter.delete('/', (req, res) => {
  res.send({ Title: 'delete susbcriptions' });
});

subscriptionRouter.get('/user/:id', (req, res) => {
  res.send({ Title: 'GET all user susbcriptions' });
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({ Title: 'cancel susbcription' });
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({ Title: 'get upcoming renewals' });
});
export default subscriptionRouter;
