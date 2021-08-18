import { connection } from "mongoose";
import { RECEIVE_GOALS, RECEIVE_USER_GOALS, RECEIVE_GOAL, REMOVE_GOAL } from "../actions/goal_actions";

const goalsReducer = (state ={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_GOALS:
            const goals = action.goals.data;
            goals.forEach(goal => newState[goal._id] = goal);
            return newState;

            // newState.all = action.goals.data;
            // return newState;
            // newState = action.goals;
            
            return action.goals;
        case RECEIVE_USER_GOALS:

            // newState.user = action.goals.data;
            // return newState;
            // newState = action.goals.data;
            return action.goals.data;
        case RECEIVE_GOAL:
            const goal = { ...action.payload.data, newGoal: true };
            return { ...state, [goal._id]: goal };
            // newState.new = action.goals.data;
            // return newState;
            newState[action.goal.data._id] = action.goal.data;
            return newState;
        case REMOVE_GOAL:
            delete newState[action.goalId];
            return newState;

            // let idx;
            // for (let i = 0; i < action.goals.data.length; i++) {
            //     if (action.goals.data[i]._id === action.goalId) {
            //         idx = i;
            //         break;
            //     }
            // }
            // if (idx !== undefined) {
            //     return action.goals.data.slice(0, idx).concat(action.goals.data.slice(idx + 1, action.goals.data.length))
            // }
            // return newState;
        default:
            return state;
    }
}

export default goalsReducer;