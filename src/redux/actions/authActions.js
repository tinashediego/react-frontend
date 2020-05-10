import axios from "axios";
import api  from '../../utils/helpers/api'
import { GET_ERRORS,ALL_USERS } from "../types";
// this  is a comment





// Log user out
export const logoutUser = (history) => dispatch => {


localStorage.clear()
  window.location.href  = '/'
  // Set current user to empty object {} which will set isAuthenticated to false
  
};



export const allUsers = () => dispatch=>{

  axios.get(`${api.apiUrl}/testing-agents/all`)
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

