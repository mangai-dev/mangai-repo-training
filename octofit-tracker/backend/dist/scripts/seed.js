"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const user_1 = __importDefault(require("../models/user"));
const team_1 = __importDefault(require("../models/team"));
const activity_1 = __importDefault(require("../models/activity"));
const leaderboard_1 = __importDefault(require("../models/leaderboard"));
const workout_1 = __importDefault(require("../models/workout"));
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        if (database_1.default.readyState !== 1) {
            await new Promise((resolve, reject) => {
                database_1.default.once('open', () => resolve());
                database_1.default.once('error', reject);
            });
        }
        console.log('Connected to octofit_db');
        await Promise.all([
            user_1.default.deleteMany({}),
            team_1.default.deleteMany({}),
            activity_1.default.deleteMany({}),
            leaderboard_1.default.deleteMany({}),
            workout_1.default.deleteMany({}),
        ]);
        const users = await user_1.default.insertMany([
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
        await team_1.default.insertMany([
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
        await activity_1.default.insertMany([
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
        await leaderboard_1.default.insertMany([
            { name: users[0].name, score: 1280, streak: 7 },
            { name: users[1].name, score: 1110, streak: 4 },
        ]);
        await workout_1.default.insertMany([
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
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
