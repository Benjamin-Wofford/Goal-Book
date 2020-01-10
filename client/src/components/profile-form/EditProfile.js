import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createProfile, getCurrentProfile } from "../../actions/profile";
import Navbar from "../dashboard/Navbar";
import {
  TextField,
  Button,
  makeStyles,
  Container,
  CssBaseline,
  Grid,
  Typography,
  Snackbar
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

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

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    location: "",
    aboutme: "",
    twitter: "",
    facebook: "",
    youtube: "",
    instagram: ""
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      location: loading || !profile.location ? "" : profile.location,
      aboutme: loading || !profile.aboutme ? "" : profile.aboutme,
      twitter: loading || !profile.social.twitter ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram
    });

    // When the getCurrentProfile is loading is when we want this to run
  }, [loading]);

  // destructures so we don't have to call formData.location etc.

  const { location, aboutme, twitter, facebook, youtube, instagram } = formData;

  // This onChange method stores input from the field that is
  // being typed into the state of the formData hook, char by char.

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    setOpen(true);
    e.preventDefault();
    createProfile(formData, history, true);
  };

  // Snackbar opening and closing

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h3" noWrap>
            Edit Your Profile
          </Typography>
          <form className={classes.form} onSubmit={e => onSubmit(e)}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  value={aboutme}
                  name="aboutme"
                  onChange={e => onChange(e)}
                  label="About me"
                  multiline
                  fullWidth
                  margin="normal"
                  rowsMax="4"
                  variant="outlined"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Location"
                  name="location"
                  value={location}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="none"
                  onChange={e => onChange(e)}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label="Twitter"
                  value={twitter}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="twitter"
                  autoComplete="none"
                  onChange={e => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Facebook"
                  name="facebook"
                  value={facebook}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  onChange={e => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Youtube"
                  name="youtube"
                  value={youtube}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  onChange={e => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Instagram"
                  name="instagram"
                  value={instagram}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  onChange={e => onChange(e)}
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
              Edit
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
            <Alert severity="success" onClose={handleClose}>
                Edit Successful
            </Alert>
            </Snackbar>
          </form>
        </div>
      </Container>
    </>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
