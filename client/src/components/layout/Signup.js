import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoalIcon from "../GoalIcon";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from 'prop-types'
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

const Signup = ({ setAlert }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit =  e => {
    e.preventDefault();
    if(password !== password2) return setFormData({error: true})
    return console.log('success')
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
                helperText={ formData.error ? 'Passwords do not match' : null}
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

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Signup);
