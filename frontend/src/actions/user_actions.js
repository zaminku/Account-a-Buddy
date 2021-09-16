import * as UserApiUtil from "../util/user_api_util"

export const RECEIVE_PARTNER = "RECEIVE_PARTNER"
const receivePartner = partner => ({
    type: RECEIVE_PARTNER, 
    partner
})
export const fetchPartner = (partnerId, dispatch) => (
    UserApiUtil.fetchUser(partnerId)
        .then(res => dispatch(receivePartner(res.data)))
)