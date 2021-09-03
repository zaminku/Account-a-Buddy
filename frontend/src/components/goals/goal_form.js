import React from "react";
import "./goal_form.css"
// import Milestone from "./milestone";

class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: null, 
            milestoneArray: [],
            milestoneInput: "",
            // TEST CODE =============================
            available: true, 
            emotions: {
                sad: 0, 
                happy: 0, 
                neutral: 0, 
                anxious: 0,
                angry: 0 
            }
            // =======================================
        }
        this.addMilestone = this.addMilestone.bind(this);
        this.submitMilestone = this.submitMilestone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    addMilestone(e) {
        this.setState({
            milestoneInput: e.target.value,
        })
    }

    submitMilestone(e) {
        e.preventDefault();
        let newArray = this.state.milestoneArray;
        let milestone = {
            milestone: this.state.milestoneInput,
            milestoneCompleted: false
        }
        newArray.push(milestone);

        this.setState({
            milestoneArray: newArray,
            milestoneInput: "",
        });
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("submit was pressed")
        console.log(this.props)
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
            <div className="goal-form">
                <form className="goal-form-box" onSubmit={this.handleSubmit}>
                    <h1 className="goal-form-title">Create a Goal</h1>
                    <label className="goal-type">What kind of habit are you trying to work on?</label>
                        <br />
                        <div>
                            <input 
                                type="radio" 
                                name="goal-type"
                                className="goal-form-radio" 
                                value="breaking-habit"
                                onChange={this.update('category')}
                            />
                            <label for="goal-type-1" className="goal-form-radio-label">Breaking Habit</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="goal-type"
                                className="goal-form-radio" 
                                value="making-habit" 
                                onChange={this.update('category')}
                            />
                        <label for="goal-type-1" className="goal-form-radio-label">Making Habit</label>
                        </div>
                    <br />
                    <div>
                        <input 
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            className="goal-form-text-input"
                            onChange={this.update('title')}
                        />
                    </div>
                    <div>

                        <textarea 
                            placeholder="Description"
                            value={this.state.description}
                            className="goal-form-text-input"
                            onChange={this.update('description')}
                        />
                    </div>


                    <div>
                        <ul>{this.state.milestoneArray.map((milestone, idx) => {
                            return (
                                <li key={idx}>{milestone.milestone}</li>
                                )
                            })}
                        </ul>

                        <input className="milestone-input"
                                placeholder="Milestone"
                                // onChange={this.update('this.state.milestoneinput')}
                                value={this.state.milestoneInput}
                                onChange={this.addMilestone}
                        />

                        <button className="plus-sign" onClick={this.submitMilestone}>+</button>
                    </div>
                    

                    <br />
                    <div className="goal-form-submit-div">
                        <input className="goal-form-submit" type="submit" value="Create"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default GoalForm;