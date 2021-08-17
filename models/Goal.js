const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

const Goal = mongoose.model('goal', GoalSchema);

module.exports = Goal;