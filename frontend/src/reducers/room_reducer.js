import { RECEIVE_ROOM, REMOVE_ROOM } from '../actions/room_actions'

// const defaultRoom = {
//     user1: "", 
//     user2: "", 
//     goal1: "", 
//     goal2: "", 
//     conversation: []
// }

const roomReducer = (oldSlice={}, action) => {
    Object.freeze(oldSlice)
    let newSlice = Object.assign({}, oldSlice)

    switch(action.type) {
        case RECEIVE_ROOM:
            newSlice[action.room._id] = action.room
            return newSlice
        case REMOVE_ROOM:
            delete newSlice[action.roomId]
            return newSlice
        default: 
            return oldSlice
    }

}

export default roomReducer;