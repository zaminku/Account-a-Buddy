import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./goal_edit.css"


class GoalEdit extends React.Component {
    constructor(props) {
        super(props);
        const goal = this.props.goal;
        this.state = {
            _id: this.props.goalId,
            title: goal.title,
            description: goal.description,
            category: goal.category,
            milestones: goal.milestones
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderMilestones = this.renderMilestones.bind(this);
    }

    componentDidMount() {
        this.props.fetchGoal(this.props.goalId);
    }

    componentWillUnmount() {
        this.props.closeModal();
        this.props.fetchUserGoals(this.props.userId);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateGoal(this.state)
            .then(() => this.props.closeModal())
    }

    updateMilestone(idx) {
        let newMilestones = this.state.milestones;


        if (newMilestones[idx].milestoneCompleted) {
            newMilestones[idx].milestoneCompleted = false;
        } else {
            newMilestones[idx].milestoneCompleted = true;
        }

        this.setState({milestones: newMilestones})
    }

    renderMilestones() {
        console.log(this.state)
        return (
            <div>
                {this.props.milestones.map((milestone, idx) => {
                    return (
                        <label>
                            <input 
                                type="checkbox"
                                onChange = {event => this.updateMilestone(idx)}
                                checked = {this.state.milestones[idx].milestoneCompleted}
                            />
                            {milestone.milestone}
                        </label>
                    )
                })}
            </div>
        )
    }

    render() {
        const { closeModal, goal, milestones } = this.props;
        if (goal === undefined) {
            return null;
        }

        return (
            <div>
                <form className="pin-edit-form-modal" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                    />
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.update('description')}
                    />
                    
                    {/* <label>What kind of habit are you trying to work on?</label>
                    <br /> */}
                    {/* <div>
                        {(this.state.category === "breaking-habit") ? 
                        <div> 
                            <input
                                type="radio"
                                name="goal-type"
                                className="goal-form-radio"
                                value="breaking-habit"
                                onChange={this.update('category')}
                                checked
                            />
                            <label for="goal-type-1" className="goal-form-radio-label">Breaking a Habit</label>
                        </div> : 
                        <div>
                            <input
                                type="radio"
                                name="goal-type"
                                className="goal-form-radio"
                                value="breaking-habit"
                                onChange={this.update('category')}
                            />
                            <label for="goal-type-1" className="goal-form-radio-label">Breaking a Habit</label>
                        </div>
                        }
                        
                    </div>
                    <div>
                        {(this.state.category === "making-habit") ?
                        <div>
                            <input
                                type="radio"
                                name="goal-type"
                                className="goal-form-radio"
                                value="making-habit"
                                onChange={this.update('category')}
                                checked
                            />
                            <label for="goal-type-1" className="goal-form-radio-label">Making a Habit</label>
                        </div> : 
                        <div>
                            <input
                                type="radio"
                                name="goal-type"
                                className="goal-form-radio"
                                value="making-habit"
                                onChange={this.update('category')}
                            />
                            <label for="goal-type-1" className="goal-form-radio-label">Making a Habit</label>
                        </div>
                        }   
                    </div> */}



                    {this.renderMilestones()}
                    <button type="submit">Edit Goal</button>
                </form>
            </div>
        )
    }
}

export default GoalEdit;