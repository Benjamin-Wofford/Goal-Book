import React, { useState } from "react";
import GoalIcon from "../GoalIcon";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
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

const LoginBox = props => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    props.login(email, password);
  };

  // Redirect if logged in
  if (props.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <GoalIcon />
        <form noValidate className={classes.form} onSubmit={e => onSubmit(e)}>
          <TextField
            name="email"
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
            name="password"
            onChange={e => handleOnChange(e)}
            value={password}
            id="standard-basic"
            label="Password"
            fullWidth
            variant="outlined"
            required
            margin="normal"
            type="password"
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            className={classes.submit}
            type="submit"
          >
            Login
          </Button>

          <Link to="/Signup" style={{ textDecoration: "none" }}>
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </Container>
  );
};

LoginBox.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginBox);
