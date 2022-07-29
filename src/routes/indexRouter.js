import express from 'express';
import template from '../template';
import { Tea } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allTea = await Tea.findAll();
  res.send(template({
    path: req.originalUrl,
    allTea,
    usernameSession: {
      username: req.session?.username,
      id: req.session?.userId,
    }, 
  }));
}); 

router.get('/login', (req, res) => {
  res.send(template({
    path: req.originalUrl,
    usernameSession: {
      username: req.session?.username,
      id: req.session?.userId,
    },
  }));
});

router.get('/tea/:id', async (req, res) => {
  const teaPost = await Tea.findOne({ where: { id: req.params.id } });
  const allTea = await Tea.findAll();
  res.send(template({
    path: req.originalUrl,
    teaPost,
    allTea,
    usernameSession: {
      username: req.session?.username,
      id: req.session?.userId,
    },
  }));
});



export default router;
