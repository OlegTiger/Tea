import express from 'express';
import template from '../template';
import { Tea } from "../db/models"
const router = express.Router();

router.get('/', async (req, res) => {
  const allTea = await Tea.findAll()
  console.log(allTea);
  res.send(template({ path: req.originalUrl, allTea }));
});

router.get('/login', (req, res) => {
  res.send(template({ path: req.originalUrl }));
});



export default router;
