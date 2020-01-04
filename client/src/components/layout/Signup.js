import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GoalIcon from "../GoalIcon";
import {
  TextField,
  Button,
  makeStyles,
  Container,
  CssBaseline,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  goalBook: {
    fontWeight: "500",
    fontFamily: "Ma Shan Zheng",
    color: "#424242"
  },
  submit: {
    margin: theme.spacing(2, 0, 2)
  },
  form: {
    marginTop: theme.spacing(5)
  }
}));

const Signup = () => {
  const classes = useStyles();

  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
  };

  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "register_success":
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case "register_fail":
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false
        };
      default:
        return state;
    }
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const handleOnChange = e => {
    if (formData.error) {
      setFormData({ ...formData, error: false });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const [userState, dispatch] = useReducer(reducer, initialState);
  
  const handleOnSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      return setFormData({ ...formData, error: true });
    } else {
      const register = async ({ first_name, last_name, email, password }) => {
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
      register({first_name, last_name, email, password})
    }

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <GoalIcon />
        <form className={classes.form} onSubmit={e => handleOnSubmit(e)}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="first_name"
                value={first_name}
                onChange={e => handleOnChange(e)}
                label="First Name"
                fullWidth
                variant="outlined"
                required
                margin="normal"
                autoComplete="none"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="last_name"
                value={last_name}
                onChange={e => handleOnChange(e)}
                fullWidth
                variant="outlined"
                required
                margin="normal"
                autoComplete="none"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                required
                margin="normal"
                name="email"
                value={email}
                onChange={e => handleOnChange(e)}
                autoComplete="none"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formData.error}
                label="Password"
                name="password"
                value={password}
                type="password"
                onChange={e => handleOnChange(e)}
                fullWidth
                variant="outlined"
                required
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formData.error}
                helperText={formData.error ? "Passwords do not match" : null}
                type="password"
                label="Confirm Password"
                fullWidth
                variant="outlined"
                required
                margin="normal"
                name="password2"
                value={password2}
                onChange={e => handleOnChange(e)}
              />
            </Grid>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            Already have an account? Login
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
