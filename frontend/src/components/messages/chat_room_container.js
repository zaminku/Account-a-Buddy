import { connect } from 'react-redux'
import ChatRoom from './chat_room'
import { addMessage, fetchMessages, fetchMessage, deleteMessage } from '../../actions/message_actions'
import { addMsgToConvo, fetchRoom } from '../../actions/room_actions'


const mSTP = (state) => {
    return({
        messages: Object.values(state.messages),
        user: state.session.user, 
        
        // TEST CODE ===============================
        room: state.room
        // =========================================
    })
}

const mDTP = dispatch => {
    return (
        {
            addMessage: (message) => dispatch(addMessage(message)),
            fetchMessages: () => dispatch(fetchMessages()),
            fetchMessage: (message) => dispatch(fetchMessage(message)), 
            // TEST CODE ===============================================
            // deleteMessage: (message, index) => dispatch(deleteMessage(message, index))
            addMsgToConvo: (room, message) => dispatch(addMsgToConvo(room, message)), 
            fetchRoom: goalId => dispatch(fetchRoom(goalId))
            // =========================================================
        }
    );
}

export default connect(mSTP,mDTP)(ChatRoom)