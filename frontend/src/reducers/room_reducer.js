import { RECEIVE_ROOM, REMOVE_ROOM } from '../actions/room_actions'

const defaultRoom = {
    user1: "", 
    user2: "", 
    goal1: "", 
    goal2: "", 
    conversation: []
}

const roomReducer = (oldSlice=defaultRoom, action) => {
    Object.freeze(oldSlice)
    // let newSlice = Object.assign({}, oldSlice)

    switch(action.type) {
        case RECEIVE_ROOM:
            return action.room
        case REMOVE_ROOM:
            return defaultRoom
        default: 
            return oldSlice
    }

}

export default roomReducer;