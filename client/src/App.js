import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import LoginBox from "./components/layout/LoginBox";

const App = () => {
  return (
    <Grid container  direction='column' alignItems='center' justify='center'>
      <Grid item>
        <LoginBox />
      </Grid>
    </Grid>
  );
};

export default App;
