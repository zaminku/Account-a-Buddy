const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const RoomSchema = new Schema ({
    user1: String, 
    user2: String, 
    goal1: String, 
    goal2: String, 
    // above schema types are all String ONLY FOR TESTING
    // below of ObjectId is what we really want
    // user1: ObjectId, 
    // user2: ObjectId, 
    // goal1: ObjectId, 
    // goal2: ObjectId, 
    conversation: [{ username: String, text: String }], 
    date: {
        type: Date, 
        default: Date.now()
    }
},{
    timestamps: true
})

const Room = mongoose.model("Room", RoomSchema);
module.exports = Room