import axios from 'axios';

export const fetchGoals = () => (
  axios.get(`/api/goals/`)
);

export const fetchUserGoals = userId => (
  axios.get(`/api/goals/list/${userId}`)
);

export const fetchGoal = goalId => (
  axios.get(`/api/goals/goal/${goalId}`)
);

// TEST CODE =================================
export const findGoalMatch = goal => (
  axios.get(`/api/goals/match/${goal.author}/${goal.category}`, goal)
);
// ===========================================

export const createGoal = newGoal => (
  axios.post(`/api/goals/`, newGoal)
);

export const updateGoal = goal => (
  axios.patch(`/api/goals/${goal._id}`, goal)
);

// export const deleteGoal = goalId => (
//   axios.delete(`/api/goals/${goalId}`)
// );