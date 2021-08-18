const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../../models/Message')

router.post("/addmessage", (req,res) =>{
    const newMessage = new Message({
        username: req.body.username,
        message: req.body.message
    })

    newMessage.save()
        .then(message => {res.json({message})})
})

module.exports = router