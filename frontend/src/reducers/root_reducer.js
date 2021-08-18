import { combineReducers } from 'redux';
import session from './session_reducer';
import messages from './message_reducer'
import errors from './errors_reducer'

const RootReducer = combineReducers({
    session,
    messages,
    errors
});

export default RootReducer;