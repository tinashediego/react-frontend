
import axios  from 'axios'
import { ADD_PATIENT  ,GET_ERRORS, ONE_PATIENT, TEST_PATIENT, UPDATE_SCREEN, UPDATE_TEST, ALL_PATIENTS} from '../types';



export const addPatient = (user) => dispatch => {



   let newPatient = JSON.parse(user)

   console.log(newPatient)
    
    axios
      .post("http://45.76.141.84:8302/api/maisha-cov19-app/v1/testing-process/create-patient",newPatient)
      .then(resp=>{
          dispatch({
              type:ADD_PATIENT,
              payload:resp.data,
              msg:alert("succcess")

          })

           
      })
      .catch(err =>{ 

        console.log(err)
        dispatch({
          type: GET_ERRORS,
          payload: err,
          msg:alert(err.message)
        })
    }
      );
  };


export const testPatient = (patientData) => dispatch =>{


    axios.post('/testpatient' , patientData)
         .then(resp=>{

            dispatch({
                type:TEST_PATIENT,
                payload:resp,
                msg:alert('success')
            })
            .catch(err=>{

                dispatch({
                    type:GET_ERRORS,
                    payload:err,
                    msg:alert(err.message)
                })
            })
         })
}



export const updatePatient = (patientData) => dispatch =>{


    axios.post('/testpatient' , patientData)
         .then(resp=>{

            dispatch({
                type:UPDATE_SCREEN,
                payload:resp,
                msg:alert('success')
            })
            .catch(err=>{

                dispatch({
                    type:GET_ERRORS,
                    payload:err,
                    msg:alert(err.message)
                })
            })
         })
}


export const updateTest = (patientData) => dispatch =>{


    axios.post('/testpatient' , patientData)
         .then(resp=>{

            dispatch({
                type:UPDATE_TEST,
                payload:resp,
                msg:alert('success')
            })
            .catch(err=>{

                dispatch({
                    type:GET_ERRORS,
                    payload:err,
                    msg:alert(err.message)
                })
            })
         })
}




export const allPatient = () => dispatch=>{

  


    axios.get("http://45.76.141.84:8302/api/maisha-cov19-app/v1/document-types/all")
         .then(resp=>{
           console.log(resp.data)
           dispatch({
           type:ALL_PATIENTS,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }



  
export const onePatient = (id) => dispatch=>{

    axios.get(`${id}`)
         .then(resp=>{
           console.log(resp.data)
           dispatch({
           type:ONE_PATIENT,
           payload:resp
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }


  