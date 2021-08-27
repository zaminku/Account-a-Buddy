// import * as MessageApiUtil from "../util/message_api_util"



// export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
// const receiveMessage = (message) => ({
//     type: RECEIVE_MESSAGE,
//     message
// })
// export const addMessage = message => dispatch => {
//     console.log(message);
//     return MessageApiUtil.addMessage(message)
//         .then(res => {
//             return dispatch(receiveMessage(res.data))
//         })
// }
// export const fetchMessage = message => dispatch => {
//     return MessageApiUtil.fetchMessage(message)
//         .then(res => {
//             return dispatch(receiveMessage(res.data))
//         })
// }



// export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
// const receiveMessages = messages => ({
//     type: RECEIVE_MESSAGES,
//     messages
// })
// export const fetchMessages = () => dispatch => (
//     MessageApiUtil.fetchMessages()
//         .then(res => dispatch(receiveMessages(res)))
// )




// TEST CODE =======================================
// export const REMOVE_MESSAGE = "REMOVE_MESSAGE"
// const removeMessage = index => ({
//     type: REMOVE_MESSAGE, 
//     index
// })
// export const deleteMessage = (message, index) => dispatch => {
//     return (
//         MessageApiUtil.deleteMessage(message)
//             .then(res => {
//                 return dispatch(removeMessage(index))
//             })
//     )
// }
// =================================================