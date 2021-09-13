import * as RoomApiUtil from "../util/room_api_util"

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

export const RECEIVE_ROOM = "RECEIVE_ROOM"
const receiveRoom = room => ({
    type: RECEIVE_ROOM,
    room
})
export const createRoom = room => dispatch => (
    RoomApiUtil.createRoom(room)
        .then(res => {
            let room = res.data
            dispatch(receiveRoom(room))
        })
)

export const fetchRoom = goalId => dispatch => (
    RoomApiUtil.fetchRoom(goalId)
        .then(res => {
            let room = res.data
            dispatch(receiveRoom(room))
        })
)

export const addMsgToConvo = (room, message) => dispatch => (
    RoomApiUtil.addMsgToConvo(room, message)
        .then(res => {
            let room = res.data
            dispatch(receiveRoom(room))
        })
)


export const REMOVE_ROOM = "REMOVE_ROOM"
const removeRoom = () => ({ 
    type: REMOVE_ROOM
})
export const clearRoom = () => dispatch => {
    dispatch(removeRoom())
}
export const deleteRoom = roomId => dispatch => {
    console.log(roomId);
    return (
        RoomApiUtil.deleteRoom(roomId)
            .then(res => {
                dispatch(removeRoom())
            })
    );
}
// FIGURE OUT WHY THE WRONG ROOM IS GETTING DELETED!!!
// Put console logs on the room ID and check that it's the right one.