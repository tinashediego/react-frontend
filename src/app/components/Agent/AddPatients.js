import React , {useState} from 'react';
import {Input,Form} from 'reactstrap';

import axios from  'axios'

import { TextField } from '@material-ui/core';


import moment from 'moment'
import Grid from '@material-ui/core/Grid';


const AddPatient  = ({next}) =>{

  const [patientData ,setPatient]  =  useState(
  {
    "address": "",
    "email": "",
    thisAChild:'',
    "firstName": "",
    "group": "PATIENT",
    "lastName": "",
    dateOfBirth:'',
    "passportNumber": "",
    nationalId:"",
    "phoneNumber":"",
    "gender":"",
    "city":"",
    "province":""
    
  })


  var newPatient={
  userCommand: {
    "firstName":patientData.firstName,
    "lastName":patientData.lastName,
    "group":patientData.group,
    "gender": patientData.gender,
    "phoneNumber": patientData.phoneNumber,
    "email": patientData.email,
    "nationalIdNumber":patientData.nationalId,
    "passportNumber": patientData.passportNumber,
    "dateOfBirth":moment(patientData.dateOfBirth).format('DD/MM/YYYY'),
    thisAChild:patientData.thisAChild,
    "address": {
    "streetAddress": patientData.address,
    "city":patientData.city,
    "province": patientData.province
  }
  }

}

  function handleSubmit(e) {

    e.preventDefault();
    if(patientData){
      axios.post('http://45.76.141.84:8080/v1/patients' ,newPatient)
      .then(resp=>{
        console.log(resp)
        localStorage.setItem('currentPatient',patientData.firstName)
        localStorage.setItem('partnerId' , resp.data.id)
        alert('success')
        next()
      }).catch(err=>{

        alert(err.message)

      })

    }


    }
   

    

  return (
    <div responsive>

    <h5 style={styles.container}>
    New Patient
     </h5>

    <Form onSubmit={handleSubmit}>
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="First Name" value={patientData.firstName} onChange={e=>setPatient({ ...patientData ,firstName:e.target.value})} placeholder="First Name" autoComplete="firstName" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Last Name" value={patientData.lastName} onChange={e=>setPatient({ ...patientData ,lastName:e.target.value})} placeholder="Last Name" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="National ID" value={patientData.nationalId} onChange={e=>setPatient({ ...patientData ,nationalId:e.target.value})} placeholder="e.g 63-1234567A12"   fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField label="Passport Number" value={patientData.passportNumber} onChange={e=>setPatient({ ...patientData ,passportNumber:e.target.value})} placeholder="e.g passport Number"   fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Date Of Birth" type="date" name="password" value={patientData.dateOfBirth} onChange={e=>setPatient({ ...patientData ,dateOfBirth:e.target.value})} placeholder="dd/mm/yyyy" fullWidth   />
                </Grid>

                <Grid item xs={12} sm={6}>
                <TextField type="email" label="Email" value={patientData.email} onChange={e=>setPatient({ ...patientData ,email:e.target.value})} placeholder="Email" fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label="Phone Number"  type="text"   value={patientData.phoneNumber} onChange={e=>setPatient({ ...patientData ,phoneNumber:e.target.value})} placeholder="e.g +263772123456" fullWidth   />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField label="Address" value={patientData.address} onChange={e=>setPatient({ ...patientData ,address:e.target.value})} placeholder="Address" fullWidth   />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="City" value={patientData.city} onChange={e=>setPatient({ ...patientData ,city:e.target.value})} placeholder="City" fullWidth  />
                </Grid>     
                <Grid item xs={12} sm={6}>
                    <Input type="select" name="group" value={patientData.province} onChange={e=>setPatient({ ...patientData ,province:e.target.value})}>
                    <option>Province</option>
                    <option value="BULAWAYO">BULAWAYO</option>
                    <option value="HARARE">HARARE</option>
                    <option value="MANICALAND">MANICALAND</option>
                    <option value="MASHONALAND_CENTRAL">MASHONALAND_CENTRAL</option>
                    <option value="MASHONALAND_EAST">MASHONALAND_EAST</option>
                    <option value="MASHONALAND_WEST">MASHONALAND_WEST</option>
                    <option value="MASVINGO">MASVINGO</option>
                    <option value="MATABELELAND_NORTH">MATABELELAND_NORTH</option>
                    <option value="MATABEKELAND_SOUTH">MATABELELAND_SOUTH</option>
                    <option value="MIDLANDS">MIDLANDS</option>

                    </Input>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input type="select" name="gender" value={patientData.gender} onChange={e=>setPatient({ ...patientData ,gender:e.target.value})} id="gender">
                    <option>Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    </Input>
                </Grid>


                <Grid item xs={12} sm={6}>
                <Input type="select" label="Is This a Child" value={patientData.thisAChild} onChange={e=>setPatient({ ...patientData ,thisAChild:e.target.value})} id="gender">
                <option>is this a  child</option>
                <option value="true">YES</option>
                <option value="false">NO</option>
                </Input>
            </Grid>

            </Grid>
        </React.Fragment>

        <div align="right" style={{paddingTop:10}}>
            <button className="btn btn-success" type="submit">submit</button>
        </div>
    </Form>

</div>
  );
}




const styles = {

  container:{
    borderLeft:"10px solid #4c8c40",
     
     
  
},






}

export default AddPatient;