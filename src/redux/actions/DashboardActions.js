import axios from "axios";


import { GET_ERRORS , GENDERMALE

} from "../types";




//// demo by gender
//demo by  gender result

//demo by province  gender result
//demo by provence 


  



  export const Demos = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics")
         .then(resp=>{
           console.log(resp.data)
           dispatch({
           type:GENDERMALE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }


