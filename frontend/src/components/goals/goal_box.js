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
    this.props.fetchRoom(this.props.goal._id);
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
            user1: goal, 
            user2: match, 
            goal1: goal, 
            goal2: match
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
    updateGoal(newGoal);
  }

  incrementCounter(key) {
    let newGoal = this.props.goal;
    newGoal.emotions[key]++;
    this.props.updateGoal(newGoal);
  }

  showEmojis() {
    if(this.props.goal.emotions) {
      const { sad, happy, anxious, neutral, angry } = this.props.goal.emotions;

      return(
        <ul>
          <li><button id="emo-button" onClick={() => this.incrementCounter("sad")} ></button>{sad}</li>
          {/* <li><button onClick={() => this.incrementCounter("happy")} >HAPPY</button>{happy}</li> */}
          <li><button onClick={() => this.incrementCounter("happy")} >
            <img src="./happy.png" alt="happy"/>
          </button>{happy}</li>

          <li><button onClick={() => this.incrementCounter("anxious")} >ANXIOUS</button>{anxious}</li>
          <li><button onClick={() => this.incrementCounter("neutral")} >NEUTRAL</button>{neutral}</li>
          <li><button onClick={() => this.incrementCounter("angry")} >ANGRY</button>{angry}</li>
        </ul>
      ); 
    }
  }

  render() {
    const { goal, openModal } = this.props;
    return (
      <div>
        <div>{goal.title}</div>
        <div>{goal.description}</div>
        <div>{goal.category}</div>
        <button onClick={() => openModal('goal-edit', this.props.id)}>    ...    </button>
        <Link to={`/chat/${goal._id}`} ><button onClick={this.findBuddy} >{goal.available ? "Find a buddy" : "Chat"}</button></Link>
        <div>{this.showEmojis()}</div>
      </div>
    );
  }
}

export default GoalBox;