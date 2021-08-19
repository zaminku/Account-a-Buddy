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