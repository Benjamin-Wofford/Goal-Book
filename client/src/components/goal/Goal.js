import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Spinner from "../layout/Spinner";
import { getGoal } from "../../actions/goal";
import {
  Button,
  makeStyles,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Avatar,
  Typography
} from "@material-ui/core";
import Navbar from "../dashboard/Navbar";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "auto",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(6)
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

const Goal = ({ getGoal, goal: { goal, loading }, match }) => {
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
      <Container>
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
        </Grid>
      </Container>
    </>
  );
};

Goal.propTypes = {
  getGoal: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal
});

export default connect(mapStateToProps, { getGoal })(Goal);
