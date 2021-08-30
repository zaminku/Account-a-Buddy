import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./goal_edit.css"


class GoalEdit extends React.Component {
    constructor(props) {
        super(props);
        const goal = this.props.goal;
        this.state = {
            id: this.props.goalId,
            title: goal.title,
            description: goal.description,
            category: goal.category
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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
        // this.props.updatePin(this.state)
            // .then(() => this.props.closeModal())
    }

    render() {
        const { closeModal, pin } = this.props;
        // if (goal === undefined) {
        //     return null;
        // }

        return (
            <div>
                <form className="pin-edit-form-modal" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}

export default GoalEdit;