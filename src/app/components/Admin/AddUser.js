import React ,{useState ,useEffect} from 'react';
import {
  Form,
  FormGroup,Input,
  Col
} from 'reactstrap';
import {addUser} from '../../../redux/actions/authActions'
import {Allfacility} from '../../../redux/actions/KitsActions'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { TextField } from '@material-ui/core';

const AddUser  = () =>{

  
  const content = useSelector((state) => state.kits.allfacility);
  

  const dispatchs = useDispatch(Allfacility());
  


  let history = useHistory()
  
  
  console.log(history)

  const [newUser ,setUser] = useState({

    "city": "",
    "province":"",
    streetAddress:'',
    "addressOfPractice": "",
    "email": "",
    "firstName": "",
    "gender": "",
    "lastName": "",
    group:'',
    testingFacility:0,
    "nationalIdNumber": "",
    "passportNumber":'',
    "practicingNumber": "",
    "qualification": "",
    "phoneNumber":"",
    "username": ""
  
  })

  var userData = {

    "x":{

   
    "userCommand":{

      "dateOfBirth": newUser.dateOfBirth,
        "email": newUser.email,
        "firstName": newUser.firstName,
        "lastName":newUser.lastName,
        "gender":newUser.gender,
        "testingFacilityId":newUser.testingFacility,
        "group": newUser.group,
        "passortNumber":newUser.nationalIdNumber,
        "nationalIdNumber":newUser.nationalIdNumber,
        "phoneNumber": newUser.phoneNumber,
        "address": {
          "city": newUser.city,
          "province": newUser.province,
          "streetAddress": newUser.streetAddress
        }
    },
      "addressOfPractice": newUser.addressOfPractice,
      "practicingNumber": newUser.practicingNumber,
      "qualification": newUser.qualification,
      "testingFacilityId":newUser.testingFacilityId
   
  }

}




  const dispatch = useDispatch();
  useEffect(() => {
    dispatchs(Allfacility());
  }, [])


  console.log(content)



    
  function handleSubmit(e) {
    e.preventDefault();
    if (newUser) {

      console.log(userData)
      dispatch(addUser(userData))


    }
}



  return (

    <div>
   <h5 className="h" style={styles.h}>New User</h5>
   <Col sm="12" md={{ size: 6, offset: 3 }}>
<Form className="col-sm-12" onSubmit={handleSubmit}>
      <div className="row">
      <FormGroup className="col-sm-6">
        <TextField label="First Name" 
               value={newUser.firstName}  
               
             onChange={e=>setUser({ ...newUser ,firstName:e.target.value})}
               placeholder="First Name" className="formControl" required />
      </FormGroup>

      <FormGroup className="col-sm-6">
    
      <TextField label="Last Name"
            value={newUser.lastName} 
            
            onChange={e=>setUser({ ...newUser ,lastName:e.target.value})}
              placeholder="last Name" required />
    </FormGroup>
      </div>

    <div className="row">
    <FormGroup className="col-sm-6">
    
    <TextField label="User Name" 
          value={newUser.username} 
          
          onChange={e=>setUser({ ...newUser ,username:e.target.value})}
           placeholder="username" required />
  </FormGroup>
  
  
  
  <FormGroup className="col-sm-6">
    
  <TextField label="National Id Number" 
        value={newUser.nationalIdNumber} 
        
        onChange={e=>setUser({ ...newUser ,nationalIdNumber:e.target.value})}
         placeholder="e.g 63-1234567A12" required />
</FormGroup></div>

  
  <div className="row">


      <FormGroup className="col-sm-6">
        
        <TextField label="Qualification" 
               value={newUser.qualification}
               
             onChange={e=>setUser({ ...newUser ,qualification:e.target.value})} 
               placeholder="Qualification" required />
      </FormGroup>

      
      <FormGroup className="col-sm-6">
      
      <TextField label="Practicing Number" 
             value={newUser.practicingNumber}
             onChange={e=>setUser({ ...newUser ,practicingNumber:e.target.value})}
             placeholder="practicing number" required />
    </FormGroup>


     
  


    </div>

    <div className="row">
    
 
    <FormGroup className="col-sm-12">
      
    <Input type="select" name="group"  value={newUser.testingFacility} 
    onChange={e=>setUser({ ...newUser ,testingFacility:e.target.value})}> 
             <option>Testing Facility</option>
            {content.map((team) => <option key={team.id} value={team.id}>{team.testingFacilityName}</option>)}
            </Input>
  </FormGroup>

  </div>

      <div className="row">
      <FormGroup className="col-sm-6">
      
      <Input type="select" name="group"  value={newUser.gender} 
      onChange={e=>setUser({ ...newUser ,gender:e.target.value})}> 
               <option>Gender</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              </Input>
    </FormGroup>

    <FormGroup className="col-sm-6">
      
    <Input type="select" name="group"  value={newUser.group} 
    onChange={e=>setUser({ ...newUser ,group:e.target.value})}> 
             <option>Role</option>
            <option value="AGENT">AGENT</option>
            <option value="ADMIN">ADMIN</option>
            </Input>
  </FormGroup>
  
    




      </div>

    <div className="row">
    <FormGroup className="col-sm-6">
    
    <TextField label="Email" type="email" name="email" value={newUser.email} onChange={e=>setUser({ ...newUser ,email:e.target.value})} id="exampleEmail" placeholder="Email" />
  </FormGroup>


  <FormGroup className="col-sm-6">
  
  <TextField label="Phone Number" 
         value={newUser.phoneNumber} 
         onChange={e=>setUser({ ...newUser ,phoneNumber:e.target.value})}
         placeholder="+263772123456" required/>
</FormGroup>
    </div>


<div className="row">
<FormGroup className="col-sm-6">
<TextField label="Address of Practise"
      value={newUser.addressOfPractice} 
      onChange={e=>setUser({ ...newUser ,addressOfPractice:e.target.value})}
placeholder="Enter Practising Address" required />

</FormGroup>



<FormGroup className="col-sm-6">
<Input type="select" name="group"  value={newUser.province} 
      onChange={e=>setUser({ ...newUser ,province:e.target.value})}> 
              <option>Province</option>
              <option value="BULAWAYO">BULAWAYO</option>
              <option value="HARARE">HARARE</option>
              <option value="MANICALAND">MANICALAND</option>
              <option value="MASHONALAND_CENTRAL">MASHONALAND_CENTRAL</option>
              <option value="MASHONALAND_EAST">MASHONALAND_EAST</option>
              <option value="MASHONALAND_WEST">MASHONALAND_WEST</option>
              <option value="MASVINGO">MASVINGO</option>
              <option value="MATABELELAND_NORTH">MATABELELAND_NORTH</option>
              <option value="MATABELELAND_SOUTH">MATABEKELAND_SOUTH</option>
              <option value="MIDLANDS">MIDLANDS</option>
              
              </Input>
</FormGroup>
</div>


<div className="row">
<FormGroup className="col-sm-6">
<TextField label="CITY" 
      value={newUser.city} 
      onChange={e=>setUser({ ...newUser ,city:e.target.value})}
placeholder="city" required />

</FormGroup>


<FormGroup className="col-sm-6">
<TextField label="Street Address" 
      value={newUser.streetAddress} 
      onChange={e=>setUser({ ...newUser , streetAddress:e.target.value})}
placeholder="city" required />

</FormGroup>

</div>


<div align="right">
<button className="btn btn-success"  type="submit">submit</button>
</div>




  
    </Form>
    
    
  </Col>
  
  </div>
  );
}

const styles = {

h:{
  borderLeft:"10px solid #4c8c40",
  
}
}
export default AddUser;