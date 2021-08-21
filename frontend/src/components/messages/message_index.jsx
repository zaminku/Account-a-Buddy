import React from 'react'
import "whatwg-fetch";
import openSocket from "socket.io-client"
import "./message_index.css"
const socket = openSocket("http://localhost:5000")


class MessageIndex extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: this.props.user.username,
            message: ''
        }

        this.sendSocketIO = this.sendSocketIO.bind(this)
        this.update = this.update.bind(this)
        this.bottom = React.createRef()

        // TEST CODE ===============================
        this.handleDelete = this.handleDelete.bind(this)
        // =========================================
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

    // TEST CODE ===============================
    handleDelete(message, index) {
        this.props.deleteMessage(message, index)
    }
    // =========================================

    componentDidMount(){
        this.props.fetchMessages()
        socket.on("message", data=>{
            console.log("socket is working")
        })
    }

    componentDidUpdate(){
        this.bottom.current.scrollIntoView();
    }

    render(){
        const allMessages = this.props.messages.map((message, index) => {
            return (
                <div>
                    <div className="message">
                        <span className="author">{message.username}: </span>{message.message}
                    </div>
                    {/* <button onClick={() => this.handleDelete(message, index)} >Delete</button> */}
                </div>
            )
        })
        return(
            <div className="chat-page">
                <h3>Welcome to the chat room</h3>
                <div className="chat-container">
                    <div className="chat-messages">
                        {allMessages}
                        <div ref={this.bottom}/>
                    </div>
                    <div className="chat-form-container">
                        <form id="chat-form">
                            <input
                                id="msg"
                                type="text"
                                placeholder="Enter Message"
                                autoComplete="off"
                                onChange={e=>this.update(e)}
                                value={this.state.message}
                            />
                            <button className="btn" onClick={this.sendSocketIO}><i className="fas fa-paper-plane"></i> Send</button>
                        </form>
                    </div>
                </div>
                <div className="clearfix">clearfix</div>
            </div>      
        )
    }
}

export default MessageIndex