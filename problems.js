const express = require('express');
const router = express.Router();
const Problem = require('../models/Problem');

// POST endpoint to add a new problem
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const newProblem = new Problem({ title, description });
        await newProblem.save();
        res.status(201).json(newProblem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const problem = await Problem.findByIdAndDelete(req.params.id);
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        res.json({ message: 'Problem deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET endpoint to retrieve all problems
router.get('/', async (req, res) => {
    try {
        const problems = await Problem.find();
        res.json(problems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
