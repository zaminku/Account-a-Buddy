import { RECEIVE_ROOM, REMOVE_ROOM, RECEIVE_MESSAGE } from '../actions/room_actions'

const defaultRoom = {
    user1: "", 
    user2: "", 
    goal1: "", 
    goal2: "", 
    conversation: []
}

const roomReducer = (oldSlice=defaultRoom, action) => {
    Object.freeze(oldSlice)
    let newSlice = Object.assign({}, oldSlice)

    switch(action.type) {
        case RECEIVE_ROOM:
            return newSlice[action.room._id] = action.room;
        case REMOVE_ROOM:
            return defaultRoom;
        case RECEIVE_MESSAGE:
            const newConvo = newSlice.conversation;
            newConvo.push(action.message);
            return Object.assign({}, oldSlice, { conversation: newConvo });
        default: 
            return oldSlice
    }
}

export default roomReducer;