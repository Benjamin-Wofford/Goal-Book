import React from "react";
import { Paper, TextField, Button, Typography, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  mainElement: {
    fontWeight: '500', 
    fontFamily: 'Ma Shan Zheng',
    color: '#424242'
  },
});

const LoginBox = () => {
  const classes = useStyles()
  return (
    <Paper style={{  paddingTop: 128, paddingBottom: 128, paddingRight: 96, paddingLeft: 96 }} elevation={4}>
      <Typography className={classes.mainElement} variant="h1" align='center'>Goal</Typography>
      <Typography className={classes.mainElement} variant="h1" align='center'>Book</Typography>
      <form style={{ marginTop: 48 }} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Email" />
      </form>
      <form
        style={{ marginTop: 12, marginBottom: 24 }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Password" />
      </form>
      <Button style={{ paddingLeft: 24, paddingRight: 24}} color="primary" variant='contained'>Login</Button>
      <Button style={{  marginLeft: 12, paddingLeft: 24, paddingRight: 16 }} color="secondary" variant='outlined'>
        Sign up
      </Button>
    </Paper>
  );
};

export default LoginBox;
