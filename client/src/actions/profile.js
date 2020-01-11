import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, DELETE_ACCOUNT } from "./types";

// Get current users profile

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// export Create or update profile

// The formData parameter comes from the state of the form based
// off of the onChange method of each text field. The history object
// has a method called push which will redirect us to a client side route
// the edit parameter will let us know whether or not were currently editing
// the profile

export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/profile", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    // Redirects the user to dash board if creating profile
    // Allows you to redirect from an action

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Delete account and profile

export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
       await axios.delete("api/profile");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: DELETE_ACCOUNT });

    } catch (error) {
      dispatch({
        type: PROFILE_ERROR, 
        payload: { msg: error.response.statusText, status: error.response.status}
      })
    }
  }
};
