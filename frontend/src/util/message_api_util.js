import axios from "axios"

export const addMessage = (message) => {
    return (
    axios.post("/api/messages/addmessage", message)
    )
}