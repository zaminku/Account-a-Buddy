import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import GoalEdit from "./goal_edit";
import { fetchGoal, updateGoal, fetchUserGoals } from "../../actions/goal_actions"

const mSTP = (state, ownProps) => ({
    history: ownProps.history,
    userId: state.session.user.id
})

const mDTP = dispatch => ({
    fetchGoal: goalId => dispatch(fetchGoal(goalId)),
    fetchUserGoals: userId => dispatch(fetchUserGoals(userId)),
    updateGoal: goal => dispatch(updateGoal(goal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(GoalEdit)