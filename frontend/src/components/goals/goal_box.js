import React from 'react';
import "./goal_index.css";

class GoalBox extends React.Component {
  render() {
    const { openModal } = this.props;
    console.log(this.props.key)
    return (
        <div>
            <div>
              <div>{this.props.title}</div>
              <div>{this.props.description}</div>
              <div>{this.props.category}</div>
              <div>{this.props.available}</div>
              <div>{this.props._id}</div>
              <button onClick={() => openModal('goal-edit')}>    ...    </button>
              <br/>
            </div>
        </div>
    );
  }
}

export default GoalBox;