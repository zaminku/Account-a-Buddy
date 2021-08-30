const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Milestone = new Schema({
    milestone: {
        type: String
    },
    
    milestoneCompleted: {
        type: Boolean
    }
});

const Emotions = new Schema ({
        sad: {type: Integer},
        happy: {type: Integer}, 
        anxious: {type: Integer}, 
        neutral: {type: Integer}, 
        angry: {type: Integer}
})


const GoalSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    milestones: {
        type: [Milestone]
    },
    emotions: Emotions,

    // TEST CODE =============================
    available: { 
        type: Boolean,
        required: true
    }
    // =======================================
}, {
    timestamps: true
});

const Goal = mongoose.model('goal', GoalSchema);
module.exports = Goal;