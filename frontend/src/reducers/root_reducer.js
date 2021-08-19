import { combineReducers } from 'redux';
import session from './session_reducer';
import messages from './message_reducer'
import errors from './errors_reducer'
import rooms from './room_reducer'
import goals from './goals_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    goals,
    messages,
    rooms
});

export default RootReducer;