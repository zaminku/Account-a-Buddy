import { connection } from "mongoose";
import { RECEIVE_GOALS, RECEIVE_USER_GOALS, RECEIVE_GOAL, CLEAR_GOALS } from "../actions/goal_actions";

const goalsReducer = (state ={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let goals;
    switch (action.type) {
        case RECEIVE_GOALS:
            goals = action.goals.data;
            goals.forEach(goal => newState[goal._id] = goal);
            return newState;
        case RECEIVE_USER_GOALS:
            goals = action.goals.data;
            goals.forEach(goal => newState[goal._id] = goal);
            return newState;
            return action.goals.data;
        case RECEIVE_GOAL:
            const goal = { ...action.goal.data, newGoal: true };
            return { ...state, [goal._id]: goal };
        case CLEAR_GOALS:
            return {};
        // case REMOVE_GOAL:
        //     delete newState[action.goalId];
        //     return newState;
        default:
            return state;
    }
}

export default goalsReducer;