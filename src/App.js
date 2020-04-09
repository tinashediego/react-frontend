import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken"; 
import {  Role } from './utils/helpers/Role';

import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { Provider } from "react-redux";
import store from "./utils/helpers/store"; 
import Register from "./app/components/Auth/Register";
import Login from "./app/components/Auth/Login";
import PrivateRoute from "./private/privateRoute";
import AdminDashboard from "./app/components/Admin/AdminDashboard"; 
import AddUser from "./app/components/Admin/AddUser"; 
import AllUsers from "./app/components/Admin/AllUsers";
import AllKits from "./app/components/Admin/AllKits";
import NewKit from "./app/components/Admin/NewKit";
import axios from 'axios'

import AddPatient from './app/components/Agent/AddPatients'
import AllPatients  from './app/components/Agent/AllPatients'
import AgentDashboard  from './app/components/Agent/AgentDashboard'
import PatientDetails from './app/components/Agent/PatientDetails'
import UpdatePatientDetails from "./app/components/Agent/UpdatePatientDetails";
import TestPatient from "./app/components/Agent/TestPatient";
import PatientDashboard from "./app/components/Patient/PatientDashboard";







// LocalstorageService

let urls = 'http://45.76.141.84:8302/api/maisha-cov19-app/authenticate'

// Add a request interceptor
axios.interceptors.request.use(
   config => {
    if(config.url === urls){
   ///   config.headers['Authorization'] = 'Basic YWRtaW4tcG9ydGFsOiNAVTdIanVjd3hPYUBCZUZZdlVjUnlhVnNNJU1uUUN2'



    }else{
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`   
      }

    }   // config.headers['Content-Type'] = 'application/json';

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
   const originalRequest = error.config;

   if (error.response.status === 401 && originalRequest.url === 'http://45.76.141.84:8302/api/maisha-cov19-app/authenticate') {
    window.location.href = '/'
       return Promise.reject(error);
   }

   if (error.response.status === 401 && !originalRequest._retry) {

       originalRequest._retry = true;
       const refreshToken = localStorage.getItem('refresh_token');
       return axios.post('/auth/token',
           {
               "refresh_token": refreshToken
           })
           .then(res => {
               if (res.status === 201) {
                const token = localStorage.getItem('access_token');
                   
                   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                   return axios(originalRequest);
               }
           })
   }
   return Promise.reject(error);
});





function App() { 

  return (
    <Provider store={store} responsive>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard"   component={AdminDashboard} />
          <PrivateRoute exact path="/dash"   component={AllKits} />
          <PrivateRoute excat path='/agent' component={AgentDashboard} />
          <PrivateRoute exact path="/patient" component={PatientDashboard}/>
          <PrivateRoute exact path="/adduser" component={AddUser} />
          <PrivateRoute exact path="/allusers" component={AllUsers} />
          <PrivateRoute exact path="/addpatient" component={AddPatient} />
          <PrivateRoute exact path="/allpatients" component={AllPatients} />
          <PrivateRoute exact path="/patientDetails/" component={PatientDetails} />
          <PrivateRoute excat path="/updatePatientDetails" component={UpdatePatientDetails} />
          <PrivateRoute excat path="/test" component={TestPatient} />
        
          <PrivateRoute exact path="/allkits" component={AllKits} />
          <PrivateRoute exact path="/newkit" component={NewKit} />
        
        
      
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;

