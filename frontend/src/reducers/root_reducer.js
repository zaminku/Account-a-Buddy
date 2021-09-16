import { combineReducers } from 'redux'
import session from './session_reducer'
import errors from './errors_reducer'
import room from './room_reducer'
import partner from './partner_reducer'
import partnerGoal from './partner_goal_reducer'
import goals from './goals_reducer'
import ui from './ui_reducer'

const RootReducer = combineReducers({
    session,
    errors,
    goals,
    ui,
    room, 
    partner, 
    partnerGoal
});

export default RootReducer;