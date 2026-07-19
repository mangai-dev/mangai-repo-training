import { Router } from 'express';
import Activity from '../models/activity';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await Activity.find({});
  res.json(activities);
});

router.post('/', async (req, res) => {
  const activity = await Activity.create({
    type: req.body.type || 'Workout',
    durationMinutes: req.body.durationMinutes || 0,
    calories: req.body.calories || 0,
    userName: req.body.userName || 'Unknown',
  });

  res.status(201).json(activity);
});

export default router;
