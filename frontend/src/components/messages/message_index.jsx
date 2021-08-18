import React from 'react'
import "whatwg-fetch";
import openSocket from "socket.io-client"
const socket = openSocket("http://localhost:5000")

class MessageIndex extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: 'demo',
            message: ''
        }

        this.sendSocketIO = this.sendSocketIO.bind(this)
        this.update = this.update.bind(this)
    }

    sendSocketIO(){
        socket.emit("message", this.state.message)
        this.props.addMessage(this.state)
    }

    update(e){
        this.setState({
            message: e.target.value
        })
    }

    render(){
        return(
            <div className="chat-container">
                <header className="chat-header">
                    <h1><i className="fas fa-smile"></i> ChatCord</h1>
                    <a id="leave-btn" className="btn">Leave Room</a>
                </header>
            <main className="chat-main">
                <div className="chat-sidebar">
                <h3><i className="fas fa-comments"></i> Room Name:</h3>
                <h2 id="room-name"></h2>
                <h3><i className="fas fa-users"></i> Users</h3>
                <ul id="users"></ul>
                </div>

                <div className="chat-messages"></div>
                
            </main>

                <div className="chat-form-container">
                    <form id="chat-form">
                    <input
                        id="msg"
                        type="text"
                        placeholder="Enter Message"
                        required
                        autoComplete="off"
                        onChange={e=>this.update(e)}
                    />
                    <button className="btn" onClick={this.sendSocketIO}><i className="fas fa-paper-plane"></i> Send</button>
                    </form>
                </div>
            </div>      
        )
    }
}

export default MessageIndex