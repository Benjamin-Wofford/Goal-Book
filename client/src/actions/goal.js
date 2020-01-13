import axios from "axios";
import { GET_GOALS, GOAL_ERROR } from "./types";

// Get goals

export const getGoals = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_GOALS,
      payload: res.data
    });
  } catch (error) {
      dispatch({
          type: GOAL_ERROR, 
          payload: { msg: error.response.statusText, status: error.response.status}
      })
  }
};
