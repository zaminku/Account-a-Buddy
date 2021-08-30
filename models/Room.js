const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;


const Message = new Schema ({
    username: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }, 
    date: {
        type: Date, 
        default: Date.now()
    }
},{
    timestamps: true
});


const RoomSchema = new Schema ({
    user1: ObjectId, 
    user2: ObjectId, 
    goal1: ObjectId, 
    goal2: ObjectId, 
    conversation: [Message], 
    date: {
        type: Date, 
        default: Date.now()
    }
},{
    timestamps: true
});

const Room = mongoose.model("Room", RoomSchema);
module.exports = Room