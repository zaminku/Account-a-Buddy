import React from 'react'
import { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function NewGoalModal() {
    const titleRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        // below will add goal to database
        // and add it to the local store.
        // need a new_goal_modal_container
        // to map the dispatch to props
        // this.props.createGoal(titleRef.current.value)
        
        this.props.closeModal()
    }
    
    return (
        // below <> is a react fragment
        // fragments: let you group a list of children
        // without adding extra nodes to the DOM        
        <>
            <Modal.Header closeButton >Create Goal</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" ref={titleRef} required ></Form.Control>
                        {/* fill out rest of form later */}
                    </Form.Group>
                    <Button type="submit" >Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
