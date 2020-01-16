import { GET_GOALS, GOAL_ERROR, UPDATE_LIKES, DELETE_GOAL, ADD_GOAL } from "../actions/types";

const initialState = {
  goals: [],
  goal: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GOALS:
      return {
        ...state,
        goals: payload,
        loading: false
      };
      case ADD_GOAL: 
      return {
          ...state, 
          goals: [...state.goals, payload], 
          loading: false
      }
      case DELETE_GOAL: 
      return {
          ...state, 
          goals: state.goals.filter(goal => goal._id !== payload), 
          loading: false
      }
    case GOAL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        goals: state.goals.map(goal =>
          console.log("goal id", goal._id) === console.log("payload id", payload.goalId) ? { ...goal, likes: payload.likes } : goal
        ), 
        loading: false
      };
    default:
      return state;
  }
}
