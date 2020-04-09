import React ,{useState} from 'react';
import Submenu from '../layout/Admin/SubMenu' 
import {
  Row, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { useDispatch,} from 'react-redux';
import {addUser} from '../../../redux/actions/authActions'
import { useHistory } from "react-router";

const AddUser  = () =>{


  let history = useHistory()
  
  
  console.log(history)

  const [newUser ,setUser] = useState({

    "address": "",
    "addressOfPractice": "",
    "email": "",
    "firstName": "",
    "group": "",
    "lastName": "",
    "nationalIdOrPassportNumber": "",
    "practicingNumber": "",
    "qualification": "",
    "username": ""
  
  })

  const dispatch = useDispatch();


  console.log(newUser)



    
  function handleSubmit(e) {
    e.preventDefault();
    if (newUser) {
      dispatch(addUser(newUser))


    }
}

 function handleClose(){

  history.goBack()
 }


  return (

    <div>
    <Submenu />
    <Col  style={styles.container} sm="12" md={{ size: 6, offset: 3 }}>
    <Button className='btn-secondary' style={{marginTop:10,marginBottom:10}}  onClick={handleClose}>Close</Button>
    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>
    New User


    
     </h1>
    <Form   onSubmit={handleSubmit} >
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" 
               value={newUser.firstName}  
               
             onChange={e=>setUser({ ...newUser ,firstName:e.target.value})}
               placeholder="First Name" />
      </FormGroup>

      <FormGroup>
      <Label for="lastName">Last Name</Label>
      <Input type="text"
            value={newUser.lastName} 
            
            onChange={e=>setUser({ ...newUser ,lastName:e.target.value})}
              placeholder="last Name" />
    </FormGroup>

    <FormGroup>
    <Label for="exampleEmail">User Name</Label>
    <Input type="text" 
          value={newUser.username} 
          
          onChange={e=>setUser({ ...newUser ,username:e.target.value})}
           placeholder="username" />
  </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Qualification</Label>
        <Input type="text" 
               value={newUser.qualification}
               
             onChange={e=>setUser({ ...newUser ,qualification:e.target.value})} 
               placeholder="Qualification" />
      </FormGroup>

      <FormGroup>
      <Label for="examplePassword">Group</Label>
      <Input type="select" name="group"  value={newUser.group} 
      onChange={e=>setUser({ ...newUser ,group:e.target.value})}> 
              <option>Select</option>
              <option value="ADMIN">ADMIN</option>
              <option value="AGENT">AGENT</option>
              </Input>
    </FormGroup>



      <FormGroup>
      <Label for="exampleEmail">Practicing Number</Label>
      <Input type="text" 
             value={newUser.practicingNumber}
             onChange={e=>setUser({ ...newUser ,practicingNumber:e.target.value})}
             placeholder="practicing number" />
    </FormGroup>


    <FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input type="email" name="email" value={newUser.email} onChange={e=>setUser({ ...newUser ,email:e.target.value})} id="exampleEmail" placeholder="Email" />
  </FormGroup>


  <FormGroup>
  <Label for="exampleEmail">Phone Number</Label>
  <Input type="number" 
         value={newUser.phoneNumber} 
         onChange={e=>setUser({ ...newUser ,phoneNumber:e.target.value})} />
</FormGroup>


<FormGroup>
<Label for="exampleEmail">Address of Practise</Label>
<Input type="text" 
      value={newUser.addressOfPractice} 
      onChange={e=>setUser({ ...newUser ,addressOfPractice:e.target.value})}
placeholder="with a placeholder" />
</FormGroup>

<Col sm={{ size: 10, offset: 4}}>
<Button color="success" type="submit"  style={{width:200}}>Add user</Button>
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

export default AddUser;