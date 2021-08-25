import React from 'react'
import "./chat_room.css"
import socketIOClient from "socket.io-client"
const socket = socketIOClient("http://localhost:5000")

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
        // this.handleDelete = this.handleDelete.bind(this)
        this.props.fetchRoom(this.props.match.params.goalId);
        // =========================================
    }

    sendMessage(){
        this.props.addMsgToConvo(this.props.room, this.state);
        socket.emit("sendMessage", this.state);
        this.setState({message: ''})
    }

    update(e){
        this.setState({
            message: e.target.value
        })
    }

    // TEST CODE ===============================
    // handleDelete(message, index) {
    //     this.props.deleteMessage(message, index)
    // }
    // =========================================

    componentDidMount(){
        // this.props.fetchRoom(this.props.match.params.goalId);

        // TEST CODE ===============================
        // socket.on("connect", () => {  
        //     socket.emit('join', this.props.user.username);
        // });
        // socket.on("receiveMessage", data => {
        //     console.log("component did update");
        //     // fetch the updated array of messages
        //     this.props.receiveMessage(data);
        // });  
        // =========================================
    };

    componentDidUpdate(){
        this.bottom.current.scrollIntoView();
        socket.on("receiveMessage", data => {
            console.log("RECEIVED MESSAGE FROM SERVER");
            console.log(data);
            console.log("============================");
            // fetch the updated array of messages
            // this.props.receiveMessage(data);
        });
    }

    componentWillUnmount() {
        this.props.clearRoom();
    }

    render(){
        const allMessages = this.props.room.conversation.map((message, index) => {
            return (
                <div key={index} >
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
                            {/* Add an onclick to the below <i> */}
                            {/* onclick will open settings modal */}
                            <i className="fas fa-sliders-h"></i>
                        </form>
                    </div>
                </div>
                <div className="clearfix">clearfix</div>
            </div>      
        )
    }
}

export default ChatRoom