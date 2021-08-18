const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MessageSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},{
    timestamps: {
        createdAt: true,
        updatedAt: false
    }
})

const Message = mongoose.model("message", MessageSchema);
module.exports = Message