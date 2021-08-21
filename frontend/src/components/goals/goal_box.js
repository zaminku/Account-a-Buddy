import React from 'react';
import "./goal_index.css"
import { fetchBuddy } from "../../util/goal_api_util";

class GoalBox extends React.Component {

  // TEST CODE ===================================
  constructor(props) {
    super(props);
    this.findPartner = this.findPartner.bind(this);
  }
  
  findPartner() {
    // update goalId status to true
    const { goal, updateGoal } = this.props
    const newGoal = Object.assign({}, goal, { available: true });
    updateGoal(newGoal);
    // fetch another available goal
    const buddyGoal = fetchBuddy(goal);

    // if goal is fetched, update both to status false
    // create room and pass it both goals and users
    
  }
  // =============================================
  

  render() {
    const { category, title, description, author, _id } = this.props.goal
    return (
        <div>
            <div className="goalbox-cont">
              <h3 className="goals-text1">{title}</h3>
              <div className="goals-text2">{description}</div>

              {/* TEST CODE =========================== */}
              <button onClick={this.findPartner} >Find a buddy</button>
              {/* ===================================== */}
            </div>
        </div>
    );
  }
}

export default GoalBox;