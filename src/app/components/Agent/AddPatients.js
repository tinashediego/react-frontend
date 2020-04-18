import React , {useState} from 'react';
import {Input,Form} from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux';
import {addPatient} from '../../../redux/actions/PatientsActions'
import { useHistory } from "react-router";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const AddPatient  = () =>{

  const [patientData ,setPatient]  =  useState(
  {
    "address": "",
    "email": "",
    "firstName": "",
    "group": "PATIENT",
    "lastName": "",
    dateOfBirth:'',
    "nationalIdOrPassportNumber": "",
    "phoneNumber":"",
    "gender":"",
    "city":"",
    "province":""
    
  })

  var newPatient={
  userCommand: {
    "fullName":patientData.firstName,
    "group":patientData.group,
    "gender": patientData.gender,
    "phoneNumber": patientData.phoneNumber,
    "email": patientData.email,
    "nationalIdNumber":patientData.nationalIdOrPassportNumber,
    "passportNumber": patientData.nationalIdOrPassportNumber,
    "dateOfBirth":moment(patientData.dateOfBirth).format('DD/MM/YYYY'),
    "address": {
    "streetAddress": patientData.address,
    "city":patientData.city,
    "province": patientData.province
  }
  }

}

















  console.log(patientData)
  console.log(newPatient)

  const dispatch = useDispatch();
  
  const content = useSelector((state) => state.patients.newpatient);

  function handleSubmit(e) {
    e.preventDefault();
    if (patientData) {
        dispatch(addPatient(newPatient))
      }

    }


    localStorage.setItem('partnerId' , content)

  return (

    <div responsive>

    

    <h5 style={styles.container}>
    New Patient
     </h5>
    
    <Form onSubmit={handleSubmit}>
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" 
            value={patientData.firstName}
             onChange={e=>setPatient({ ...patientData ,firstName:e.target.value})}
             placeholder="First Name"
             autoComplete="firstName"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name"  
      value={patientData.lastName}
      onChange={e=>setPatient({ ...patientData ,lastName:e.target.value})}
      placeholder="Last Name" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
    <TextField label="National ID"  
    value={patientData.nationalIdOrPassportNumber}
    onChange={e=>setPatient({ ...patientData ,nationalIdOrPassportNumber:e.target.value})}
    placeholder="National ID" required
     fullWidth     />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField label="Date Of Birth" type="date" name="password"
        value={patientData.dateOfBirth}
        onChange={e=>setPatient({ ...patientData ,dateOfBirth:e.target.value})}
        placeholder="Date of Birth" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField label="City" 
      value={patientData.city} 
      onChange={e=>setPatient({ ...patientData ,city:e.target.value})}
      placeholder="City" fullWidth required/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField label="Address" value={patientData.address}
        onChange={e=>setPatient({ ...patientData ,address:e.target.value})} 
        placeholder="Address" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField type="email"  label="Email" value={patientData.email}
        onChange={e=>setPatient({ ...patientData ,email:e.target.value})}
        placeholder="Email" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField label="Phone Number" value={patientData.phoneNumber}
        onChange={e=>setPatient({ ...patientData ,phoneNumber:e.target.value})} 
        placeholder="Phone Number/ Next of Kin's Phone Number" fullWidth required  />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Input type="select" name="group"  value={patientData.province} 
        onChange={e=>setPatient({ ...patientData ,province:e.target.value})}> 
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
        <Input type="select" name="gender" value={patientData.gender}
  onChange={e=>setPatient({ ...patientData ,gender:e.target.value})}  id="gender"> 
  <option>Gender</option>
  <option value="MALE">Male</option>
  <option value="FEMALE">Female</option>
  </Input>
        </Grid>
  
      </Grid>
    </React.Fragment>
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