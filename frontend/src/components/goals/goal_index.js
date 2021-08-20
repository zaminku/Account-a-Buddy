import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GoalBox from './goal_box';

class Goal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   goals: []
    // }

    this.showGoal = this.showGoal.bind(this);
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

  showGoal() {
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

  render() {
    return (
      <div>
        <Link to="/goals/new">
          <button>Create a goal</button>
        </Link>
          {this.showGoal()}
      </div>
    )
  }
}

export default withRouter(Goal);