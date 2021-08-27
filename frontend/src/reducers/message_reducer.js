// import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";

// // const initialState = {
// //     username: '',
// //     message: ''
// // };

// export default function messageReducer(oldSlice={}, action){
//     Object.freeze(oldSlice)
//     let newSlice = Object.assign({}, oldSlice)

//     switch(action.type) {
//         case RECEIVE_MESSAGE:
//             newSlice[action.message._id] = action.message
//             return newSlice
//         case RECEIVE_MESSAGES:
//             // messages are an array
//             console.log(action);
//             const messages = action.messages.data
//             return messages
//         // // TEST CODE =======================================
//         // case REMOVE_MESSAGE:
//         //     // can't delete messages properly b/c the index, messageId, and keys don't always line up
//         //     delete nextState[action.index]
//         //     return nextState
//         // =================================================
//         default: 
//             return oldSlice;
//     }
// }