import axios from 'axios';

export const createRoom = room => {
    return axios.post("/api/rooms", room)
}

export const deleteRoom = roomId => {
    return axios.delete(`/api/rooms/${roomId}`)
}