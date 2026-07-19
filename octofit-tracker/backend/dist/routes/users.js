"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const users = await user_1.default.find({});
    res.json(users);
});
router.post('/', async (req, res) => {
    const user = await user_1.default.create({
        name: req.body.name || 'Unnamed user',
        email: req.body.email || 'unknown@example.com',
        role: req.body.role || 'member',
        fitnessGoal: req.body.fitnessGoal || 'Stay active',
    });
    res.status(201).json(user);
});
exports.default = router;
