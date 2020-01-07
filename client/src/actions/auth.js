import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR } from "./types";
import setAuthToken from '../utils/setAuthToken'

// Load user

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/api/auth')

        dispatch({
            type: USER_LOADED, 
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}









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
