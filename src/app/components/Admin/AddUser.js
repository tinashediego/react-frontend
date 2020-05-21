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
import Grid from '@material-ui/core/Grid';
import cityList  from '../Agent/city'
import HarareSurburbs from '../Agent/Haras'
import BulawayoSurbubs from '../Agent/Blues'
import MidlandsCities from '../Agent/MIDLANDS'
import matN from '../Agent/MatableNorth'
import matSouth from '../Agent/MatabelendSouth'
import masvingo from '../Agent/Masvingo'
import manicaland from '../Agent/Manicalands'
import mashcent from '../Agent/MAshCent'
import masheast from '../Agent/masheast'
import mashwest from '../Agent/MashWest'

import axios from 'axios'
import api from '../../../utils/helpers/api';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

  function handleCities() {

       

    switch (newUser.city) {
        case 'HARARE':

            return (
                <Grid item xs={6}>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Surburb</InputLabel>
                        <Select
                            native
                            value={newUser.suburb}
                            onChange={e => setUser({
                            ...newUser,
                            suburb: e.target.value
                        })}
                            inputProps={{
                            name: 'suburb',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {HarareSurburbs.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )

        case 'BULAWAYO':

            return (
                <Grid item xs={6}>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Surburb</InputLabel>
                        <Select
                            native
                            value={newUser.suburb}
                            onChange={e => setUser({
                            ...newUser,
                            suburb: e.target.value
                        })}
                            inputProps={{
                            name: 'suburb',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {BulawayoSurbubs.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )

        default:
            break;
    }

}

function handleProvinces() {

    switch (newUser.province) {
        case 'MIDLANDS':
            return (
                <Grid item xs={6} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'suburb',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {MidlandsCities.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )

        case "MANICALAND":
            return (
                <Grid item xs={6} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'city',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {manicaland.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )
        case "MASHONALAND_CENTRAL":
            return (
                <Grid item xs={6} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'city',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {mashcent.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )
        case "MASHONALAND_EAST":
            return (
                <Grid item xs={6} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'city',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {masheast.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )
        case "HARARE":
            return (
                <Grid item xs={6} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'city',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/>

                            <option value="HARARE">HARARE</option>
                            <option value="CHITUNGWIZA">CHITUNGWIZA</option>
                            <option value="EPWORTH">EPWORTH</option>
                        </Select>
                    </FormControl>

                </Grid>
            )
        case "BULAWAYO":
            return (
                <Grid item xs={6}>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'suburb',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/>
                            <option value="BULAWAYO">BULUWAYO</option>
                        </Select>
                    </FormControl>

                </Grid>
            )
        case "MASHONALAND_WEST":
            return (
                <Grid item xs={6}>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'city',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {mashwest.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )

        case "MASVINGO":
            return (
                <Grid item xs={6} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'city',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {masvingo.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )
        case "MATABELELAND_NORTH":
            return (
                <Grid item xs={6}>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'city',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {matN.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )

        case "MATABELELAND_SOUTH":

            return (
                <Grid item xs={6} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                        <Select
                            native
                            value={newUser.city}
                            onChange={e => setUser({
                            ...newUser,
                            city: e.target.value
                        })}
                            inputProps={{
                            name: 'city',
                            id: 'age-native-simple'
                        }}>
                            <option aria-label="None" value=""/> {matSouth.map((team) => <option key={team.value} value={team}>{team}</option>)}
                        </Select>
                    </FormControl>

                </Grid>
            )

        default:
            break;
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
         "phoneNumber":'+263' + newUser.phoneNumber.substr(1),
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
         "phoneNumber":'+263' + newUser.phoneNumber.substr(1),
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
<FormGroup className="col-sm-6">

<TextField label="Email" type="email" name="email" value={newUser.email} onChange={e=>setUser({ ...newUser ,email:e.target.value})} id="exampleEmail" placeholder="Email" />
</FormGroup>


<FormGroup className="col-sm-6">

<TextField label="Phone Number" 
type="number"
     value={newUser.phoneNumber} 
     onChange={e=>setUser({ ...newUser ,phoneNumber:e.target.value})}
     placeholder="0772123456" required/>


  
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



{handleAgent()}


</div>

       
    

<Grid  item xs={6}>
<FormControl className={classes.formControl}>

<TextField label="Residential Addresss" 
     value={newUser.streetAddress}
     onChange={e=>setUser({ ...newUser ,streetAddress:e.target.value})}
     placeholder="Residential Addresss"/>


     </FormControl>
      

</Grid>

  

  <Grid item xs={12}>


  <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-simple">Province</InputLabel>
      <Select
          native
          value={newUser.province}
          required
          onChange={e => setUser({
          ...newUser,
          province: e.target.value
      })}
          inputProps={{
          name: 'province',
          id: 'age-native-simple'
      }}>
          <option aria-label="None" value=""/>
          <option value="MANICALAND">MANICALAND</option>
          <option value="MASHONALAND_CENTRAL">MASHONALAND CENTRAL</option>
          <option value="MASHONALAND_EAST">MASHONALAND EAST</option>
          <option value="HARARE">HARARE</option>
          <option value="BULAWAYO">BULAWAYO</option>
          <option value="MASHONALAND_WEST">MASHONALAND WEST</option>
          <option value="MASVINGO">MASVINGO</option>
          <option value="MATABELELAND_NORTH">MATABELELAND_NORTH</option>
          <option value="MATABELELAND_SOUTH">MATABELELAND_SOUTH</option>
          <option value="MIDLANDS">MIDLANDS</option>
      </Select>
  </FormControl>

</Grid>
{handleProvinces()}
{handleCities()}




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