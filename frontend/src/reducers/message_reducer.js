import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";

const initialState = {
    username: '',
    message: ''
};

export default function messageReducer(state = initialState, action){
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_MESSAGE:
            nextState[action.message.data.message._id] = action.message.data.message
            return nextState
        case RECEIVE_MESSAGES:
            // messages are an array
            const messages = action.messages.data
            return messages
        // TEST CODE =======================================
        case REMOVE_MESSAGE:
            // can't delete messages properly b/c the index, messageId, and keys don't always line up
            delete nextState[action.index]
            return nextState
        // =================================================
        default: 
            return state;
    }
}