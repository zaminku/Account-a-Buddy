import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalBox from './goal_box';

class Goal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: []
    }
  }

  componentWillMount() {
    this.props.fetchUserGoals(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ goals: newState.goals });
  }

  render() {
    if (this.state.goals.length === 0) {
      return (<div>No goals have been written yet.</div>)
    } else {
      return (
        <div>
          <h2>All Goals</h2>
          {this.state.goals.map(goal => (
            <GoalBox key={goal._id} text={goal.text} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Goal);