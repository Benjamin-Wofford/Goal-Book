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
  Card,
  Avatar,
  CardContent,
  CardActions
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
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
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
    marginLeft: "2.5vw",
    marginTop: "5vh"
  },
  name: {
    textAlign: "center",
    marginLeft: "2vw"
  },
  goalText: {
    marginTop: "5vh",
    marginLeft: "3vw"
  },
  postedOn: {
    marginLeft: "2vw"
  },
  likeDislikeComment: {
    color: "#909090",
    gutterBottom: false
  },
  completeGoalIcon: {
    color: "#008542"
  },
  deletGoalIcon: {
    color: "#FF0000"
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
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h2" className={classes.profileHeader}>
            Goals
          </Typography>
          <Grid container spacing={4}>
            {goals.map(singleGoal => (
              <Grid item key={singleGoal._id} xs={12}>
                <Card fullwidth="true" className={classes.card}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar
                        className={classes.avatar}
                        src={singleGoal.avatar}
                      />
                      <Typography variant="subtitle2" className={classes.name}>
                        {singleGoal.first_name} {singleGoal.last_name}
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.postedOn}
                      >
                        Posted on{" "}
                        <Moment format="MM/DD/YYYY">{singleGoal.date}</Moment>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            className={classes.goalText}
                            variant="body1"
                            gutterBottom
                          >
                            {singleGoal.text}
                          </Typography>
                          <Typography variant="h5"></Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <CardContent className={classes.cardContent}></CardContent>
                  <CardActions>
                    <ThumbUpAltIcon className={classes.likeDislikeComment} />
                    <Typography variant="caption">
                      {singleGoal.likes.length}
                    </Typography>
                    <ThumbDownAltIcon className={classes.likeDislikeComment} />
                    <Link to={`/goal/${singleGoal.user}`}>
                      <ChatIcon className={classes.likeDislikeComment} />
                    </Link>

                    <Typography variant="caption">
                      {singleGoal.comments.length}
                    </Typography>
                    {!auth.loading && singleGoal.user === auth.user._id && (
                      <DoneIcon className={classes.completeGoalIcon} />
                    )}
                    {!auth.loading && singleGoal.user === auth.user._id && (
                      <DeleteIcon className={classes.deletGoalIcon} />
                    )}
                  </CardActions>
                </Card>
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
