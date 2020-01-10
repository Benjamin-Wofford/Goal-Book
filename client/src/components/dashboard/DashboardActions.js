import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

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
  }
}));

const DashboardActions = () => {
  const classes = useStyles();

  return (
    <>
      <form noValidate className={classes.form}>
        <Link to="/edit-profile" style={{ textDecoration: "none" }}>
          <Button color="primary" variant="outlined">
            Edit Profile
          </Button>
        </Link>
      </form>
    </>
  );
};

export default DashboardActions;
