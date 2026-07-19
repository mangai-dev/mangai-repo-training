import { Router } from 'express';
import Workout from '../models/workout';

const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
});

router.post('/', async (req, res) => {
  const workout = await Workout.create({
    title: req.body.title || 'New Workout',
    difficulty: req.body.difficulty || 'Beginner',
    durationMinutes: req.body.durationMinutes || 20,
    focus: req.body.focus || 'General fitness',
  });

  res.status(201).json(workout);
});

export default router;
