import { Router } from 'express';
import Team from '../models/team';

const router = Router();

router.get('/', async (_req, res) => {
  const teams = await Team.find({});
  res.json(teams);
});

router.post('/', async (req, res) => {
  const team = await Team.create({
    name: req.body.name || 'New Team',
    sport: req.body.sport || 'Fitness',
    members: req.body.members || [],
  });

  res.status(201).json(team);
});

export default router;
