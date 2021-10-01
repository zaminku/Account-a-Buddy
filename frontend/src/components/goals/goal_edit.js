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
            emotions: goal.emotions, 
            available: goal.available
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderMilestones = this.renderMilestones.bind(this);
        this.handleRemoveMilestone = this.handleRemoveMilestone.bind(this);
        this.handleAddMilestone = this.handleAddMilestone.bind(this);
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

    updateMilestoneText(idx, event) {
        let newMilestones = this.state.milestones;
        newMilestones[idx].milestone = event.currentTarget.value;
        this.setState({ milestones: newMilestones });
    }

    handleRemoveMilestone(idx, event) {
        event.preventDefault();
        let newMilestones = this.state.milestones;
        newMilestones.splice(idx, 1);
        this.setState({ milestones: newMilestones })
    }

    handleAddMilestone() {
        let newMilestones = this.state.milestones;
        const defaultMilestone = {
            milestone: "", 
            milestoneCompleted: false
        }
        newMilestones.push(defaultMilestone);
        this.setState({ milestones: newMilestones })
    }

    renderMilestones() {
        return (
            <div className="modal-milestone-list">
                {this.state.milestones.map((milestone, idx) => {
                    return (
                        <div>
                            <input 
                                className="modal-milestone"
                                type="checkbox"
                                onClick = {event => this.updateMilestone(idx)}
                                checked = {this.state.milestones[idx].milestoneCompleted}
                            />
                            <input
                                type="text"
                                value={milestone.milestone}
                                onChange={event => this.updateMilestoneText(idx, event)}
                                placeholder="add a milestone"
                                className="milestone-input-box"
                            />
                            <button className="far fa-trash-alt" onClick={event => this.handleRemoveMilestone(idx, event)} />
                        </div>
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
                    </div>

                    <ul id="habit-container">
                        <li>
                            {this.renderBreaking()}
                        </li>
                        <li>
                            {this.renderMaking()}
                        </li>
                    </ul>

                    <div>
                        <div className="modal-tag">
                            MILESTONES
                            <i className="far fa-plus-square" onClick={this.handleAddMilestone} />
                        </div>
                        
                        {this.renderMilestones()}
                    </div>
                    <button className="modal-edit-button" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default GoalEdit;