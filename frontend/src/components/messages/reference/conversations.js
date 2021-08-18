import React from 'react'
import { useState } from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Conversations() {
    // componentDidMount -> fetch all conversations from DB
    // render the conversations in a list
    // upon clicking a conversation, fetch that conversation
    // from DB and receive that conversation to the local store

    // const { conversations, selectConversation } = this.props
    const [selectedConversation, setSelectedConversation] = useState()

    return (
        // <div>
        //     <ListGroup variant="flush" >
        //         {conversations.map(conversation => (
        //             <ListGroup.Item 
        //                 key={conversation.id}
        //                 action
        //                 onClick={() => setSelectedConversation(conversation.id)}
        //                 active={conversation.id === selectedConversation}
        //             >
        //                 {/* List the goal or conversation partner */}
        //             </ListGroup.Item>
        //         ))}
        //     </ListGroup>
        // </div>
        <div></div>
    )
}
