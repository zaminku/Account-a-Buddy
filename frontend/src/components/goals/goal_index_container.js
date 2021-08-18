import { connect } from "react-redux";
import { fetchUserGoal } from '../../actions/goal_actions';
import GoalIndex from "./goal_index";

const mSTP = state => ({
    goals: Object.values(state.goals.user),
    currentUser: state.session.user
})

const mDTP = dispatch => ({
    fetchUserGoal: userId => dispatch(fetchUserGoal(userId))
})

export default connect(mSTP, mDTP)(GoalIndex);