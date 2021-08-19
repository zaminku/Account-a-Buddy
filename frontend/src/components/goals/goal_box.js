import React from 'react';

class GoalBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
        </div>
    );
  }
}

export default GoalBox;