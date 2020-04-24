
import axios  from 'axios'
import { ADD_PATIENT  ,GET_ERRORS, ONE_PATIENT,MYTESTS, TEST_PATIENT, ALL_TEST, ONE_SCREEN, UPDATE_SCREEN, UPDATE_TEST, ALL_PATIENTS, PENDING} from '../types';



export const addPatient = (user) => dispatch => {


    
    axios
      .post("http://45.76.141.84:8080/v1/patients",user)
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


    axios.post('http://45.76.141.84:8080/v1/tests' , patientData)
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


    axios.get(`http://45.76.141.84:8080/v1/patient-screenings/agent/my-records?name=${username}`)
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


    axios.post('http://45.76.141.84:8080/v1/patient-screenings' , patientData)
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

  


    axios.get("http://45.76.141.84:8080/v1/patients/all/by-agent-facility")
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

    axios.get(`http://45.76.141.84:8080/v1/patients/id`)
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

    axios.get(`http://45.76.141.84:8080/v1/patient-screenings/all/${id}`)
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

    axios.get(` http://45.76.141.84:8080/v1/tests/patient/${id}`)
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

  


        axios.put(`http://45.76.141.84:8080/v1/tests/${x.id}/results`,x)
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

 

    axios.get(`http://45.76.141.84:8080/v1/tests/pending`)
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

  
    