import axios from "axios";
import { GET_GOALS, GOAL_ERROR, UPDATE_LIKES } from "./types";

// Get goals

export const getGoals = () => async dispatch => {
  try {
    const res = await axios.get("/api/goal/goalfeed");

    dispatch({
      type: GET_GOALS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GOAL_ERROR,
      payload: { msg: error.response }
    });
  }
};

// Add like

export const addLike = goalId => async dispatch => {
  try {
    const res = await axios.put(`/api/goal/like/${goalId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { goalId, likes: res.data }
    });
  } catch (error) {
    dispatch({
      type: GOAL_ERROR,
      payload: { msg: error.response }
    });
  }
};

// Remove like

export const removeLike = goalId => async dispatch => {
  try {
    
    const res = await axios.put(`/api/goal/unlike/${goalId}`);
    
    dispatch({
      type: UPDATE_LIKES,
      payload: { goalId, likes: res.data }
    });
  } catch (error) {
    dispatch({
      type: GOAL_ERROR,
      payload: { msg: error.response }
    });
  }
};
