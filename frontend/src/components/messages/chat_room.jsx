import React from 'react'
import { Link } from 'react-router-dom'
import "./chat_room.css"
import { fetchUser } from '../../util/user_api_util'
import { fetchGoal, updateGoal } from '../../util/goal_api_util';

// TEST CODE ===============================================
// import socketIOClient from "socket.io-client"
// const socket = socketIOClient("ws://account-a-buddies-app.herokuapp.com:14827/socket.io/?EIO=4&transport=websocket")
const io = require('socket.io-client');
const socket = io("/");
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
            roomNeedJoining: true, 
            info: false,
            settings: false, 
            confirmClick: false,
            partner: "", 
            partnerGoal: "", 
            // ==============================================
            // Is the goalId supposed to be for the user or partner?
            goalId: this.props.match.params.goalId
            // ==============================================
        }

        this.sendMessage = this.sendMessage.bind(this);
        this.update = this.update.bind(this);
        this.bottom = React.createRef();
        this.showMessages = this.showMessages.bind(this);
        this.showGoalItems = this.showGoalItems.bind(this);
        this.showConfirmClick = this.showConfirmClick.bind(this);
        this.setAvailableToTrue = this.setAvailableToTrue.bind(this);
        this.openModal = this.openModal.bind(this);
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

    componentDidMount(){
        this.props.fetchUserGoals(this.props.user.id);
        this.props.fetchRoom(this.state.goalId);
        
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
        const { room, user } = this.props;
        if(this.state.roomNeedJoining && room.goal1) {
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

        const { goalId } = this.props.match.params;
        if((room.goal1 && !this.state.partnerGoal) || 
        goalId !== this.state.goalId) {
            let partnerGoalId = "";
            let partnerId = "";
            if(room.goal1 === goalId) {
                partnerGoalId = room.goal2;
                partnerId = room.user2;
            } else {
                partnerGoalId = room.goal1;
                partnerId = room.user1;
            }

            // ===========================================================================
            // figure out why the set state for partner and partner goal is buggy
            fetchUser(partnerId)
                .then(user => this.setState({ partner: user.data, goalId: goalId }))
            fetchGoal(partnerGoalId)
                .then(goal => this.setState({ partnerGoal: goal.data }))
            // ===========================================================================
        }

        
    }

    componentWillUnmount() {
        this.props.clearRoom();
        this.props.clearGoals();
    }

    showGoalItems() {
        const { goals, fetchRoom } = this.props;
        return (
            <div>
                {Object.values(goals).map((goal, index) => {
                    if(goal.available === false) {
                        return (
                            <Link 
                                to={`/chat/${goal._id}`} 
                                onClick={() => fetchRoom(goal._id)} 
                                className={goal._id === this.props.room.goal1 || goal._id === this.props.room.goal2 ? "chosen" : ""} 
                            >
                                    {goal.title}
                            </Link>
                        );
                    }
                })}
            </div>
        );
    }
    
    showMessages() {
        return (
            <ul>
                {this.props.room.conversation.map((message, index) => {
                    let msgBubble = "";
                    if(message.username === this.props.user.username) {
                        msgBubble = "you";
                    } else {
                        msgBubble = "partner";
                    }
                    return (
                        <li key={index} className={`${msgBubble}`} >
                            <div className="message" >{message.text}</div>
                            <div className="author">{message.username}</div> 
                        </li>
                    );
                })}
            </ul>
        );
    } 

    convertDate(date) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        const convertedDate = new Date(date);
        return (`${months[convertedDate.getMonth()]} ${convertedDate.getDate()}, ${convertedDate.getFullYear()}`);
    }

    showInfo() {
        const { goals, room } = this.props;
        const { goalId } = this.props.match.params;
        const goal = goals[goalId];
        const { partner, partnerGoal } = this.state;

        return (
            <ul className="info" >
                <li key="1" >Chat began: {this.convertDate(room.createdAt)}</li>
                <li key="2" >You  |  {goal.title}  |  {this.convertDate(goal.createdAt)}</li>
                <li key="3" >{partner.username}  |  {partnerGoal.title}  |  {this.convertDate(partnerGoal.createdAt)}</li>
            </ul>
        );
    }

    setAvailableToTrue(goal) {
        let newGoal = Object.assign({}, goal);
        newGoal.available = true;
        updateGoal(newGoal);
    }

    showConfirmClick() {
        return (
            <div className="confirmClick" >
                <p>Are you sure?</p>
                <div>
                    <button onClick={() => {
                        this.props.history.push("/goals")
                        this.setAvailableToTrue(this.props.goals[this.props.match.params.goalId])
                        this.setAvailableToTrue(this.state.partnerGoal)
                        this.props.deleteRoom(this.props.room._id)
                    }} >Yes</button>
                    
                    <button onClick={() => {
                        this.openModal("confirmClick")
                    }} >No</button>
                </div>
            </div>
        );
    }

    showSettings() {
        return (
            <div className="settings">
                <div>End partnership with {this.state.partner.username}?</div>
                <div>
                    <button onClick={() => this.openModal("confirmClick")} >Yes</button>
                    <button onClick={() => this.openModal("settings")} >No</button>
                </div>
            </div>
        );
    }

    openModal(key) {
        this.setState({ info: false, settings: false, confirmClick: false });
        if(this.state[key]) {
            this.setState({ [key]: false })
        } else {
            this.setState({ [key]: true });
        }
    }

    render(){
        return(
            <div className="chat-page" >
                <div className="chat-index" >
                    {this.showGoalItems()}
                </div>
                <div className="chat-container">
                    <i className="fas fa-info-circle" onClick={() => this.openModal("info")} ></i>
                    {this.state.info ? this.showInfo() : null}
                    <div className="chat-messages">
                        {this.showMessages()}
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
                            <button onClick={this.sendMessage} ><i className="fas fa-paper-plane send">Send</i></button>
                            <i className="fas fa-sliders-h" onClick={() => this.openModal("settings")} ></i>
                            {this.state.settings ? this.showSettings() : null}
                            {this.state.confirmClick ? this.showConfirmClick() : null}
                        </form>
                    </div>
                </div>
            </div>      
        )
    }
}

export default ChatRoom