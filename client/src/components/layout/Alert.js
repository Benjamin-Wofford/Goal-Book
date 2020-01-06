import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Snackbar, IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

const Alert = ({ alerts }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const setOpenAlert = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">Note archived</span>}
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

// Alert.PropTypes = {
//   alert: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
  alerts: state.alert
});


export default connect(mapStateToProps)(Alert);
