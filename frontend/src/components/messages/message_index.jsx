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
        this.bottom = React.createRef()
    }

    sendSocketIO(){
        socket.emit("message", this.state.message)
        this.props.addMessage(this.state)
        this.props.fetchMessage(this.state)
        this.setState({message: ''})
    }

    update(e){
        this.setState({
            message: e.target.value
        })
    }

    componentDidMount(){
        this.props.fetchMessages()
    }

    componentDidUpdate(){
        this.bottom.current.scrollIntoView();
    }

    render(){
        console.log(this.props)
        const allMessages = this.props.messages.map(message => {
            return (
                <div className="message-credentials" key={message.id}>
                    <span className="author-message">
                        {message.username}
                    </span>
                    <br/>
                    <div className="message">
                        {message.message}
                    </div>
                </div>
            )
        })
        return(
            <div className="chat-container">
            <main className="chat-main">
                <div className="chat-sidebar">
                <h3><i className="fas fa-comments"></i> Room Name:</h3>
                <h2 id="room-name"></h2>
                <h3><i className="fas fa-users"></i> Users</h3>
                <ul id="users"></ul>
                </div>

                <div className="chat-messages">
                    {allMessages}
                    <div ref={this.bottom}/>
                </div>
                
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
                        value={this.state.message}
                    />
                    <button className="btn" onClick={this.sendSocketIO}><i className="fas fa-paper-plane"></i> Send</button>
                    </form>
                </div>
            </div>      
        )
    }
}

export default MessageIndex