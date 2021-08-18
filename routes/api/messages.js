const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../../models/Message')

router.post("/", (req,res) =>{
    const newMessage = new Message({
        username: req.body.username,
        message: req.body.message
    })

    newMessage.save()
        .then(message => {res.json({message})})
})

router.get("/", (req,res) => {
    Message.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(404).json({ nomessagesfound: 'Start a conversation here' }));
})

router.get("/:messageId", (req,res) => {
    Message.findById(req.params.messageId)
        .then(message => res.json(message))
})

module.exports = router