import { RECEIVE_PARTNER_GOAL, CLEAR_GOALS } from "../actions/goal_actions";

const defaultGoal = {
    _id: "",
    title: "", 
    author: "", 
    category: "", 
    description: "", 
    milestones: [], 
    available: "", 
    createdAt: ""
}

const partnerGoalReducer = (state=defaultGoal, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PARTNER_GOAL:
            return action.goal
        case CLEAR_GOALS:
            return defaultGoal;
        default:
            return state;
    }
}

export default partnerGoalReducer;