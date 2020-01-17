import {
  GET_GOALS,
  GET_GOAL,
  GOAL_ERROR,
  UPDATE_LIKES,
  DELETE_GOAL,
  ADD_GOAL,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types";

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
    case GET_GOAL:
      return {
        ...state,
        goal: payload,
        loading: false
      };
    case ADD_GOAL:
      return {
        ...state,
        goals: [payload, ...state.goals],
        loading: false
      };
    case DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(goal => goal._id !== payload),
        loading: false
      };
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
          goal._id === payload.goalId ? { ...goal, likes: payload.likes } : goal
        ),
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        goal: { ...state.goal, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        goal: {
          ...state.goal,
          comments: state.goal.comments.filter(
            comment => comment._id !== payload
          ), 
          loading: false
        }
      };
    default:
      return state;
  }
}
