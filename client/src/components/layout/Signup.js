import React from "react";
import { Link } from "react-router-dom";
import GoalIcon from './GoalIcon'
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
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <GoalIcon/>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
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
             
              autoComplete="none"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              required
              margin="normal"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              fullWidth
              variant="outlined"
              required
              margin="normal"
            />
            </Grid>
          </Grid>
          <Link to="/login">
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.submit}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            Already have an account? Login
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
