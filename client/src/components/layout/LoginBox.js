import React from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
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
  }
}));

const LoginBox = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.goalBook} variant="h3">
          Goal
        </Typography>
        <Typography className={classes.goalBook} variant="h1">
          Book
        </Typography>
        <Typography variant="h6">Login</Typography>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Email"
            fullWidth
            variant="outlined"
            required
            margin="normal"
            autoFocus
          />

          <TextField
            id="standard-basic"
            label="Password"
            fullWidth
            variant="outlined"
            required
            margin="normal"
          />

          <Link to='/login'>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.submit}
            >
              Login
            </Button>
          </Link>
          <Link to='/Signup' style={{textDecoration: 'none'}}>
          Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default LoginBox;
