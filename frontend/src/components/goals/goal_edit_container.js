import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import GoalEdit from "./goal_edit";
import { fetchGoal, updateGoal, fetchUserGoals } from "../../actions/goal_actions"
import { withRouter } from "react-router-dom";

console.log(GoalEdit)

const mSTP = (state, ownProps) => ({
    history: ownProps.history,
    userId: state.session.user.id,
    goalId: state.ui.modal.itemId,
    goal: state.goals[state.ui.modal.itemId],
    milestones: state.goals[state.ui.modal.itemId].milestones,
    // emotions: state.goals[state.ui.modal.itemmId].emotion
})

const mDTP = dispatch => ({
    fetchGoal: goalId => dispatch(fetchGoal(goalId)),
    fetchUserGoals: userId => dispatch(fetchUserGoals(userId)),
    updateGoal: goal => dispatch(updateGoal(goal)),
    closeModal: () => dispatch(closeModal())
}) 

export default withRouter(connect(mSTP, mDTP)(GoalEdit));