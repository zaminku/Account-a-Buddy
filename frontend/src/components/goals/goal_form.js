import React from "react";


class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: null, 
            // TEST CODE =============================
            available: false
            // =======================================
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createGoal(this.state)
            .then(() => {
                this.props.history.push('/goals');
            })
    }

    renderErrors(e) {
        (this.props.errors.length > 0) ? (
            <div>this.props.errors</div>
        ) : (<div></div>)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Goal type:
                        <br />
                        <input 
                            type="radio" 
                            name="goal-type" 
                            value="breaking-habit"
                            onChange={this.update('category')}
                        />
                        <label for="goal-type-1">Breaking a Habit</label>
                        <br />
                        <input 
                            type="radio" 
                            name="goal-type" 
                            value="making-habit" 
                            onChange={this.update('category')}
                        />
                        <label for="goal-type-1">Making a Habit</label>
                    </label>
                    <br />
                    <label>Title
                        <input 
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <br />
                    <label>Description
                        <input 
                            type="text"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default GoalForm;