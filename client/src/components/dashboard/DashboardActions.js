import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(5), 
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

const DashboardActions = () => {
  const classes = useStyles();

  return (
    <>
      <form noValidate className={classes.form}>
        <Link to="/edit-profile" className={classes.editprofile}>
          <Button color="primary" variant="outlined" >
            Edit Profile
          </Button>
        </Link>
        <Link to="/" className={classes.delete}>
          <Button color="secondary" >Delete Profile</Button>
        </Link>
      </form>
    </>
  );
};

export default DashboardActions;
