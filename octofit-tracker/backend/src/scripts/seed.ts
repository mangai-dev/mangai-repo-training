import db from '../config/database';
import User from '../models/user';
import Team from '../models/team';
import Activity from '../models/activity';
import Leaderboard from '../models/leaderboard';
import Workout from '../models/workout';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    if (db.readyState !== 1) {
      await new Promise<void>((resolve, reject) => {
        db.once('open', () => resolve());
        db.once('error', reject);
      });
    }
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Ava Chen',
        email: 'ava.chen@example.com',
        role: 'captain',
        fitnessGoal: 'Improve endurance',
      },
      {
        name: 'Noah Brooks',
        email: 'noah.brooks@example.com',
        role: 'member',
        fitnessGoal: 'Build strength',
      },
    ]);

    await Team.insertMany([
      {
        name: 'North Stars',
        sport: 'Running',
        members: [users[0].name, users[1].name],
      },
      {
        name: 'Peak Performance',
        sport: 'CrossFit',
        members: [users[0].name],
      },
    ]);

    await Activity.insertMany([
      {
        type: 'Run',
        durationMinutes: 35,
        calories: 420,
        userName: users[0].name,
      },
      {
        type: 'Strength',
        durationMinutes: 45,
        calories: 310,
        userName: users[1].name,
      },
    ]);

    await Leaderboard.insertMany([
      { name: users[0].name, score: 1280, streak: 7 },
      { name: users[1].name, score: 1110, streak: 4 },
    ]);

    await Workout.insertMany([
      {
        title: 'HIIT Basics',
        difficulty: 'Intermediate',
        durationMinutes: 25,
        focus: 'Cardio',
      },
      {
        title: 'Core Stability',
        difficulty: 'Beginner',
        durationMinutes: 20,
        focus: 'Core',
      },
    ]);

    console.log('Database seeding complete');
    await (await import('mongoose')).default.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
