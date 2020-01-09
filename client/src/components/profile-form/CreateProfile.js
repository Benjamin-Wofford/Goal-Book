import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "../dashboard/Navbar";
import {
  TextField,
  Button,
  makeStyles,
  Container,
  CssBaseline,
  Grid,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(2, 0, 2)
  },
  form: {
    marginTop: theme.spacing(5)
  }
}));

const CreateProfile = props => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    location: "",
    status: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  // destructures so we don't have to call formData.location etc.

  const {
    location,
    status,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h3" noWrap>
            Create Your Profile
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="About me"
                multiline
                fullWidth
                rowsMax="4"
                variant="outlined"
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="first_name"
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
                  autoComplete="none"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={formData.error}
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
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
          </form>
        </div>
      </Container>
    </>
  );
};

CreateProfile.propTypes = {};

export default connect()(CreateProfile);
