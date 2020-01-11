import React, { useEffect } from "react";
import Navbar from "./Navbar";
import GoalIcon from "../GoalIcon";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import {
  Typography,
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
  submit: {
    margin: theme.spacing(2, 0, 2)
  },
  form: {
    marginTop: theme.spacing(5)
  }
}));

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {

    setTimeout(() => {
      getCurrentProfile();
    }, 500)
    
  }, [getCurrentProfile]);

  const classes = useStyles();

  // If there is no profile, then show a loading spinner

  return loading && profile === null ? (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Spinner />
        </div>
      </Container>
    </>
  ) : (
    // If there is a profile, then display dashboard actions.

    <>
      {profile !== null ? (
        <>
          <Navbar />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography variant="h5">{user && user.first_name}'s</Typography>
              <Typography variant="h1"> Dashboard </Typography>
              <GoalIcon />
              <DashboardActions />
            </div>
          </Container>
        </>
      ) : (
        // If there is not a profile, display the option to create a profile

        <>
          <Navbar />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography variant="h5">{user && user.first_name}'s</Typography>
              <Typography variant="h1"> Dashboard</Typography>
              <GoalIcon />
              <form noValidate className={classes.form}>
                <Button
                  href="/create-profile"
                  color="primary"
                  variant="contained"
                  fullWidth
                  className={classes.submit}
                  type="submit"
                >
                  Create Profile
                </Button>
              </form>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
