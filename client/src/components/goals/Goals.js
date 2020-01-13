import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGoals } from "../../actions/goal";
import Spinner from "../layout/Spinner";
import Navbar from "../dashboard/Navbar";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ChatIcon from '@material-ui/icons/Chat';
import DeleteIcon from '@material-ui/icons/Delete';
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
    marginLeft: "2.5vw",
    marginTop: "5vh"
  },
  name: {
    textAlign: "center",
    marginLeft: "1.2vw"
  },
  goalText: {
    marginTop: "5vh",
    marginLeft: '1.5vw'
  }
}));

const Goals = ({ getGoals, goal: { goals, loading } }) => {
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
            {goals.map(goal => (
              <Grid item key={goal._id} xs={12}>
                <Card fullWidth className={classes.card}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar className={classes.avatar} />
                      <Typography variant="caption" className={classes.name}>
                        Benjamin Wofford
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography className={classes.goalText} variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc dictum venenatis ex, non faucibus tellus
                            iaculis vitae. Mauris et molestie ex. Aliquam erat
                            volutpat. Nullam sed faucibus neque. Praesent diam
                            sem, aliquet sed mi sed, maximus dapibus eros. Proin
                            fermentum pretium nibh, in posuere dui posuere nec.
                            Nam ultrices, libero in rutrum pretium, ante erat
                            imperdiet nibh, sed sagittis ante turpis eget urna.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <CardContent className={classes.cardContent}></CardContent>
                  <CardActions>
                    <ThumbUpAltIcon/>
                    <ThumbDownAltIcon/>
                    <ChatIcon/>
                    <DeleteIcon/>
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
  goal: state.goal
});

export default connect(mapStateToProps, { getGoals })(Goals);
