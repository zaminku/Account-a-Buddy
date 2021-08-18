import React from 'react'
import { useState, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

export default function OpenConversation() {
    // local store will have the selected conversation loaded
    // pass that selected conversation with a container

    // const { selectedConversation } = this.props

    const [text, setText] = useState('')
    const setRef = useCallback(node => {
        if(node) {
            node.scrollIntoView({ smooth: true })
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        // upon submit, add user message to DB
        // also update local store of messages
        // this.props.sendMessage
        setText('')
    }

    return (
        <div className="d-flex flex-column flex-grow-1" >
            <div className="flex-grow-1 overflow-auto" >
                <div className="d-flex flex-column align-items-start justify-content-end px-3">
                    {/* {selectedConversation.messages.map((message, index) => {
                        const lastMessage = selectedConversation.message.length - 1 === index
                        return (
                            <div ref={lastMessage ? setRef : null} key={index} className="my-1 d-flex flex-column" >
                                <div className={`rounded px-2 py-1 bg-primary text-white`}>{message.text}</div>
                                <div>{message.senderName}</div>
                            </div>
                        )
                    })} */}
                </div>
            </div>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="m-2" >
                    <InputGroup>
                    <Form.Control 
                        as="textarea" 
                        required 
                        value={text}
                        onChange={e => setText(e.target.value)}
                        style={{ height: '75px', resize: 'none' }}
                    />
                    <InputGroup.Append>
                        <Button type="submit" >Send</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
