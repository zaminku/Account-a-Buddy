<<<<<<< HEAD
import { connect } from "react-redux";
import { fetchUserGoals, clearGoals, updateGoal } from '../../actions/goal_actions';
import GoalIndex from "./goal_index";
import { createRoom, deleteRoom, fetchRoom } from '../../actions/room_actions'

const mSTP = state => ({
    goals: Object.values(state.goals),
    currentUser: state.session.user, 

    // TEST CODE =====================================
    room: state.room
    // ===============================================
})

const mDTP = dispatch => ({
    fetchUserGoals: userId => dispatch(fetchUserGoals(userId)),
    clearGoals: () => dispatch(clearGoals()), 

    // TEST CODE =====================================
    updateGoal: goal => dispatch(updateGoal(goal)), 
    createRoom: room => dispatch(createRoom(room)), 
    deleteRoom: roomId => dispatch(deleteRoom(roomId)), 
    fetchRoom: goalId => dispatch(fetchRoom(goalId))
    // ===============================================
})
=======
// import { connect } from "react-redux";
// import { fetchUserGoals, clearGoals } from '../../actions/goal_actions';
// import GoalIndex from "./goal_index";

// const mSTP = state => ({
//     goals: Object.values(state.goals),
//     currentUser: state.session.user
// })

// const mDTP = dispatch => ({
//     fetchUserGoals: userId => dispatch(fetchUserGoals(userId)),
//     clearGoals: () => dispatch(clearGoals())
// })
>>>>>>> main

// export default connect(mSTP, mDTP)(GoalIndex);