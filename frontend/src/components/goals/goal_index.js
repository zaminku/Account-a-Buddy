import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalBox from './goal_box';

class Goal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   goals: []
    // }
  }

  componentWillMount() {
    this.props.fetchUserGoals(this.props.currentUser.id);
  }

  componentWillUnmount() {
    this.props.clearGoals();
  }

  // componentWillReceiveProps(newState) {
  //   this.setState({ goals: newState.goals });
  // }

  render() {
    if (this.props.goals.length === 0) {
      return (<div>No goals have been written yet.</div>)
    } else {
      return (
        <div>
          <h1>All Goals</h1>
          {this.props.goals.map(goal => (
            <GoalBox key={goal._id} title={goal.title} description={goal.description}/>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Goal);