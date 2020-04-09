import React from 'react';
import Submenu from '../layout/Agent/SubMenu' 
import {
   Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

import {Link}  from 'react-router-dom'
import { useHistory } from "react-router";
 

const TestPatient  = () =>{

  
  let history = useHistory()

  function handleClose(){

    history.goBack()
   }
  

  return (

    <div responsive>
    <Submenu />

    <Col  style={styles.container} sm="12" md={{ size: 6, offset: 3 }}>
    <Button className='btn-secondary' style={{marginBottom:10,marginTop:10}} onClick={handleClose}>Close</Button>
    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>
        Test Patient:Patel  
        </h1>
    <Form  style={{width:'100%'}}>
      <FormGroup>
        <Label for="exampleEmail">BrandName Kit</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>

      <FormGroup>
      <Label for="exampleEmail">Batch Number</Label>
      <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
    </FormGroup>
 

    <Col sm={{ size: 10, offset: 4}}>
    <Button color="success"  style={{width:200}}><Link style={{color:'white'}} to="/patientDetails">Save Test</Link></Button>
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
    boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    paddingBottom:50
  

  
},






}

export default TestPatient;