import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles, Grid } from "@material-ui/core";
import { deleteAccount } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(5)
  },
  delete: {
    margin: theme.spacing(1, 1, 1),
    textDecoration: "none"
  },
  editprofile: {
    textDecoration: "none",
    margin: theme.spacing(1, 1, 1)
  }
}));

const DashboardActions = ({ deleteAccount }) => {
  const classes = useStyles();

  return (
    <>
      <form noValidate className={classes.form}>
        <Link to="/edit-profile" className={classes.editprofile}>
          <Button size='small' color="primary" variant="contained">
            Edit Profile
          </Button>
        </Link>
        <Link to="/" className={classes.delete}>
          <Button size='small' color="secondary" onClick={() => deleteAccount()}>
            Delete My Account
          </Button>
        </Link>
      </form>
    </>
  );
};

DashboardActions.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
}

export default connect(null, { deleteAccount })(DashboardActions);
