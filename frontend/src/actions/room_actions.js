import * as RoomApiUtil from "../util/room_api_util"

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE, 
        message
    }
}

export const RECEIVE_ROOM = "RECEIVE_ROOM"
const receiveRoom = room => {
    return { type: RECEIVE_ROOM, room }
}
export const createRoom = room => dispatch => {
    return RoomApiUtil.createRoom(room)
        .then(res => {
            let room = res.data
            dispatch(receiveRoom(room))
        })
}
export const fetchRoom = goalId => dispatch => {
    return RoomApiUtil.fetchRoom(goalId)
        .then(res => {
            let room = res.data
            dispatch(receiveRoom(room))
        })
}
export const addMsgToConvo = (room, message) => dispatch => {
    return RoomApiUtil.addMsgToConvo(room, message)
        // Transferring the below dispatch to the sockets to take care of
        .then(res => {
            let room = res.data
            dispatch(receiveRoom(room))
        })
}


export const REMOVE_ROOM = "REMOVE_ROOM"
const removeRoom = () => {
    return { type: REMOVE_ROOM }
}
export const clearRoom = () => dispatch => {
    dispatch(removeRoom())
}
export const deleteRoom = roomId => dispatch => {
    return RoomApiUtil.deleteRoom(roomId)
        .then(res => {
            dispatch(removeRoom())
        })
}