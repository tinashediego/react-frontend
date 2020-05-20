import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {allKits} from '../../../redux/actions/KitsActions'
import Alert from '@material-ui/lab/Alert';
import {Col,Label,Input,FormGroup ,Row }  from 'reactstrap'
import moment from 'moment'
import axios from 'axios'
import { TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../../utils/helpers/api';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));




 function Defect() {

  const content2 = useSelector((state) => state.kits.allkits);  


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);



  
  const handleClick = () => {
    setOpen(true);
  };
  const handleClickError = () => {
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

  const dispatch2 = useDispatch(allKits());
  useEffect(() => {

    dispatch2(allKits())

  },[dispatch2]);
    
    const [ScreenData ,setScreen] =  useState({
        "dateOfTest": moment().format('DD/MM/YYYY'),
        "patientScreeningId":'3234',
        "testKitId":1,
        "testResult": '',
        "batchNumber": '',
        "serialNumber": '',
        "testingAgentUsername": '' 
    })

  

function handleSubmit(e) {
  e.preventDefault()
  let a = localStorage.getItem('username')
 
  
var newScreen = {
  

      "testKitTypeId":ScreenData.testKitId,    
      "batchNumber": ScreenData.batchNumber,
      "serialNumber": ScreenData.serialNumber,
      "testingAgentUsername": a

        }

        

        axios.post(`${api.apiUrl}/test-kits/register-defective` ,newScreen)
             .then(resp=>{
              

              setScreen({
                "dateOfTest": moment().format('DD/MM/YYYY'),
                "patientScreeningId":'3234',
                "testKitId":1,
                "testResult": '',
                "batchNumber": '',
                "serialNumber": '',
                "testingAgentUsername": '' 
            })
              handleClick() 
             
             }
             
              )
              .catch(err=>{

                handleClickError()
              })

             

  };








  return (

    <div>
   <h5 className="h" style={styles.h}>Register Defect</h5>





   
   <div className={classes.root}>
      
   <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{
      vertical: "top",
      horizontal: "center"}} onClose={handleClose}>
     <Alert onClose={handleClose} severity="success">
       Defect registered successfully
     </Alert>
   </Snackbar>


   <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
   <Alert onClose={handleCloseError} severity="error">
     There was an error, try again 
   </Alert>
 </Snackbar>
 
 </div>

   <Col sm="12" md={{ size: 6, offset: 3 }}>
   <form onSubmit={handleSubmit}>
   <Row form>

   <Col md={12} >
   <FormGroup>
     <Label for="exampleCity">Select Defect</Label>
        <Input type="select" name="travelled" value={ScreenData.testKitId}  onChange={e=>setScreen({ ...ScreenData ,testKitId:e.target.value})} > 
       
       <option>SELECT</option>
       {content2.map((team) => <option key={team.id} value={team.id}>{team.brandName}</option>)}
            </Input>
            </FormGroup>
          </Col>

          <Col md={12} >

          </Col>

          <Col md={12} >
   <FormGroup>
    
        <TextField label="Batch Number" name="travelled" placeholder="Batch Number" value={ScreenData.batchNumber} 
      onChange={e=>setScreen({ ...ScreenData ,batchNumber:e.target.value})} fullWidth /> 
       
     
            </FormGroup>
          </Col>

     <Col md={12}>

     <FormGroup>
         
            <TextField label="Serial Number" name="travelled" placeholder="Serial Number"
            value={ScreenData.serialNumber} onChange={e=>setScreen({ ...ScreenData ,serialNumber:e.target.value})} fullWidth required /> 
   
       </FormGroup>
     
     </Col>
 
   </Row>

   <div align="right" style={{paddingTop:10}}>
   <button className="btn btn-success" type="submit">submit</button>
</div>
    

   </form>
  </Col>
  
  </div>
  );
}

const styles = {

h:{
  borderLeft:"10px solid #4c8c40",
  
}
}
export default Defect;