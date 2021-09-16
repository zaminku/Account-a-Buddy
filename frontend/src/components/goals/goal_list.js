import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GoalBoxContainer from './goal_box_container';
import "./goal_list.css"

class GoalList extends React.Component {
    constructor(props) {
        super(props);

        this.showGoal = this.showGoal.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserGoals(this.props.currentUser.id);
    }

    componentWillUnmount() {
        this.props.clearGoals();
    }

    showGoal() {
        if (this.props.goals.length === 0) {
        return (
            <div>
            <div className="no-goals">Create a goal by clicking the button in the bottom right corner.</div>
            </div>)
        } else {
        return (
            <div className="all-goals">
                {this.props.goals.map(goal => (
                    <GoalBoxContainer key={goal._id}
                        id={goal._id}
                        goal={goal} 
                        room={this.props.room}
                        createRoom={this.props.createRoom} 
                        fetchRoom={this.props.fetchRoom}
                    />
                ))}
            </div>
        );
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/goals/new">
                        <button className="goal-btn fas fa-edit" title="create goal"></button>
                    </Link>
                </div>

                <h1 className="goal-header">Welcome {this.props.currentUser.username}</h1>

                <div>
                    <div id="goals-table" className="goal-box">
                        <div className="goal" >Goal</div>
                        <div className="category" >Category</div>
                        <div className="details">Details</div>
                        <div className="chat" >Chat</div>
                        <div className="rxn" >Daily Reactions</div>
                    </div>

                    {this.showGoal()}
                </div>

            </div>
        )
    }

}

export default withRouter(GoalList);