"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_1 = __importDefault(require("../models/activity"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const activities = await activity_1.default.find({});
    res.json(activities);
});
router.post('/', async (req, res) => {
    const activity = await activity_1.default.create({
        type: req.body.type || 'Workout',
        durationMinutes: req.body.durationMinutes || 0,
        calories: req.body.calories || 0,
        userName: req.body.userName || 'Unknown',
    });
    res.status(201).json(activity);
});
exports.default = router;
