import { Router } from 'express';
import Leaderboard from '../models/leaderboard';

const router = Router();

router.get('/', async (_req, res) => {
  const leaderboard = await Leaderboard.find({});
  res.json(leaderboard);
});

router.post('/', async (req, res) => {
  const entry = await Leaderboard.create({
    name: req.body.name || 'New Player',
    score: req.body.score || 0,
    streak: req.body.streak || 0,
  });

  res.status(201).json(entry);
});

export default router;
