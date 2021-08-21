import { connect } from 'react-redux'
import MessageIndex from './message_index'
import { addMessage, fetchMessages, fetchMessage, deleteMessage } from '../../actions/message_actions'


const mSTP = (state) => {
    return({
        messages: Object.values(state.messages),
        user: state.session.user
    })
}

const mDTP = dispatch => {
    return (
        {
            addMessage: (message) => dispatch(addMessage(message)),
            fetchMessages: () => dispatch(fetchMessages()),
            fetchMessage: (message) => dispatch(fetchMessage(message)), 
            // TEST CODE ===============================================
            deleteMessage: (message, index) => dispatch(deleteMessage(message, index))
            // =========================================================
        }
    );
}

export default connect(mSTP,mDTP)(MessageIndex)