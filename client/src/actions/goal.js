import axios from "axios";
import { GET_GOALS, GOAL_ERROR, UPDATE_LIKES, DELETE_GOAL, ADD_GOAL } from "./types";

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

// Delete goal

export const deleteGoal = goalId => async dispatch => {
  try {
    
     await axios.delete(`/api/goal/${goalId}`);
    
    dispatch({
      type: DELETE_GOAL,
      payload: goalId
    });
  } catch (error) {
    dispatch({
      type: GOAL_ERROR,
      payload: { msg: error.response }
    });
  }
};

// Add goal

export const addGoal = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    
    const res = await axios.post(`/api/goal`, formData, config);
    
    dispatch({
      type: ADD_GOAL,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GOAL_ERROR,
      payload: { msg: error.response }
    });
  }
};

