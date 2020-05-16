import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {allKits} from '../../../redux/actions/KitsActions'

import Alert from '@material-ui/lab/Alert';
import {Col,Label,Input,FormGroup,Row }  from 'reactstrap'
import moment from 'moment'
import axios from 'axios'
import {TextField} from '@material-ui/core'
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




 function NewTest({next}) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const content2 = useSelector((state) => state.kits.allkits);  
  
  const dispatch2 = useDispatch(allKits());
  useEffect(() => {

    dispatch2(allKits())

  },[dispatch2]);




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
    next()
  };

 const handleCloseError = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenError(false);
      
    };

    
    const [ScreenData ,setScreen] =  useState({
        "dateOfTest": moment().format('DD/MM/YYYY'),
        "patientScreeningId":'3234',
        "testKitId":1,
        "testResult": "",
        "batchNumber":"",
        "serialNumber":"",
        "testingAgentUsername": '' 
    })


    console.log(content2)

const handleSubmit = (e) => {

  e.preventDefault()
  let a = localStorage.getItem('username')
   let b  = localStorage.getItem('partnerID')
  
  
  const  newScreen = {
    "dateOfTest": moment().format('DD/MM/YYYY'),
    "timeOfTest":moment().format('HH:mm'),
    "patientScreeningId":b,
    "testKitTypeId":ScreenData.testKitId,
    "testResult": ScreenData.testResult,
    "batchNumber": ScreenData.batchNumber,
    "serialNumber": ScreenData.serialNumber,
    "testingAgentUsername": a,

        }


        console.log(newScreen)

        axios.post(`${api.apiUrl}/tests` ,newScreen)
             .then(resp=>{

                localStorage.setItem('testId' ,resp.data.id)
                handleClick()  
             }
              )
              .catch(err=>{

                handleClickError()
              })

    

  };



  return (

    <div>
   <h5 className="h" style={styles.h}>Test Patient</h5>


   <div className={classes.root}>
      
   <Snackbar open={open} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }} onClose={handleClose}
   autoHideDuration={5000}>
     <Alert onClose={handleClose} severity="success">
       Patient tested successfully!
     </Alert>
   </Snackbar>


   <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
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
     <Label for="exampleCity">Testing Kit:</Label>
        <Input type="select" name="travelled" value={ScreenData.testKitId}  onChange={e=>setScreen({ ...ScreenData ,testKitId:e.target.value})} > 
       
       <option>SELECT</option>
       {content2.map((team) => <option key={team.id} value={team.id}>{team.brandName}</option>)}
            </Input>
            </FormGroup>
          </Col>

     <Col md={12}>

     <FormGroup>
         <Label for="exampleCity">Test  Result:</Label>
            <Input type="select"  value={ScreenData.testResult}  onChange={e=>setScreen({ ...ScreenData ,testResult:e.target.value})} > 
     <option vale="SELect">Select</option>
     <option value="POSITIVE">Positive</option>
     <option value="NEGATIVE">Negative</option>
     <option value="INCONCLUSIVE">Inconclusive</option>
     </Input>
       </FormGroup>
   
     </Col>

     <Col md={12}>

     <FormGroup>
  
            <TextField label="Batch Number"  value={ScreenData.batchNumber}  onChange={e=>setScreen({ ...ScreenData ,batchNumber:e.target.value})} fullWidth placeholder="Batch Number"  required/> 
   
       </FormGroup>
     
     </Col>
     <Col md={12}>

<FormGroup>

       <TextField label="Serial Number" name="travelled" value={ScreenData.serialNumber}  onChange={e=>setScreen({ ...ScreenData ,serialNumber:e.target.value})} fullWidth placeholder="Serial Number" /> 

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
export default NewTest;