import * as RoomApiUtil from "../util/room_api_util"

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
        .then(res => {
            let room = res.data
            dispatch(receiveRoom(room))
        })
}


export const REMOVE_ROOM = ""
const removeRoom = roomId => {
    return { type: REMOVE_ROOM, roomId }
}
export const deleteRoom = roomId => dispatch => {
    return RoomApiUtil.deleteRoom(roomId)
        .then(res => {
            let roomId = res.data
            dispatch(removeRoom(roomId))
        })
}