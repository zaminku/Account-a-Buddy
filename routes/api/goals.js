const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const testing_goals = [
    {
        id: 'g1',
        type: 'building habit',
        title: 'testing goals',
        description: 'making sure it works',
        author: 'a1'
    }
];

router.get('/', (req, res, next) => {
    const goalId = req.params.pid;
    const goal = testing_goals.find( g => {
        return g.id === goalId;
    });

    res.json({ goal });
})


module.exports = router;