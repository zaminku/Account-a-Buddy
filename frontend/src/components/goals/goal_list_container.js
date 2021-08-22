import { connect } from "react-redux";
import { fetchUserGoals, updateGoal, clearGoals } from '../../actions/goal_actions';
import GoalList from "./goal_list";

const mSTP = state => ({
    goals: Object.values(state.goals),
    currentUser: state.session.user
})

const mDTP = dispatch => ({
    fetchUserGoals: userId => dispatch(fetchUserGoals(userId)),
    updateGoal: goal => dispatch(updateGoal(goal)),
    clearGoals: () => dispatch(clearGoals())
})

export default connect(mSTP, mDTP)(GoalList);