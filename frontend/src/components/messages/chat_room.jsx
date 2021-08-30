import React from 'react'
import "./chat_room.css"

// TEST CODE ===============================================
// import socketIOClient from "socket.io-client"
// const socket = socketIOClient("ws://account-a-buddies-app.herokuapp.com:14827/socket.io/?EIO=4&transport=websocket")
const io = require('socket.io-client');
const socket = io();
// =========================================================

class ChatRoom extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            message: {
                username: this.props.user.username,
                text: ""
            }, 
            buddy: "", 
            convoLength: null, 
            roomNeedJoining: true
        }

        this.sendMessage = this.sendMessage.bind(this)
        this.update = this.update.bind(this)
        this.bottom = React.createRef()

        // TEST CODE ===============================
        // this.handleDelete = this.handleDelete.bind(this)
        // =========================================
    }

    sendMessage(){
        this.props.addMsgToConvo(this.props.room, this.state.message);
        socket.emit("send message", this.props.room._id, this.state.message);
        this.setState({message: { 
            username: this.props.user.username, 
            text: "" 
        }})
        console.log(`this socket id is ${socket.id}`);
    }

    update(e){
        this.setState({
            message: { 
                username: this.state.message.username,
                text: e.target.value
            }
        })
    }

    // TEST CODE ===============================
    // handleDelete(message, index) {
    //     this.props.deleteMessage(message, index)
    // }
    // =========================================

    componentDidMount(){
        this.props.fetchRoom(this.props.match.params.goalId);

        socket.on("new user", username => {
            console.log(`${username} was connected to the server`);
            this.setState({buddy: username});
        });
        socket.on("receive message", message => {
            console.log(`A message by ${message.username} was received by the server: ${message.text}`);
            this.props.receiveMessage(message);
        })
    };

    componentDidUpdate(){
        console.log("did update");
        const { room, user } = this.props;
        if(this.state.roomNeedJoining) {
            socket.emit("join", room._id, user.username);
            this.setState({ roomNeedJoining: false });
        }
        if(this.state.convoLength === null) {
            this.setState({ convoLength: room.conversation.length });
        } else {
            if(this.state.convoLength !== room.conversation.length) {
                this.bottom.current.scrollIntoView();
                this.setState({ convoLength: room.conversation.length });
            }
        }
    }

    componentWillUnmount() {
        this.props.clearRoom();
    }

    render(){
        const allMessages = this.props.room.conversation.map((message, index) => {
            return (
                <div key={index} >
                    <div className="message">
                        <span className="author">{message.username}: </span>{message.text}
                    </div>
                    {/* <button onClick={() => this.handleDelete(message, index)} >Delete</button> */}
                </div>
            )
        })
        return(
            <div className="chat-page">
                <h3>Welcome to the chat room {this.state.message.username}</h3>
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
                                value={this.state.message.text}
                            />
                            <button className="btn" onClick={this.sendMessage}><i className="fas fa-paper-plane"></i> Send</button>
                            {/* Add an onclick to the below <i> */}
                            {/* onclick will open settings modal */}
                            <i className="fas fa-sliders-h"></i>
                        </form>
                    </div>
                    {/* <div>{this.state.buddy ? `${this.state.buddy} has joined` : ""}</div> */}
                </div>
                <div className="clearfix">clearfix</div>
            </div>      
        )
    }
}

export default ChatRoom