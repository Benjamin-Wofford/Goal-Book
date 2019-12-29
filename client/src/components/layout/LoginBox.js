import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const LoginBox = () => {
  return (
    <Paper style={{  paddingTop: 120, paddingBottom: 120, paddingRight: 100, paddingLeft: 100 }} elevation={4}>
      <Typography variant="h3">Goal Book</Typography>
      <form style={{ marginTop: 40 }} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Email" />
      </form>
      <form
        style={{ marginTop: 10, marginBottom: 15 }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Password" />
      </form>
      <Button  color="primary" variant='contained'>Login</Button>
      <Button style={{  margin: 15 }} color="secondary" variant='outlined'>
        Sign up
      </Button>
    </Paper>
  );
};

export default LoginBox;
