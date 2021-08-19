import { RECEIVE_ROOM } from '../actions/room_actions'

const defaultRoom = {
    user1: "", 
    user2: "", 
    goal1: "", 
    goal2: "", 
    conversation: []
}

const roomReducer = (oldState = defaultRoom, action) => {
    Object.freeze(oldState)
    // let nextState = Object.assign({}, oldState)

    switch(action.type) {
        case RECEIVE_ROOM:
            return action.room
        default: 
            return oldState
    }

}

export default roomReducer;