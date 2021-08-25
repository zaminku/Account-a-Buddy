import React from 'react';
import { Link } from 'react-router-dom';
import "./goal_list.css"
import { findGoalMatch } from "../../util/goal_api_util";
import { updateGoal } from "../../util/goal_api_util";

class GoalBox extends React.Component {

  // TEST CODE ===================================
  constructor(props) {
    super(props);
    this.findBuddy = this.findBuddy.bind(this);
    this.setAvailableToFalse = this.setAvailableToFalse.bind(this);
  }
  
  // #findBuddy will find an matching goal in the DB and ... 
  // create a chat room with an empty array as the conversation, 
  // update the local store to include that chat room that was just created
  findBuddy() {
    const { goal, createRoom } = this.props
    if(goal.available) {
      findGoalMatch(goal)
      .then(goals => {
        if(goals.data.length > 0) {
          const randomEl = Math.floor(Math.random() * goals.data.length);
          const match = goals.data[randomEl];
          this.setState({ match })
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
    }
  }

  setAvailableToFalse(goal) {
    let newGoal = Object.assign({}, goal);
    newGoal.available = false;
    updateGoal(newGoal);
  }
  // =============================================
  

  render() {
    const { goal } = this.props
    return (
      <div>
        <div>{goal.title}</div>
        <div>{goal.description}</div>
        <div>{goal.category}</div>

        {/* TEST CODE =========================== */}
        {/* NOTE: Need to figure out how to only go to chat page if a buddy is found */}
        <Link to={`/chat/${goal._id}`} ><button onClick={this.findBuddy} >{goal.available ? "Find a buddy" : "Chat"}</button></Link>
        {/* ===================================== */}

        <br/>
      </div>
    );
  }
}

export default GoalBox;