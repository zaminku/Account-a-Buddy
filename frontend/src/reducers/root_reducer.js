import { combineReducers } from 'redux';
import session from './session_reducer';
import messages from './message_reducer'
import errors from './errors_reducer'
import goals from './goals_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    goals,
    messages,
    ui
});

export default RootReducer;