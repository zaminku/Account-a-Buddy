import * as APIUtil from "../util/goal_api_util";

export const RECEIVE_GOALS = "RECEIVE_GOALS";
export const RECEIVE_USER_GOALS = "RECEIVE_USER_GOALS";
export const RECEIVE_GOAL = "RECEIVE_GOAL";
// export const REMOVE_GOAL = "REMOVE_GOAL";
export const CLEAR_GOALS = "CLEAR_GOALS"


const receiveGoals = goals => ({
    type: RECEIVE_GOALS,
    goals
})

const receiveUserGoals = goals => ({
    type: RECEIVE_USER_GOALS,
    goals
})

const receiveGoal = goal => ({
    type: RECEIVE_GOAL,
    goal
})

export const clearGoals = () => ({
    type: CLEAR_GOALS
})

// const removeGoal = goalId => ({
//     type: REMOVE_GOAL,
//     goalId
// })

export const fetchGoals = () => dispatch => (
    APIUtil.fetchGoals()
        .then(goals => dispatch(receiveGoals(goals)))
)

export const fetchUserGoals = userId => dispatch => (
    APIUtil.fetchUserGoals(userId)
        .then(goals => dispatch(receiveUserGoals(goals)))
)

export const fetchGoal = goalId => dispatch => (
    APIUtil.fetchGoal(goalId)
        .then(goal => dispatch(receiveGoal(goal)))
)

export const createGoal = goal => dispatch => (
    APIUtil.createGoal(goal)
        .then(goal => dispatch(receiveGoal(goal)))
)

export const updateGoal = goal => dispatch => (
    APIUtil.updateGoal(goal)
        .then(goal => dispatch(receiveGoal(goal)))
)

// export const deleteGoal = goalId => dispatch => (
//     APIUtil.deleteGoal(goalId)
//         .then(() => dispatch(removeGoal(goalId)))
// )
