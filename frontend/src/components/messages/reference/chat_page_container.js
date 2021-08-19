import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { addMessage } from '../../../actions/message_actions'
import ChatPage from './chat_page'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io(
      'http://localhost:5000',
      { query: { id } }
    )
    setSocket(newSocket)

    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}


const mSTP = (state) => ({
    // messages: Object.values(state.entities.messages),
    // currentUserId: state.session.id
})

const mDTP = dispatch => ({
    addMessage: (message)=> dispatch(addMessage(message))
})

export default connect(mSTP,mDTP)(ChatPage)