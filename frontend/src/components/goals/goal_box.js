import React from 'react';
import { Link } from 'react-router-dom';
import "./goal_list.css"
import { findGoalMatch } from "../../util/goal_api_util";
import { updateGoal } from "../../util/goal_api_util";
import "./goal_box.css";

class GoalBox extends React.Component {
  constructor(props) {
    super(props);
    this.findBuddy = this.findBuddy.bind(this);
    this.setAvailableToFalse = this.setAvailableToFalse.bind(this);
  }
  
  componentDidMount() {
    // this.props.fetchRoom(this.props.goal._id);
  }

  findBuddy() {
    const { goal, createRoom, fetchRoom } = this.props
    if(goal.available) {
      findGoalMatch(goal)
      .then(goals => {
        if(goals.data.length > 0) {
          const randomEl = Math.floor(Math.random() * goals.data.length);
          const match = goals.data[randomEl];
          this.setAvailableToFalse(goal);
          this.setAvailableToFalse(match);
          return match;
        } else {
          return null;
        }
      })
      .then(match => {
        if(match !== null) {
          const newRoom = {
            user1: goal.author, 
            user2: match.author, 
            goal1: goal._id, 
            goal2: match._id
          };
          createRoom(newRoom);
        } else {
          console.log("NO MATCH WAS FOUND!!!");
        }
      })
    } else {
      console.log("The goal's availble status is FALSE. Must be TRUE in order to find a match.");
      // fetchRoom(goal._id);
    }
  }

  setAvailableToFalse(goal) {
    let newGoal = Object.assign({}, goal);
    newGoal.available = false;
    goal._id === this.props.goal._id ? 
      this.props.updateGoal(newGoal) : 
      updateGoal(newGoal);
  }

  incrementCounter(key) {
    let newGoal = this.props.goal;
    const today = this.currentDate()
    console.log(newGoal.dailyEmoji)
    if (newGoal.dailyEmoji !== today){
      newGoal.dailyEmoji = today
      newGoal.emotions[key]++;
      this.props.updateGoal(newGoal);
    }else{
      console.log("You've pressed today, chill bruv")
    }
  }

  currentDate(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDate()
    const current = `${month}/${day}`
    return current
  }

  showEmojis() {
    if(this.props.goal.emotions) {
      const { sad, happy, anxious, neutral, angry } = this.props.goal.emotions;

      return(
        <ul className="emoji-list">

          <li>
            <img className="emoji" src="../emoticons/happy.png" onClick={() => this.incrementCounter("happy")} alt="happy"/>
            <div className='emotion-value'>
              {happy}
            </div>
          </li>

          <li>
            <img className="emoji" src="../emoticons/anxious.png" onClick={() => this.incrementCounter("anxious")} alt="anxious"/>
            <div className='emotion-value'>
              {anxious}
            </div>
          </li>

          <li>
            <img className="emoji" src="../emoticons/neutral.png" onClick={() => this.incrementCounter("neutral")} alt="neutral" />
            <div className='emotion-value'>
              {neutral}
            </div>
          </li>

          <li>
            <img className="emoji" src="../emoticons/sad.png" onClick={() => this.incrementCounter("sad")} alt="sad" />
            <div className='emotion-value'>
              {sad}
            </div>
          </li>

          <li>
            <img className="emoji" src="../emoticons/angry.png" onClick={() => this.incrementCounter("angry")} alt="angry" />
            <div className='emotion-value'>
              {angry}
            </div>
          </li>

        </ul>
      ); 
    }
  }  

  render() {
    const { openModal, goal } = this.props;
    return (
      <div className="goal-box">
        <div>{goal.title}</div>
        <div>{goal.category}</div>
        <button id="edit-btn" onClick={() => openModal('goal-edit', this.props.id)}>Show Details</button>
        {/* <Link to={`/chat/${goal._id}`} ><button onClick={this.findBuddy} >{goal.available ? "Find a buddy" : "Chat"}</button></Link> */}
        {/* <button onClick={this.findBuddy} >{goal.available ? "Find a buddy" : <Link to={`/chat/${goal._id}`} >Chat</Link>}</button> */}
        {goal.available ? 
          <button onClick={this.findBuddy} >"Find a buddy"</button> : 
          <Link to={`/chat/${goal._id}`} ><button>Chat</button></Link>}
        <div>{this.showEmojis()}</div>
      </div>
    )
  }
}

export default GoalBox;