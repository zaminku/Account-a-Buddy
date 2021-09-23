import * as RoomApiUtil from "../util/room_api_util"
import { fetchPartnerGoal } from "./goal_actions"
import { fetchPartner } from "./user_actions"

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
            dispatch(receiveRoom(room));

            const { user1, user2, goal1, goal2 } = room;
            if(goalId === goal1) {
                fetchPartnerGoal(goal2, dispatch)
                fetchPartner(user2, dispatch)
            } else {
                fetchPartnerGoal(goal1, dispatch)
                fetchPartner(user1, dispatch)
            }
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
    return (
        RoomApiUtil.deleteRoom(roomId)
            .then(res => {
                dispatch(removeRoom())
            })
    );
}