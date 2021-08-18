import { connect } from 'react-redux'
import MessageIndex from './message_index'
import { addMessage } from '../../actions/message_actions'

const mSTP = (state) => ({
    // messages: Object.values(state.entities.messages),
    // currentUserId: state.session.id
})

const mDTP = dispatch => ({
    addMessage: (message)=> dispatch(addMessage(message))
})

export default connect(mSTP,mDTP)(MessageIndex)