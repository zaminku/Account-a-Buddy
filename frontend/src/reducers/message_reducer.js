import { RECEIVE_MESSAGE } from "../actions/message_actions";

const initialState = {
    username: '',
    message: ''
};

export default function messageReducer(state = initialState, action){
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    
    switch(action.type) {
        case RECEIVE_MESSAGE:
            nextState[action.message.id] = action.message
            return nextState
        default: 
            return state;
    }
}