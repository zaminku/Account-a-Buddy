import React from 'react'
import "./chat_room.css"
import socketIOClient from "socket.io-client"
const socket = socketIOClient("http://localhost:5000")

class ChatRoom extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            message: {
                username: this.props.user.username,
                text: ""
            }, 
            buddy: ""
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
        // console.log(`this socket id is ${socket.id}`);
        // this.bottom.current.scrollIntoView();
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
        

        // TEST CODE ===============================
        this.props.fetchRoom(this.props.match.params.goalId);
        if(this.props.room._id) {
            socket.emit("join", this.props.room._id, this.props.user.username);
        }
        socket.on("new user", username => {
            // console.log(`${username} was connected to the server`);
            this.setState({buddy: username});
        });
        socket.on("receive message", message => {
            // console.log(`A message by ${message.username} was received by the server: ${message.text}`);
            this.props.receiveMessage(message);
        })
        // =========================================
    };

    componentDidUpdate(){
        // if(this.props.room._id) {
        //     socket.emit("join", this.props.room._id, this.props.user.username);
        // }
        this.bottom.current.scrollIntoView();
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
                    <div>{this.state.buddy ? `${this.state.buddy} has joined` : ""}</div>
                </div>
                <div className="clearfix">clearfix</div>
            </div>      
        )
    }
}

export default ChatRoom