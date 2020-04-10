import React , {useState} from 'react';
import Submenu from '../layout/Agent/SubMenu' 
import {
   Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { useDispatch,} from 'react-redux';
import {addPatient} from '../../../redux/actions/PatientsActions'
import { useHistory } from "react-router";


const AddPatient  = () =>{

  const [patientData ,setPatient]  =  useState(
  {
    "address": "",
    "email": "",
    "firstName": "",
    "group": "PATIENT",
    "lastName": "",
    "nationalIdOrPassportNumber": "",
    "phoneNumber":"",
    "gender":"",
    
  })

  console.log(patientData)

  const dispatch = useDispatch();
  
  let history = useHistory()


  function handleSubmit(e) {
    e.preventDefault();
    if (patientData) {
        dispatch(addPatient(patientData))
    }
}

function handleClose(){

  history.goBack()
 }

  return (

    <div responsive>
        
    <Col  style={styles.container} sm="12" md={{ size: 6, offset: 3 }}>


    <Button className='btn-danger'  onClick={handleClose}>Close</Button>
    
    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>
    New Patient
     </h1>
    <Form  style={{width:'100%'}} onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">First Name</Label>
        <Input type="text" 
            value={patientData.firstName}
             onChange={e=>setPatient({ ...patientData ,firstName:e.target.value})}
                 id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>

      <FormGroup>
      <Label for="exampleEmail">Last Name</Label>
      <Input type="text"    value={patientData.lastName}
      onChange={e=>setPatient({ ...patientData ,lastName:e.target.value})}
      id="exampleEmail" placeholder="with a placeholder" />
      
    </FormGroup>

    <FormGroup>
    <Label for="exampleEmail">National ID</Label>
    <Input type="username"  
    
    value={patientData.nationalIdOrPassportNumber}
    onChange={e=>setPatient({ ...patientData ,nationalIdOrPassportNumber:e.target.value})}
    id="exampleEmail" placeholder="with a placeholder" />
  </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Date Of Birth</Label>
        <Input type="date" name="password"
        value={patientData.dateOfBirth}
        onChange={e=>setPatient({ ...patientData ,dateOfBirth:e.target.value})}
         id="examplePassword" placeholder="password placeholder" />
      </FormGroup>


      <FormGroup>
      <Label for="exampleEmail">Address</Label>
      <Input type="text"  value={patientData.address}
      onChange={e=>setPatient({ ...patientData ,address:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
    </FormGroup>


    <FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input type="email"  
    value={patientData.email}
      onChange={e=>setPatient({ ...patientData ,email:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
  </FormGroup>


  <FormGroup>
  <Label for="exampleEmail">Phone Number</Label>
  <Input type="text"  value={patientData.phoneNumber}
  onChange={e=>setPatient({ ...patientData ,phoneNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>


<FormGroup row>
<Label for="gender" sm={2}>Gender:</Label>
<Col sm={10}>
  <Input type="select" name="gender" value={patientData.gender}
  onChange={e=>setPatient({ ...patientData ,gender:e.target.value})}  id="gender"> 
  <option>Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
 

  
  </Input>
</Col>
</FormGroup> 

<Col sm={{ size: 10, offset: 4}}>
<Button color="success" type="submit"  style={{width:200}}> Add Patient</Button>
</Col>
  
    </Form>
    
    
    </Col>
    
  
  
  </div>
  );
}




const styles = {

  container:{
    
     
     border:"4px solid green",
    marginTop:"150px",
    backgroundColor:"#fff" ,
    positon:'inherit',
    boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  

  
},






}

export default AddPatient;