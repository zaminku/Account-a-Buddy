import React from 'react'
import "whatwg-fetch";
import openSocket from "socket.io-client"
import "./chat_room.css"
const socket = openSocket("http://localhost:5000")


class ChatRoom extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: this.props.user.username,
            message: '', 
        }

        this.sendMessage = this.sendMessage.bind(this)
        this.update = this.update.bind(this)
        this.bottom = React.createRef()

        // TEST CODE ===============================
        this.handleDelete = this.handleDelete.bind(this)
        // =========================================
    }

    sendMessage(){
        // socket.emit("message", this.state.message)
        // this.props.addMessage(this.state)
        // this.props.fetchMessage(this.state)

        // invoke a function that will add the this.state message to 
        // the specific chat room's conversation array.
        this.props.addMsgToConvo(this.props.room, this.state);
        // ===============================================
        // then socket.emit to tell each user's program to 
        // fetchMessage which will fetch just the new message that was 
        // added to the chat room's conversation array
        // ===============================================
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
        this.props.fetchRoom(this.props.match.params.goalId);
        // this.props.fetchMessages()
        // socket.on("message", data=>{
        //     console.log("socket is working")
        // })
    }

    componentDidUpdate(){
        this.bottom.current.scrollIntoView();
    }

    componentWillUnmount() {
        this.props.clearRoom();
    }

    render(){
        const allMessages = this.props.room.conversation.map((message, index) => {
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
                            <button className="btn" onClick={this.sendMessage}><i className="fas fa-paper-plane"></i> Send</button>
                        </form>
                    </div>
                </div>
                <div className="clearfix">clearfix</div>
            </div>      
        )
    }
}

export default ChatRoom