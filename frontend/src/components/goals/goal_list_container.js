import { connect } from "react-redux";
import { fetchUserGoals, updateGoal, clearGoals } from '../../actions/goal_actions';
import { createRoom, deleteRoom, fetchRoom } from '../../actions/room_actions'
import GoalList from "./goal_list";

const mSTP = state => ({
    goals: Object.values(state.goals),
    currentUser: state.session.user, 
    room: state.room
})

const mDTP = dispatch => ({
    fetchUserGoals: userId => dispatch(fetchUserGoals(userId)),
    updateGoal: goal => dispatch(updateGoal(goal)),
    clearGoals: () => dispatch(clearGoals()), 
    createRoom: room => dispatch(createRoom(room)), 
    deleteRoom: roomId => dispatch(deleteRoom(roomId)), 
    fetchRoom: goalId => dispatch(fetchRoom(goalId))
})

export default connect(mSTP, mDTP)(GoalList);