import React from "react";
import "./App.css";
import LoginBox from "./components/layout/LoginBox";
import NotFound from "./components/layout/NotFound"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginBox} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
