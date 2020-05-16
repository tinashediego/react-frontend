import axios from "axios";
import { ADD_KIT  ,ALL_KITS , ALL_FACILITY ,ADD_FACILITY,   GET_ERRORS,} from "../types";
import api  from '../../utils/helpers/api'

  // add a new desktop
  export const addKit = (kitData) => dispatch => {
    axios
      .post(`${api.apiUrl}/test-kits`, kitData)
      .then(resp=>{
          dispatch({
              type:ADD_KIT,
              payload:resp,
              msg:alert("succcess")

          })
      })
      .catch(err =>{ 

        console.log(err)
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
    }
      );
  };




    
    

  
  export const allKits = () => dispatch=>{

    axios.get(`${api.customUrl}/test-kit-type/all`)
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:ALL_KITS,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            
          })

        })

  }









  export const Allfacility = () => dispatch=>{

    axios.get(`${api.apiUrl}/testing-facilities/all`)
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:ALL_FACILITY,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }



  
  // add a new desktop
  export const addfacilty = (fData) => dispatch => {
    axios
      .post(`${api.apiUrl}/test-kits`, fData)
      .then(resp=>{
          dispatch({
              type:ADD_FACILITY,
              payload:resp,
              msg:alert("succcess")

          })
      })
      .catch(err =>{ 

        console.log(err)
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
    }
      );
  };

  