import axios from "axios";



import { GET_ERRORS,ALL_USERS } from "../types";
// this  is a comment





// Log user out
export const logoutUser = (history) => dispatch => {


localStorage.clear()
  window.location.href  = '/'
  // Set current user to empty object {} which will set isAuthenticated to false
  
};



export const allUsers = () => dispatch=>{

  axios.get("http://45.76.141.84:8080/v1/testing-agents/all")
       .then(resp=>{
         console.log(resp)
         dispatch({
         type:ALL_USERS,
         payload:resp.data
       })}).catch(err=>{
        dispatch({
          type:GET_ERRORS,
          payload:err,
          msg:alert('trouble getting data ,please refresh')
        })

      })

}

