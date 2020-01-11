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
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
  Button,
  makeStyles,
  Container
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  profileHeader: {
    textAlign: 'center'
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
            <Typography className={classes.profileHeader} variant='h2'>Profiles</Typography>
              <Grid container spacing={4}>
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
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
