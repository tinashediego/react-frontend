
import axios  from 'axios'
import { ADD_PATIENT  ,GET_ERRORS, ONE_PATIENT,MYTESTS, TEST_PATIENT, ALL_TEST, ONE_SCREEN, UPDATE_SCREEN, UPDATE_TEST, ALL_PATIENTS, PENDING} from '../types';

import api  from '../../utils/helpers/api'

export const addPatient = (user) => dispatch => {


    
    axios
      .post(`${api.apiUrl}/patients`,user)
      .then(resp=>{
          dispatch({
              type:ADD_PATIENT,
              payload:resp.data.id,
              msg:alert("succcess")

          })

           
      }).then(x=>{

        console.log(x)

       // localStorage.setItem('patientId',x.id)
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


    axios.post(`${api.apiUrl}/tests` , patientData)
         .then(resp=>{
 
            dispatch({
                type:TEST_PATIENT,
                payload:resp,
                msg:alert('success')
            })
          
         }).catch(err=>{

          dispatch({
              type:GET_ERRORS,
              payload:err,
              msg:alert(err.message)
          })
      

})
}


export const Record = () => dispatch =>{

  let username = localStorage.getItem('username')


    axios.get(`${api.apiUrl}/patient-screenings/agent/my-records?name=${username}`)
         .then(resp=>{

            dispatch({
                type:UPDATE_SCREEN,
                payload:resp.data,
                msg:alert('success')
            })
          
         })
         .catch(err=>{

          dispatch({
              type:GET_ERRORS,
              payload:err,
              msg:alert(err.message)
          })
      })
}


export const updateTest = (patientData) => dispatch =>{


    axios.post(`${api.apiUrl}/patient-screenings`, patientData)
         .then(resp=>{
              console.log(resp.data)
            dispatch({
                type:UPDATE_TEST,
                payload:resp,
                msg:alert('success')
            })})
            .catch(err=>{
                dispatch({
                    type:GET_ERRORS,
                    payload:err,
                    msg:alert(err.message)
                })
            })
         
}




export const allPatient = () => dispatch=>{

  


    axios.get(`${api.apiUrl}/patients/all/by-agent-facility`)
         .then(resp=>{
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

    axios.get(`${api.apiUrl}/patients/${id}`)
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


 export const onePatientScreen = (id) => dispatch=>{

    axios.get(`${api.apiUrl}/patient-screenings/all/${id}`)
         .then(resp=>{
           console.log(resp.data)
           dispatch({
           type:ONE_SCREEN,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
         
          })

        })

  }

 


  export const allPatientTests = (id) => dispatch=>{

    axios.get(`${api.apiUrl}/tests/patient/${id}`)
         .then(resp=>{
           dispatch({
           type:ALL_TEST,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
         
          })

        })
      }

  


      export const updatePendingTest = (x) => dispatch=>{

  


        axios.put(`${api.apiUrl}/tests/${x.id}/results`,x)
             .then(resp=>{
               console.log(resp.data)
               dispatch({
               type:MYTESTS,
               payload:resp.data
             })}).catch(err=>{
              dispatch({
                type:GET_ERRORS,
                payload:err,
                msg:alert('trouble getting data ,please refresh')
              })
    
            })
    
      }
    

      

  export const allpendingTests = (id) => dispatch=>{

 

    axios.get(`${api.apiUrl}/tests/pending`)
         .then(resp=>{
           dispatch({
           type:PENDING,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
         
          })

        })
      }

  
    