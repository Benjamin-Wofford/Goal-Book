import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Navbar from "../dashboard/Navbar";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  Container,
  CssBaseline,
  makeStyles,
  Card,
  Avatar,
  CardContent,
  Typography
} from "@material-ui/core";
import { getProfileById } from "../../actions/profile";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  card: {
    // marginTop: 20,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "25vw",
    paddingRight: "25vw",
    paddingBottom: "6.5vh"
  },
  cardContent: {
    flexGrow: 1
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    marginTop: "3vh"
  },
  editButton: {
    marginTop: "1.5vh"
  },
  motto: {
    marginTop: 10,
    textAlign: "center"
  },
  firstName: {
    textAlign: "center"
  },
  goalsCompleted: {
    textAlign: "center"
  },
  location: {
    textAlign: "center"
  },
  socialMedias: {
    display: "flex"
  },
  fb: {
    color: "#3b5998"
  },
  twitter: {
    color: "#00acee"
  },
  instagram: {
    color: "#8a3ab9"
  },
  youtube: {
    color: "#c4302b"
  }
}));

const Profile = ({ match, getProfileById, profile: { profile, loading } }) => {
  const classes = useStyles();

  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <>
      {profile === null || loading ? (
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
        // The loaded profile will go here

        <>
          <Navbar />

          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Card className={classes.card}>
                <Avatar
                  alt="Profile Image"
                  src={profile.user.avatar}
                  className={classes.avatar}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    className={classes.firstName}
                    noWrap
                    gutterBottom
                    variant="h3"
                    component="h2"
                  >
                    {profile.user.first_name}'s Profile
                  </Typography>
                  <Typography
                    className={classes.goalsCompleted}
                    noWrap
                    gutterBottom
                    variant="h4"
                    component="h2"
                  >
                    Goals compleredted {profile.goalsCompleted}
                  </Typography>
                  <Typography
                    className={classes.location}
                    noWrap
                    gutterBottom
                    variant="h6"
                    component="h2"
                  >
                    {profile.location}
                  </Typography>
                  <Typography className={classes.motto}>
                    {profile.aboutme}
                  </Typography>
                </CardContent>

                <div className={classes.socialMedias}>
                  {profile.social && profile.social.twitter && (
                    <a
                      href={profile.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.twitter}
                    >
                      <TwitterIcon />
                    </a>
                  )}

                  {profile.social && profile.social.facebook && (
                    <a
                      href={profile.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.fb}
                    >
                      <FacebookIcon />
                    </a>
                  )}

                  {profile.social && profile.social.youtube && (
                    <a
                      href={profile.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.youtube}
                    >
                      <YouTubeIcon />
                    </a>
                  )}

                  {profile.social && profile.social.instagram && (
                    <a
                      href={profile.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.instagram}
                    >
                      <InstagramIcon />
                    </a>
                  )}
                </div>
              </Card>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
