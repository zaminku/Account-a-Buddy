import axios from 'axios';

export const createRoom = room => (
    axios.post("/api/rooms", room)
)

export const deleteRoom = roomId => (
    axios.delete(`/api/rooms/${roomId}`)
)

export const fetchRoom = goalId => (
    axios.get(`/api/rooms/${goalId}`)
)

export const addMsgToConvo = (room, message) => (
    axios.patch(`/api/rooms`, { room, message })
)