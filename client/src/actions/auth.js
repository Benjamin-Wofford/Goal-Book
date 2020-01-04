import axios from "axios";

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
  console.log("Action is being called");
  try {
    const res = await axios.post("/api/users/signup", body, config);

    dispatch({
      type: "register_success",
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: "register_fail"
    });
  }
};
