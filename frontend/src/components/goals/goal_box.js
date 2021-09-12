import React from 'react';
import { Link } from 'react-router-dom';
import "./goal_list.css"
import { findGoalMatch } from "../../util/goal_api_util";
import { updateGoal } from "../../util/goal_api_util";
import "./goal_box.css";

class GoalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noMatchModal: false,
      dailyReactionModal: false
    }
    this.findBuddy = this.findBuddy.bind(this);
    this.setAvailableToFalse = this.setAvailableToFalse.bind(this);
    this.showNoMatchModal = this.showNoMatchModal.bind(this);
    this.showDailyReactionModal = this.showDailyReactionModal.bind(this);
  }

  showNoMatchModal() {
    return (
      <div className="error-modal" >
        <button onClick={() => this.setState({ noMatchModal: false })} >X</button>
        <div>
          <div>We're sorry. Currently there are no accountability</div>
          <div>partners available to be matched with you and your goal.</div>
          <div>Please try again later.</div>
        </div>
      </div>
    );
  }

  findBuddy() {
    const { goal, createRoom } = this.props
    if(goal.available) {
      findGoalMatch(goal)
      .then(goals => {
        if(goals.data.length > 0) {
          const randomEl = Math.floor(Math.random() * goals.data.length);
          const match = goals.data[randomEl];
          this.setAvailableToFalse(goal);
          this.setAvailableToFalse(match);
          return match;
        } else {
          return null;
        }
      })
      .then(match => {
        if(match !== null) {
          const newRoom = {
            user1: goal.author, 
            user2: match.author, 
            goal1: goal._id, 
            goal2: match._id
          };
          createRoom(newRoom);
        } else {
          {this.setState({noMatchModal: true})}
        }
      })
    } else {
      console.log("This goal is currently not available to be matched with an accountability partner.");
    }
  }

  setAvailableToFalse(goal) {
    let newGoal = Object.assign({}, goal);
    newGoal.available = false;
    goal._id === this.props.goal._id ? 
      this.props.updateGoal(newGoal) : 
      updateGoal(newGoal);
  }

  showDailyReactionModal() {
    return (
      <div className="error-modal" >
        <div>
          <button onClick={() => this.setState({ dailyReactionModal: false })} >X</button>
        </div>
        <div>
          <div>You have already reacted to this goal today.</div>
          <div>Please try again tomorrow.</div>
        </div>
      </div>
    );
  }

  incrementCounter(key) {
    let newGoal = this.props.goal;
    const today = this.currentDate()
    console.log(newGoal.dailyEmoji)
    if (newGoal.dailyEmoji !== today){
      newGoal.dailyEmoji = today
      newGoal.emotions[key]++;
      this.props.updateGoal(newGoal);
    }else{
      {this.setState({dailyReactionModal: true})}
    }
  }

  currentDate(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDate()
    const current = `${month}/${day}`
    return current
  }

  showEmojis() {
    if(this.props.goal.emotions) {
      const { sad, happy, anxious, neutral, angry } = this.props.goal.emotions;

      return(
        <ul className="emoji-list">

          <li>
            <img className="emoji" src="../emoticons/happy.png" onClick={() => this.incrementCounter("happy")} alt="happy"/>
            <div className='emotion-value'>
              {happy}
            </div>
          </li>

          <li>
            <img className="emoji" src="../emoticons/anxious.png" onClick={() => this.incrementCounter("anxious")} alt="anxious"/>
            <div className='emotion-value'>
              {anxious}
            </div>
          </li>

          <li>
            <img className="emoji" src="../emoticons/neutral.png" onClick={() => this.incrementCounter("neutral")} alt="neutral" />
            <div className='emotion-value'>
              {neutral}
            </div>
          </li>

          <li>
            <img className="emoji" src="../emoticons/sad.png" onClick={() => this.incrementCounter("sad")} alt="sad" />
            <div className='emotion-value'>
              {sad}
            </div>
          </li>

          <li>
            <img className="emoji" src="../emoticons/angry.png" onClick={() => this.incrementCounter("angry")} alt="angry" />
            <div className='emotion-value'>
              {angry}
            </div>
          </li>

        </ul>
      ); 
    }
  }  

  render() {
    const { openModal, goal } = this.props;
    return (
      <div className="goal-box">
        <div className="box-title">{goal.title}</div>
        <div className="box-category">{goal.category}</div>
        <button id="edit-btn" onClick={() => openModal('goal-edit', this.props.id)}>Show Details</button>        
        {goal.available ? 
          <button onClick={this.findBuddy} id="buddy-btn" >Find a buddy</button> : 
          <Link to={`/chat/${goal._id}`} ><button id="buddy-btn">Chat</button></Link>}
        <div>{this.showEmojis()}</div>
        {this.state.noMatchModal ? this.showNoMatchModal() : null}
        {this.state.dailyReactionModal ? this.showDailyReactionModal() : null}
      </div>
    )
  }
}

export default GoalBox;