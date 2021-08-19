const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Room = require('../../models/Room');

router.post("/", (req, res) => {
    const newRoom = new Room ({
        user1: req.body.user1, 
        user2: req.body.user2, 
        goal1: req.body.goal1, 
        goal2: req.body.goal2, 
        conversation: []
    })
    newRoom.save()
        .then(room => {
            return (
                res.json(room)
            );
        })
})

router.delete('/:roomId', (req, res) => {
    Room.deleteOne({ _id: req.params.roomId })
    res.json(req.params.roomId)
})

module.exports = router;