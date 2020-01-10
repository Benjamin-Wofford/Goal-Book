import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createProfile } from "../../actions/profile";
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
    aboutme: "",
    twitter: "",
    facebook: "",
    youtube: "",
    instagram: ""
  });

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
        e.preventDefault()
        props.createProfile(formData, props.history)
    }
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h3" noWrap>
            Create Your Profile
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
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
