const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Message = require('../../models/Message')

router.post("/", (req, res) =>{
    const newMessage = new Message({
        username: req.body.username,
        message: req.body.message
    })

    newMessage.save()
        // .then(message => {res.json({message})})
        .then(message => {
            return res.json(message)
        })
    })

router.get("/", (req, res) => {
    Message.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(404).json({ nomessagesfound: 'Start a conversation here' }));
})

router.get("/:messageId", (req, res) => {
    Message.findById(req.params.messageId)
        .then(message => res.json(message))
})

// TEST CODE =========================
router.patch('/:messageId', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        const update = {
            username: req.body.username, 
            message: req.body.message
        }
        Message.findByIdAndUpdate(
            req.params.messageId, 
            update, 
            {new: true}, 
            (err, message) => {
                if(err) {
                    res.status(400).json(err)
                } else {
                    res.json(message);
                }
            }
        )
    }
)

// router.delete('/:messageId', (req, res) => {
//     Message.deleteOne({_id: req.params.messageId}, 
//         error => {
//             if(error) {
//                 return error
//             }
//         })
//     res.json(req.params.messageId)
// })
// ===================================

module.exports = router