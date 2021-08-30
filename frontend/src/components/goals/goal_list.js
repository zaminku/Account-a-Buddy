import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GoalBox from './goal_box';
import GoalBoxContainer from './goal_box_container';
import "./goal_list.css"

class GoalList extends React.Component {
    constructor(props) {
        super(props);

        this.showGoal = this.showGoal.bind(this);
    }

    componentWillMount() {
        this.props.fetchUserGoals(this.props.currentUser.id);
    }

    componentWillUnmount() {
        this.props.clearGoals();
    }

    showGoal() {
        if (this.props.goals.length === 0) {
        return (
            <div>
            <div className="no-goals">No goals have been written yet.</div>
            </div>)
        } else {
        return (
            <div>
                <div>
                    <h1>All Goals</h1>
                    <div>
                        <div>
                            {this.props.goals.map(goal => (
                                <GoalBoxContainer key={goal._id}
                                    id={goal._id}
                                    goal={goal} 
                                    room={this.props.room}
                                    // updateGoal={this.props.updateGoal}
                                    createRoom={this.props.createRoom} 
                                    fetchRoom={this.props.fetchRoom}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/goals/new">
                        <button className="goal-btn">Create a goal</button>
                    </Link>
                </div>

                <div>{this.showGoal()}</div>

            </div>
        )
    }

}

export default withRouter(GoalList);