import * as MessageApiUtil from "../util/message_api_util"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"

const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})

export const addMessage = (message) => dispatch => {
    return (MessageApiUtil.addMessage(message)
    .then(res => dispatch(receiveMessage(res))))
}