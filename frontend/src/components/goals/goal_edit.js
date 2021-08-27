import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./goal_edit.css"


class GoalEdit extends React.Component {
    constructor(props) {
        super(props);
        // const pin = this.props.pin
        // this.state = {
        //     id: this.props.pinId,
        //     title: pin.title,
        //     description: pin.description,
        //     pinUrl: pin.pinUrl
        // }

        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

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
        this.props.updatePin(this.state)
            .then(() => this.props.closeModal())
    }

    render() {
        const { closeModal, pin } = this.props;
        if (pin === undefined) {
            return null;
        }

        return (
            <div>
                <form className="pin-edit-form-modal" onSubmit={this.handleSubmit}>
                    <input></input>
                </form>
            </div>
        )
    }
}

export default withRouter(GoalEdit);