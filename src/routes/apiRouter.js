import express from 'express';
import bcrypt from 'bcrypt';
import { User, Tea } from '../db/models';

const router = express.Router();

router.post('/users', async (req, res) => {
  // console.log(req.body);
  const hashpass = await bcrypt.hash(req.body.password, 10);
  // console.log(hashpass);
  const [currentUser, created] = await User.findOrCreate({
    where: {
      email: req.body.email,
    },
    defaults: {
      name: req.body.username,
      password: hashpass, // Убираем в defaults, производим сравнение через bcrypt.compare
    },
  });
  if (created) {
    // Сохраняем в сессию какую-то информацию и актвиируем её
    req.session.username = currentUser.name;

    req.session.userId = currentUser.id;
    res.json({ username: currentUser.name, id: currentUser.id });
  } else {
    const passwordCheck = await bcrypt.compare(req.body.password, currentUser.password);
    if (!created && !passwordCheck) {
      res.json({});
    } else {
      // Сохраняем в сессию какую-то информацию и актвиируем её
      req.session.username = currentUser.name;

      req.session.userId = currentUser.id;
      res.json({ username: currentUser.name, id: currentUser.id });
    }
  }
});

router.get('/admin', async (req, res) => {
  const allTea = await Tea.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(allTea);
});

router.post('/newpost', async (req, res) => {
  try {
    await Tea.create(req.body);
    const allTea = await Tea.findAll({ order: [['updatedAt', 'DESC']] });
    return res.json(allTea);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

router.get('/', async (req, res) => {
  const allPosts = await Tea.findAll();

  res.json(allPosts);
});

export default router;
