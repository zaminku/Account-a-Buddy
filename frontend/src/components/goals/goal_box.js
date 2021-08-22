import React from 'react';
import "./goal_index.css"

class GoalBox extends React.Component {
  render() {
    return (
        <div>
            <div>
              <div>{this.props.title}</div>
              <div>{this.props.description}</div>
              <div>{this.props.category}</div>
              <div>{this.props.available}</div>
              <br/>
            </div>
        </div>
    );
  }
}

export default GoalBox;