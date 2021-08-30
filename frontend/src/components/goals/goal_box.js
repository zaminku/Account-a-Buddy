import React from 'react';
import "./goal_index.css";

class GoalBox extends React.Component {
  render() {
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
    );
  }
}

export default GoalBox;