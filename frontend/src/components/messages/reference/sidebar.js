import React from 'react'
import { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from './conversations'
import Contacts from './contacts'
import NewGoalModal from './new_goal_modal'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ username }) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationOpen = activeKey === CONVERSATIONS_KEY

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div style={{ width: '250px' }} className="d-flex flex-column" >
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey} >
                <Nav variant="tabs" className="justify-content-center" >
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY} >Conversations</Nav.Link>
                        <Nav.Link eventKey={CONTACTS_KEY} >Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-right overflow-auto flex-grow-1" >
                    <Tab.Pane eventKey={CONVERSATIONS_KEY} >
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY} >
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small" >
                    Your username: <span className="text-muted" >{username}</span>
                </div>
                {conversationOpen ? 
                    <Button onClick={() => setModalOpen(true)} className="rounded-0" >New Goal</Button> :
                    null
                }
                
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}  >
                    <NewGoalModal closeModal={closeModal} />
            </Modal>
        </div>
    )
}
