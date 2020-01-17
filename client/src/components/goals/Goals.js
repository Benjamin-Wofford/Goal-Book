import React, { useEffect } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { addLike, removeLike, deleteGoal } from "../../actions/goal";
import { getGoals } from "../../actions/goal";
import GoalForm from "../GoalForm";
import Spinner from "../layout/Spinner";
import Navbar from "../dashboard/Navbar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ChatIcon from "@material-ui/icons/Chat";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  IconButton,
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
    marginBottom: 20,
    marginTop: theme.spacing(2)
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const Goals = ({
  getGoals,
  auth,
  addLike,
  removeLike,
  deleteGoal,
  goal: { goals, user, loading }
}) => {
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
        <Container>
          <Typography variant="h2" className={classes.profileHeader}>
            Goals
          </Typography>

          {/* parent grid */}
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <GoalForm />
            </Grid>
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
                  <Link to={`/profile/user/${singleGoal.user}`}>
                    {" "}
                    <Avatar
                      className={classes.avatar}
                      src={singleGoal.avatar}
                    />
                  </Link>

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
                    <IconButton size="small" onClick={e => addLike(singleGoal._id)}>
                      <ThumbUpAltIcon />
                    </IconButton>

                    <Typography variant="caption">
                      {singleGoal.likes.length}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={e => removeLike(singleGoal._id)}
                    >
                      <ThumbDownAltIcon />
                    </IconButton>

                    <IconButton href={`/goal/${singleGoal._id}`} size="small">
                      <ChatIcon />
                    </IconButton>

                    {!auth.loading && singleGoal.user === auth.user._id && (
                      <IconButton
                        onClick={e => deleteGoal(singleGoal._id)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
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
  goal: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deleteGoal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getGoals,
  addLike,
  removeLike,
  deleteGoal
})(Goals);
