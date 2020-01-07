import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Snackbar, IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  myAlert: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
}));

const Alert = ({ alerts }) => {
  const classes = useStyles();
  
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // --- TODO :: We need to add remove Alert from state.

    setOpen(false);
  };

  return (
    alerts.length > 0 && <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      className={classes.myAlert}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">{ alerts[0].msg }</span>}
      action={[
        <Button key="undo" color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>,
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});


export default connect(mapStateToProps)(Alert);
