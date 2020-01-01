import React, { useState } from "react";
import GoalIcon from "../GoalIcon";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  makeStyles,
  Container,
  CssBaseline
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

const LoginBox = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <GoalIcon />
        <form noValidate className={classes.form}>
          <TextField
            onChange={e => handleOnChange(e)}
            value={email}
            id="standard-basic"
            label="Email"
            fullWidth
            variant="outlined"
            required
            margin="normal"
            autoFocus
          />

          <TextField
            onChange={e => handleOnChange(e)}
            value={password}
            id="standard-basic"
            label="Password"
            fullWidth
            variant="outlined"
            required
            margin="normal"
          />

          <Link to="/login">
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.submit}
            >
              Login
            </Button>
          </Link>
          <Link to="/Signup" style={{ textDecoration: "none" }}>
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default LoginBox;
