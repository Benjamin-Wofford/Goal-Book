import React, { useEffect } from "react";
import Spinner from "../components/layout/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../actions/profile";
import Navbar from "../components/dashboard/Navbar";
import {
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
  Button,
  makeStyles,
  Container,
  Avatar
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  cardContent: {
    flexGrow: 1
  },
  profileHeader: {
    textAlign: "center",
    marginBottom: 10
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: 10
  },
  name: {
    textAlign: "center"
  },
  goalsCompleted: {
    textAlign: "center"
  }
}));

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  const classes = useStyles();

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <main>
            <Container className={classes.cardGrid} maxWidth="md">
              <Typography className={classes.profileHeader} variant="h2">
                Profiles
              </Typography>
              <Grid container spacing={4}>
                {profiles.map(profile => (
                  <Grid item key={profile._id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <Avatar
                        alt="Profile Image"
                        src={profile.user.avatar}
                        className={classes.avatar}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography className={classes.name} variant="h6">
                          {profile.user.first_name} {profile.user.last_name}
                        </Typography>
                        <Typography className={classes.goalsCompleted} gutterBottom variant="subtitle1" component="h2">
                          Goals completed {profile.goalsCompleted}
                        </Typography>
                        <Typography>{profile.aboutme}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          href={`/profile/user/${profile.user._id}`}
                          size="small"
                          color="primary"
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </React.Fragment>
      )}
    </>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
