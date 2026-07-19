"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leaderboard_1 = __importDefault(require("../models/leaderboard"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const leaderboard = await leaderboard_1.default.find({});
    res.json(leaderboard);
});
router.post('/', async (req, res) => {
    const entry = await leaderboard_1.default.create({
        name: req.body.name || 'New Player',
        score: req.body.score || 0,
        streak: req.body.streak || 0,
    });
    res.status(201).json(entry);
});
exports.default = router;
