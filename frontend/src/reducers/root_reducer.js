import { combineReducers } from 'redux';
import session from './session_reducer';
<<<<<<< HEAD
import messages from './message_reducer'

const RootReducer = combineReducers({
    session,
    messages
=======
import api from './session_api_reducer';
import errors from './errors_reducer'

const RootReducer = combineReducers({
    session,
    errors,
>>>>>>> main
});

export default RootReducer;