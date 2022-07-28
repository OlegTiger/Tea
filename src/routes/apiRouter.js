import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();

router.post('/users', async (req, res) => {
  /* console.log(req.body); */
  const hashpass = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await User.findOrCreate({
    where: {
      name: req.body.username,
      password: hashpass,
      email: req.body.email,
    },
  });
  res.json({ name: currentUser.name });
});

router.get('/', async (req, res) => {
  const allPosts = await Tea.findAll()

  res.json(allPosts);
});

export default router;
