import { connect } from "react-redux";
import GoalBox from "./goal_box";
import { openModal } from "../../actions/modal_actions";
import { updateGoal } from "../../actions/goal_actions";

const mSTP = (state, ownProps) => ({
    
})

const mDTP = dispatch => ({
    openModal: (type, goalId) => dispatch(openModal(type, goalId)), 
    updateGoal: goal => dispatch(updateGoal(goal))
})

export default connect(mSTP, mDTP)(GoalBox)