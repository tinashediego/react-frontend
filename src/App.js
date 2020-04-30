import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/helpers/store"; 
import Login from "./app/components/Auth/Login";
import PrivateRoute from "./private/privateRoute";

import AllKits from "./app/components/Admin/AllKits";

import axios from 'axios'

import Admin from './app/components/layout/Admin/Admin'
import Agent from "./app/components/layout/Agent/Agent";
import Patient from "./app/components/layout/Patient/Patient";

import Otp from './app/components/Patient/Otp'







// LocalstorageService

// Add a request interceptor
axios.interceptors.request.use(
   config => {
    if(config.url === "https://covid19.mathdro.id/api/countries"){
   
      config.headers['Authorization'] = ``  

    }
    else{
           const token = localStorage.getItem('access_token');


      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`   
      }}

       // config.headers['Content-Type'] = 'application/json';

       console.log(config)
       return config;
    },
   error => {
       Promise.reject(error)
   });



//Add a response interceptor

axios.interceptors.response.use((response) => {
   return response
}, function (error) {
  

 


   return Promise.reject(error);
});




function App() { 

  return (
    <Provider store={store} responsive>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard/"   component={Admin} />
          <PrivateRoute exact path="/dash"   component={AllKits} />
          <PrivateRoute excat path='/agent' component={Agent} />
          <PrivateRoute exact path="/patient" component={Patient}/>
          <PrivateRoute exact path="/adduser" component={Admin} />
          <PrivateRoute exact path="/allusers" component={Admin} />
          <PrivateRoute exact path="/addpatient" component={Agent} />
          <PrivateRoute exact path="/allpatients" component={Agent} />
          <PrivateRoute exact path="/patientDetails/:id" component={Agent} />
          <PrivateRoute excat path="/test/:id" component={Agent} />
          <PrivateRoute excat path='/onescreen/:id' component={Agent} />
          <PrivateRoute excat path='/mytests' component={Agent} />
          <PrivateRoute exact path="/allkits" component={Admin} />
          <PrivateRoute exact path="/newkit" component={Admin} />
          <PrivateRoute exact path="/allfacilities" component={Admin} />
          <PrivateRoute excat path='/test/:id' component={Agent} />
          <PrivateRoute excat path='/otp' component={Otp} />
    
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;

