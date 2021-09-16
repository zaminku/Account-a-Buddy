import { RECEIVE_PARTNER } from '../actions/user_actions'

const defaultPartner = {
    _id: "",
    username: "", 
    email: "" 
}

const partnerReducer = (oldSlice = defaultPartner, action) => {
    Object.freeze(oldSlice) 
    
    switch(action.type) {
        case RECEIVE_PARTNER:
            let partner = {};
            partner._id = action.partner._id;
            partner.username = action.partner.username;
            partner.email = action.partner.email;
            return partner
        default:
            return oldSlice 
    }
}

export default partnerReducer;