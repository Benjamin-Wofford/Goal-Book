import React, { useEffect } from "react";
import "./App.css";
import LoginBox from "./components/layout/LoginBox";
import NotFound from "./components/layout/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/layout/Signup";
import Alert from './components/layout/Alert'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/profile-form/CreateProfile'
import PrivateRoute from './components/routing/PrivateRoute'
// Redux
import { Provider } from "react-redux";
import { loadUser } from './actions/auth'
import store from "./store";
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])


  return (
    <Provider store={store}>
      <Router>
        <Alert/>
        <Switch>
          <Route exact path="/" component={LoginBox} />
          <Route exact path="/Signup" component={Signup} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
