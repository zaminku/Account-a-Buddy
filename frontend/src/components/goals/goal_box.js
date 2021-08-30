import React from 'react';
import { Link } from 'react-router-dom';
import "./goal_list.css"
import { findGoalMatch } from "../../util/goal_api_util";
import { updateGoal } from "../../util/goal_api_util";

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

  render() {
<<<<<<< HEAD
    const { openModal } = this.props;
    return (
        <div>
            <div>
              <div>{this.props.title}</div>
              <div>{this.props.description}</div>
              <div>{this.props.category}</div>
              <div>{this.props.available}</div>
              <button onClick={() => openModal('goal-edit', this.props.id)}>    ...    </button>
              <br/>
            </div>
        </div>
=======
    const { goal } = this.props
    return (
      <div>
        <div>{goal.title}</div>
        <div>{goal.description}</div>
        <div>{goal.category}</div>

        <Link to={`/chat/${goal._id}`} ><button onClick={this.findBuddy} >{goal.available ? "Find a buddy" : "Chat"}</button></Link>
        <br/>
      </div>
>>>>>>> main
    );
  }
}

export default GoalBox;