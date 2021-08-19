import axios from "axios"

export const addMessage = (message) => {
    return (
    axios.post("/api/messages/", message)
    )
}

export const fetchMessages = () => {
    return (
        axios.get("/api/messages/")
    )
}

export const fetchMessage = (message) => {
    return (
        axios.get(`/api/messages/${message.id}`)
    )
}

// TEST CODE =================================
export const deleteMessage = message => {
    return (
        axios.delete(`/api/messages/${message._id}`)
    )
}
// ===========================================