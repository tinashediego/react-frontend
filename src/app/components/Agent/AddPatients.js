import React , {useState} from 'react';
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
    dateOfBirth:new Date(),
    "nationalIdOrPassportNumber": "",
    "phoneNumber":"",
    "gender":"",
    "city":"",
    "province":""
    
  })

  let current_datetime =  new Date(patientData.dateOfBirth)
let formatted_date =  current_datetime.getDate()+'/' +(current_datetime.getMonth() + 1) +'/' + current_datetime.getFullYear() 



  

  var newPatient={
  userCommand: {
    "fullName":patientData.firstName,
    "group":patientData.group,
    "gender": patientData.gender,
    "phoneNumber": patientData.phoneNumber,
    "email": patientData.email,
    "nationalIdNumber":patientData.nationalIdOrPassportNumber,
    "passportNumber": patientData.nationalIdOrPassportNumber,
    "dateOfBirth":formatted_date,
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
      
<FormGroup >
<Label for="exampleEmail">Province</Label>
<Input type="select" name="group"  value={patientData.province} 
      onChange={e=>setPatient({ ...patientData ,province:e.target.value})}> 
              <option>Select</option>
              <option value="BULAWAYO">BULAWAYO</option>
              <option value="HARARE">HARARE</option>
              <option value="MANICALAND">MANICALAND</option>
              <option value="MASHONALAND_CENTRAL">MASHONALAND_CENTRAL</option>
              <option value="MASHONALAND_EAST">MASHONALAND_EAST</option>
              <option value="MASHONALAND_WEST">MASHONALAND_WEST</option>
              <option value="MASVINGO">MASVINGO</option>
              <option value="MATABELELAND_NORTH">MATABELELAND_NORTH</option>
              <option value="MATABEKELAND_SOUTH">MATABEKELAND_SOUTH</option>
              <option value="MIDLANDS">MIDLANDS</option>
              
              </Input>
</FormGroup>

<FormGroup className="col-sm-6">
<Label for="exampleEmail">CITY</Label>
<Input type="text" 
      value={patientData.city} 
      onChange={e=>setPatient({ ...patientData ,city:e.target.value})}
placeholder="city" />

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
  <option value="MALE">Male</option>
  <option value="FEMALE">Female</option>
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