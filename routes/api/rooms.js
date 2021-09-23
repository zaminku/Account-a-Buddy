const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Room = require('../../models/Room');
const Message = require('../../models/Message');

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

// ====================================================
router.delete('/:roomId', (req, res) => {
    Room.deleteOne({ _id: req.params.roomId })
})
// ====================================================

router.get("/:goalId", (req, res) => {
    const defaultRoom = {
        user1: "", 
        user2: "", 
        goal1: "", 
        goal2: "", 
        conversation: []
    }
    Room.findOne({ goal1: req.params.goalId })
        .then(room => {
            if(room) {
                res.json(room)
            }
        })
    Room.findOne({ goal2: req.params.goalId })
        .then(room => {
            if(room) {
                res.json(room)
            }
        })
})

router.patch("/", (req, res) => {
    const { room, message } = req.body;
    room.conversation.push(message);
    Room.findOneAndUpdate({_id: room._id}, room, {new: true})
        .then(room => res.json(room));
})

module.exports = router;