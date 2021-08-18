import { combineReducers } from 'redux';
import session from './session_reducer';
import messages from './message_reducer'

const RootReducer = combineReducers({
    session,
    messages
});

export default RootReducer;