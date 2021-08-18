import { connect } from 'react-redux'
import MessageIndex from './message_index'
import { addMessage, fetchMessages, fetchMessage } from '../../actions/message_actions'


const mSTP = (state) => {
    return({
        messages: Object.values(state.messages),
        currentUserId: state.session.id
    })
}

const mDTP = dispatch => ({
    addMessage: (message) => dispatch(addMessage(message)),
    fetchMessages: () => dispatch(fetchMessages()),
    fetchMessage: (message) => dispatch(fetchMessage(message))
})

export default connect(mSTP,mDTP)(MessageIndex)