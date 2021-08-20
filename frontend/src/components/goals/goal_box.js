import React from 'react';
import "./goal_index.css"

class GoalBox extends React.Component {
  render() {
    return (
        <div>
            <div className="goalbox-cont">
              <h3 className="goals-text1">{this.props.title}</h3>
              <div className="goals-text2">{this.props.description}</div>
            </div>
        </div>
    );
  }
}

export default GoalBox;