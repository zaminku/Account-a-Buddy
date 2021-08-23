// import React from 'react';
// import { withRouter, Link } from 'react-router-dom';
// import GoalBox from './goal_box';
// import "./goal_index.css"

// class Goal extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   goals: []
//     // }

//     this.showGoal = this.showGoal.bind(this);
//   }

//   componentWillMount() {
//     this.props.fetchUserGoals(this.props.currentUser.id);
//   }

//   componentWillUnmount() {
//     this.props.clearGoals();
//   }

//   // componentWillReceiveProps(newState) {
//   //   this.setState({ goals: newState.goals });
//   // }

<<<<<<< HEAD
  showGoal() {
    if (this.props.goals.length === 0) {
      return (
        <div>
          <div className="no-goals">No goals have been written yet.</div>
        </div>)
    } else {
      return (
        <div>
          <h1 className="goals-title">All Goals</h1>
            <div className="goal-index-cont">
              {this.props.goals.map(goal => {
                  return (
                    <GoalBox 
                      key={goal._id} 
                      goal={goal} 
                      room={this.props.room}
                      updateGoal={this.props.updateGoal}
                      createRoom={this.props.createRoom} 
                      fetchRoom={this.props.fetchRoom}
                    />);
                })
              }
            </div>
        </div>
      );
    }
  }
=======
//   showGoal() {
//     if (this.props.goals.length === 0) {
//       return (
//         <div>
//           <div className="no-goals">No goals have been written yet.</div>
//         </div>)
//     } else {
//       return (
//         <div>
//           <h1 className="goals-title">All Goals</h1>
//             <div className="goal-index-cont">
//               {this.props.goals.map(goal => (
//                 <GoalBox key={goal._id} title={goal.title} description={goal.description}/>
//               ))}
//             </div>
//         </div>
//       );
//     }
//   }
>>>>>>> main

//   render() {
//     return (
//       <div>
//         <div>
//           {this.showGoal()}
//         </div>

//         <Link to="/goals/new">
//           <button className="goal-btn">Create a goal</button>
//         </Link>

//       </div>
//     )
//   }
// }

// export default withRouter(Goal);