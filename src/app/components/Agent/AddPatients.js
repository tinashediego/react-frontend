import React , {useState} from 'react';
import {
   Col, Form,
  FormGroup, Label, Input,
 
} from 'reactstrap'
import { useDispatch,} from 'react-redux';
import {addPatient} from '../../../redux/actions/PatientsActions'
import { useHistory } from "react-router";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment'


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
  
  let history = useHistory()


  function handleSubmit(e) {
    e.preventDefault();
    if (patientData) {
        dispatch(addPatient(newPatient))
    }
}

function handleClose(){

  history.goBack()
 }

  return (

    <div responsive>

    

    <h5 style={styles.container}>
    New Patient
     </h5>
    <Form className="col-sm-12" onSubmit={handleSubmit}>
      
      <div className="row">
      <FormGroup style={{marginRight:"20px"}} className="col-sm-6">
        
        <TextField label="First Name" 
            value={patientData.firstName}
             onChange={e=>setPatient({ ...patientData ,firstName:e.target.value})}
                 id="exampleEmail" placeholder="First Name" style={{width:500}} required />
      </FormGroup>

      <FormGroup>
      <TextField label="Last Name"  
      value={patientData.lastName}
      onChange={e=>setPatient({ ...patientData ,lastName:e.target.value})}
      id="exampleEmail" placeholder="Last Name" style={{width:500}} required />
      
    </FormGroup>
      </div>

      <div className="row">
    <FormGroup style={{marginRight:"20px"}} className="col-sm-6">
    
    <TextField label="National ID"  
    value={patientData.nationalIdOrPassportNumber}
    onChange={e=>setPatient({ ...patientData ,nationalIdOrPassportNumber:e.target.value})}
    id="exampleEmail" placeholder="National ID" style={{width:500}} required />
  </FormGroup>

      <FormGroup>
        <TextField label="Date Of Birth" type="date" name="password"
        value={patientData.dateOfBirth}
        onChange={e=>setPatient({ ...patientData ,dateOfBirth:e.target.value})}
         id="examplePassword" placeholder="Date of Birth" style={{width:500}} required />
      </FormGroup>
    </div>
      

<div className="row">
<FormGroup className="col-sm-6">

<TextField label="CITY" 
      value={patientData.city} 
      onChange={e=>setPatient({ ...patientData ,city:e.target.value})} id="examplePassword"
placeholder="city" style={{width:500}} required/>

</FormGroup>
 <FormGroup className="col-sm-6">
      <TextField label="Address" value={patientData.address}
      onChange={e=>setPatient({ ...patientData ,address:e.target.value})} id="exampleEmail" placeholder="Address" style={{width:500}} required />
    </FormGroup>
</div>


     

<div className="row">
<FormGroup className="col-sm-6">
    <TextField type="email"  label="Email"
    value={patientData.email}
      onChange={e=>setPatient({ ...patientData ,email:e.target.value})} id="exampleEmail" placeholder="Email" style={{width:500}} />
  </FormGroup>


  <FormGroup className="col-sm-6">
  
  <TextField label="Phone Number/ Next of Kin's Phone Number" value={patientData.phoneNumber}
  onChange={e=>setPatient({ ...patientData ,phoneNumber:e.target.value})} id="exampleEmail" placeholder="Phone Number/ Next of Kin's Phone Number" style={{width:500}} required  />
</FormGroup>
</div>
 
<div className="row">
<FormGroup className="col-sm-6">

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
</FormGroup>   


<FormGroup className="col-sm-6">

  <Input type="select" name="gender" value={patientData.gender}
  onChange={e=>setPatient({ ...patientData ,gender:e.target.value})}  id="gender"> 
  <option>Gender</option>
  <option value="MALE">Male</option>
  <option value="FEMALE">Female</option>
  </Input>

</FormGroup> 
</div>


<div align="right">
<Button type="submit" variant="contained" color="success" >
      submit
</Button>
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