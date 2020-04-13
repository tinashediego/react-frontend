import axios from "axios";
import jwt_decode from "jwt-decode";


import { GET_ERRORS } from "../types";




export const allKits = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/test-kits/all")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:ALL_KITS,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }