import { connect } from "react-redux";
import GoalBox from "./goal_box";
import { openModal } from "../../actions/modal_actions";

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (type, goalId) => dispatch(openModal(type, goalId))
})

export default connect(null, mDTP)(GoalBox)