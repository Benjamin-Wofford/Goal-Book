import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// Register user

export const register = ({
  first_name,
  last_name,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ first_name, last_name, email, password });

  try {
    const res = await axios.post("/api/users/signup", body, config);
    console.log('I\'m being ran in the try block')
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

  } catch (error) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
