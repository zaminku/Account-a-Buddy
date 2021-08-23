import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import GoalEdit from "./goal_edit";

const mSTP = (state, ownProps) => ({
    history: ownProps.history
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(GoalEdit)