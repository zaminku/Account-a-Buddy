import { connect } from "react-redux";
import GoalBox from "./goal_box";
import { openModal } from "../../actions/modal_actions";

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (type) => dispatch(openModal(type))
})

export default connect(null, mDTP)(GoalBox)