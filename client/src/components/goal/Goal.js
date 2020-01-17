import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Spinner from "../layout/Spinner";
import CommentForm from "../../components/goal/CommentForm";
import DeleteIcon from "@material-ui/icons/Delete";
import { getGoal, deleteComment } from "../../actions/goal";
import {
  makeStyles,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Avatar,
  Typography,
  IconButton
} from "@material-ui/core";
import Navbar from "../dashboard/Navbar";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "auto",
    marginTop: theme.spacing(3)
  },
  actionButtons: {
    marginTop: "3vh"
  },
  profileHeader: {
    textAlign: "center",
    marginBottom: 20,
    marginTop: theme.spacing(2)
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const Goal = ({ deleteComment, getGoal, user, auth, goal: { goal, loading }, match }) => {
  const classes = useStyles();

  useEffect(() => {
    getGoal(match.params.id);
  }, [getGoal, match.params.id]);

  return loading || goal === null ? (
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
      <Navbar />

      <Container component="main">
        <Typography className={classes.profileHeader} variant="h2">
          Comments
        </Typography>
        {/* Parent container */}
        <Grid container spacing={4}>
          <Grid
            className={classes.paper}
            key={goal._id}
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
              <Link to={`/profile/user/${goal.user}`}>
                {" "}
                <Avatar className={classes.avatar} src={goal.avatar} />
              </Link>

              <Typography variant="caption">
                {goal.first_name} {goal.last_name}
              </Typography>
              <Typography variant="caption" className={classes.postedOn}>
                Posted on <Moment format="MM/DD/YYYY">{goal.date}</Moment>
              </Typography>
            </Grid>
            <Grid container item direction="column" xs={9}>
              <Typography variant="body1">{goal.text}</Typography>
            </Grid>
          </Grid>
          {goal.comments.map(comment => (
            <Grid
              className={classes.paper}
              key={comment._id}
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
                <Link to={`/profile/user/${comment.user}`}>
                  {" "}
                  <Avatar className={classes.avatar} src={comment.avatar} />
                  
                </Link>

                <Typography variant="caption">
                  {comment.first_name} {comment.last_name}
                </Typography>
                <Typography variant="caption" className={classes.postedOn}>
                  Posted on <Moment format="MM/DD/YYYY">{comment.date}</Moment>
                </Typography>
                {!auth.loading && goal.user === auth.user._id && (
                  <IconButton
                    onClick={e => deleteComment(goal._id, comment._id)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Grid>
              <Grid container item direction="column" xs={9}>
                <Typography variant="body1">{comment.text}</Typography>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <CommentForm goalId={goal._id} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Goal.propTypes = {
  getGoal: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  auth: state.auth
});

export default connect(mapStateToProps, { getGoal, deleteComment })(Goal);
