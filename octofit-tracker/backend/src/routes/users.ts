import { Router } from 'express';
import User from '../models/user';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.post('/', async (req, res) => {
  const user = await User.create({
    name: req.body.name || 'Unnamed user',
    email: req.body.email || 'unknown@example.com',
    role: req.body.role || 'member',
    fitnessGoal: req.body.fitnessGoal || 'Stay active',
  });

  res.status(201).json(user);
});

export default router;
