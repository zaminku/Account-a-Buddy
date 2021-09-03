import React from "react";
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
            milestones: goal.milestones,
            emotions: goal.emotions
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
        return (
            <div className="modal-milstone-list">
                {this.props.milestones.map((milestone, idx) => {
                    return (
                        <label>
                            <input 
                                className="modal-milestone"
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

    renderBreaking(){
        if (this.state.category === "breaking-habit"){
            return(
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
            </div>
            )}else{
                return(
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
                )
            }
    }

    renderMaking(){
        if (this.state.category === "making-habit"){
            return(
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
                </div>
            )
        }else{
            return(
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
            )
        }
    }

    render() {
        const { goal } = this.props;
        if (goal === undefined) {
            return null;
        }
        return (
            <div>
                <form className="pin-edit-form-modal" onSubmit={this.handleSubmit}>
                    <div className="hr-div">
                        <input
                            className='modal-title'
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Title"
                        />
                        <br></br>
                        <hr className="title-hr"></hr>
                    </div>
                    <div>
                        <div className="modal-habit-buttons">
                            {this.renderBreaking()}
                            {this.renderMaking()}
                        </div>
                    </div>
                    <div className="hr-div">
                        <div>
                            <textarea
                                className="modal-description"
                                value={this.state.description}
                                placeholder="Description"
                                onChange={this.update('description')}
                            />
                        </div>
                        <hr></hr>
                    </div>
                    <div>
                        <div className="modal-tag">Milestones</div>
                        {this.renderMilestones()}
                    </div>
                    <button className="modal-edit-button" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default GoalEdit;