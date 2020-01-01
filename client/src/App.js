import React from "react";
import "./App.css";
import LoginBox from "./components/layout/LoginBox";
import NotFound from "./components/layout/NotFound"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/layout/Signup";
import Alert from './components/layout/Alert'

// Redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Alert/>
      <Switch>
        <Route exact path="/" component={LoginBox} />
        <Route exact path="/Signup" component={Signup}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
    </Provider>
  );
};

export default App;
