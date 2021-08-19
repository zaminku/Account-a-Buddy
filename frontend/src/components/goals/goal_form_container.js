import { connect } from "react-redux";
import GoalForm from "./goal_form";
import { createGoal } from "../../actions/goal_actions"
import { withRouter } from "react-router";

const mSTP = state => ({
    currentUser: state.session.user,

})

const mDTP = dispatch => ({
    createGoal: goal => dispatch(createGoal(goal))
})

export default withRouter(connect(mSTP, mDTP)(GoalForm));