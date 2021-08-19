import React from 'react'
import Sidebar from './sidebar'
import OpenConversation from './open_conversation'

export default function ChatPage() {
    // ChatPage needs a container that will
    // map the current user's username to the 
    // props
    
    // const { username } = this.props

    return (
        <div className="d-flex" style={{ height:'100vh' }} >
            {/* username={username} */}
            <Sidebar  />
            <OpenConversation />
        </div>
    )
}
