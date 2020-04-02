import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken"; 
import {  Role } from './utils/helpers/Role';

import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { Provider } from "react-redux";
import store from "./utils/helpers/store"; 

import Landing from "./app/components/layout/Landing";
import Register from "./app/components/Auth/Register";
import Login from "./app/components/Auth/Login";
import privateRoute from "./private/privateRoute";
import Dashboard from "./app/components/dashboard/Dashboard"; 




// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App wrapper">
    
        <Route exact path="/" component={Landing} />
   
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
        <Switch>
          <privateRoute exact path="/dashboard"  roles={[Role.Admin]} component={Dashboard} />
      
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;

