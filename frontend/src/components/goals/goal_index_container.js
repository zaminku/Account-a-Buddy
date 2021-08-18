import { connect } from "react-redux";
import { fetchGoals } from '../../actions/goal_actions';
import GoalIndex from "./goal_index";

const mSTP = state => ({
    goals: Object.values(state.goals.all) //change .all
})

const mDTP = dispatch => ({
    fetchGoals: () => dispatch(fetchGoals());
})

export default connect(mSTP, mDTP)(GoalIndex);