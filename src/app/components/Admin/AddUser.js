import React ,{useState ,useEffect} from 'react';
import {
  Form,
  FormGroup,Input,
  Col
} from 'reactstrap';
import Alert from '@material-ui/lab/Alert';
import {Allfacility} from '../../../redux/actions/KitsActions'
import { useDispatch, useSelector } from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import { TextField } from '@material-ui/core';
import cityList  from '../Agent/city'
import axios from 'axios'
import api from '../../../utils/helpers/api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AddUser  = () =>{


  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [errorMessage,
    setErrorMsage] = useState('')

  const handleClick = () => {
    setOpen(true);
  };
  const handleClickError = (x) => {
    setErrorMsage(x)
      setOpenError(true);
    };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);

  };

 const handleCloseError = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenError(false);
      
    };
  
  const content = useSelector((state) => state.kits.allfacility);
  

  const dispatchs = useDispatch(Allfacility());
  

  
  
  console.log(content)

  const [newUser ,setUser] = useState({

    "city": "NOT_PROVIDED",
    "province":"NOT_PROVIDED",
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



  function handleAgent(){


    if(newUser.group === 'AGENT'){


      return  <div className="row">
      
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
      
      <FormGroup className="col-sm-12">

      
      <Input type="select" name="group"  value={newUser.testingFacility} 
      onChange={e=>setUser({ ...newUser ,testingFacility:e.target.value})}> 
               <option>Testing Facility</option>
              {content.map((team) => <option key={team.id} value={team.id}>{team.testingFacilityName}</option>)}
              </Input>
    </FormGroup>

    </div>
  



    }


   
  }

  let userCommand ={

   "userCommand":{
     "firstName":newUser.firstName,
     "lastName":newUser.lastName ,
     "group":newUser.group,
     username:newUser.username,
     "gender":newUser.gender,
     "phoneNumber": newUser.phoneNumber,
     "email": newUser.email,
     "nationalIdNumber":newUser.nationalIdNumber,
     "passportNumber": newUser.nationalIdNumber,
     "address": {
      "city": newUser.city,
      "province": newUser.province,
      "streetAddress": newUser.streetAddress
    },

   },

   "qualification": newUser.qualification,
   "practicingNumber": newUser.practicingNumber,
   "addressOfPractice": newUser.addressOfPractice,
   "testingFacilityId":newUser.testingFacility,

}


const adminCommand = 

  {
    "address": {
     
      "streetAddress": newUser.streetAddress,
      "city": newUser.city,
      "province": newUser.province
      
    },
    

    "firstName":newUser.firstName,
    "lastName":newUser.lastName ,
    "group":newUser.group,
    username:newUser.username,
    "gender":newUser.gender,
    "phoneNumber": newUser.phoneNumber,
    "email": newUser.email,
    "nationalIdNumber":newUser.nationalIdNumber,
    "passportNumber": newUser.nationalIdNumber,
  }

   





 
  useEffect(() => {
    dispatchs(Allfacility());
  }, [dispatchs])



  console.log(newUser.testingFacility)


    
  function handleSubmit(e) {
    e.preventDefault();
    if (newUser) {


      if(newUser.group === 'ADMIN'){

        axios.post(`${api.apiUrl}/users` ,adminCommand)
        .then(resp=>{


         handleClick()
        setUser({
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
         "username": ''})
         
        }).catch(err=>{
         handleClickError(err.response.data.message)
         
        })




      }else{


        
        axios.post(`${api.apiUrl}/testing-agents` ,userCommand)
        .then(resp=>{


         handleClick()
        setUser({
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
         "username": ''})
         
        }).catch(err=>{
         handleClickError(err.response.data.message)
         
        })


        
      }

    
      console.log(userCommand)
  


    }
}



  return (

    <div>
   <h5 className="h" style={styles.h}>New User</h5>
   <div className={classes.root}>
      
      <Snackbar open={open} anchorOrigin={{
      vertical: "top",
      horizontal: "center"}} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          User added successfully
        </Alert>
      </Snackbar>
   
   
      <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError} anchorOrigin={{
      vertical: "top",
      horizontal: "center"}}>
      <Alert onClose={handleCloseError} severity="error">
        {errorMessage}
      </Alert>
    </Snackbar>
    
    </div>



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
    
    <TextField label="Username" 
          value={newUser.username} 
          
          onChange={e=>setUser({ ...newUser ,username:e.target.value})}
           placeholder="Username" required />
  </FormGroup>
  
  
  
  <FormGroup className="col-sm-6">
    
  <TextField label="National ID Number" 
        value={newUser.nationalIdNumber} 
        
        onChange={e=>setUser({ ...newUser ,nationalIdNumber:e.target.value})}
         placeholder="e.g 63-1234567A12" required />
</FormGroup></div>

  
  <div className="row">


    </div>


       
    <FormGroup className="col-sm-12">
      
    <TextField label="Residential Addresss" 
           value={newUser.streetAddress}
           onChange={e=>setUser({ ...newUser ,streetAddress:e.target.value})}
           placeholder="Residential Addresss"/>
  </FormGroup>



    
    <div className="row">
    
 
  

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
  
    

   {handleAgent()}


      </div>

    <div className="row">
    <FormGroup className="col-sm-6">
    
    <TextField label="Email" type="email" name="email" value={newUser.email} onChange={e=>setUser({ ...newUser ,email:e.target.value})} id="exampleEmail" placeholder="Email" />
  </FormGroup>


  <FormGroup className="col-sm-6">
  
  <TextField label="Phone Number" 
         value={newUser.phoneNumber} 
         onChange={e=>setUser({ ...newUser ,phoneNumber:e.target.value})}
         placeholder="e.g +263772123456" required/>
</FormGroup>
    </div>



<div className="row">
<FormGroup className="col-sm-6">
<Input type="select" name="travelled" value={newUser.countryVisited} onChange={e=>setUser({ ...newUser ,city:e.target.value})} >
<option>City</option>
{cityList.map((team ,i) => <option key={team.i} value={team}>{team}</option>)}

</Input>

</FormGroup>


<FormGroup className="col-sm-6">
<Input type="select" name="group"  value={newUser.province} 
      onChange={e=>setUser({ ...newUser ,province:e.target.value})}> 
              <option>Province</option>
          
              <option value="MANICALAND">MANICALAND</option>
              <option value="HARARE">HARARE</option>
              <option value="BULAWAYO">BULAWAYO</option>
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