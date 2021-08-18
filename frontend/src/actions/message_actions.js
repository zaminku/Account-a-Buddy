import * as MessageApiUtil from "../util/message_api_util"

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"

const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})

const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const addMessage = (message) => dispatch => {
    return (MessageApiUtil.addMessage(message)
    .then(res => dispatch(receiveMessage(res))))
}

export const fetchMessages = () => dispatch => {
    return (MessageApiUtil.fetchMessages())
    .then(res => dispatch(receiveMessages(res)))
}

export const fetchMessage = (message) => dispatch => {
    return (MessageApiUtil.fetchMessage(message))
    .then(res => dispatch(receiveMessage(res)))
}