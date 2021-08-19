import axios from 'axios';

export const createRoom = room => {
    return axios.post("/api/rooms", room)
}