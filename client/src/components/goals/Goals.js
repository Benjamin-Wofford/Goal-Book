import React, { useEffect } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getGoals } from "../../actions/goal";
import Spinner from "../layout/Spinner";
import Navbar from "../dashboard/Navbar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ChatIcon from "@material-ui/icons/Chat";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import {
  Typography,
  Container,
  CssBaseline,
  makeStyles,
  Grid,
  Avatar,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "auto", 
    marginBottom: theme.spacing(3)
  },
  actionButtons: {
    marginTop: "3vh"
  },
  profileHeader: {
    textAlign: "center",
    marginBottom: 20
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const Goals = ({ getGoals, auth, goal: { goals, user, loading } }) => {
  useEffect(() => {
    getGoals();
  }, [getGoals]);

  const classes = useStyles();

  return loading ? (
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
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Container >
          <Typography variant="h2" className={classes.profileHeader}>
            Goals
          </Typography>
          {/* parent grid */}
          <Grid container spacing={4}>
            {goals.map(singleGoal => (
              <Grid
                className={classes.paper}
                key={singleGoal._id}
                spacing={1}
                container
                item
                direction="row"
                alignItems="center"
                component={Paper}
              >
                <Grid
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  xs={3}   
                >
                  <Avatar className={classes.avatar} src={singleGoal.avatar} />
                  <Typography variant="caption">
                    {singleGoal.first_name} {singleGoal.last_name}
                  </Typography>
                  <Typography variant="caption" className={classes.postedOn}>
                    Posted on{" "}
                    <Moment format="MM/DD/YYYY">{singleGoal.date}</Moment>
                  </Typography>
                </Grid>
                <Grid container item direction="column" xs={9}>
                  <Typography variant="body1">{singleGoal.text}</Typography>
                  <Grid item className={classes.actionButtons}>
                    <ThumbUpAltIcon />
                    <ThumbDownAltIcon />
                    <ChatIcon />
                    <DoneIcon />
                    <DeleteIcon />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
        </main>
    </>
  );
};

Goals.propTypes = {
  getGoals: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  auth: state.auth
});

export default connect(mapStateToProps, { getGoals })(Goals);
