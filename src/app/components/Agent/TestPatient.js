import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {testPatient ,allPatientTests} from '../../../redux/actions/PatientsActions'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useLocation ,useParams} from 'react-router'
import {Col,Label,Input,FormGroup,Form ,Row }  from 'reactstrap'


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



 function TestPatient() {

    let  para = useParams()
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const content = useSelector((state) => state.patients.allpatients);
    const username = localStorage.getItem('username')
    const dispatch = useDispatch(allPatientTests(para.id));
    const [ScreenData ,setScreen] =  useState({
        "dateOfTest": new Date().toLocaleString(),
        "patientScreeningId":para.id,
        "testKitId":1,
        "testResult": "POSITIVE",
        "testingAgentUsername": '' 
    })




    const handleClickOpen = () => {
      setOpen(true);
    };


  
    const handleClose = () => {
      setOpen(false);
    };

    
    
  const dispatchs = useDispatch();
    useEffect(() => {
      dispatch(allPatientTests(para.id));
    },[]);




    console.log(content)


 


const handleCloseSubmit = () => {

  const  newScreen = {
    "dateOfTest": new Date().toLocaleString(),
    "patientScreeningId":para.id,
    "testKitId":1,
    "testResult": "POSITIVE",
    "testingAgentUsername": username,

        }
    dispatchs(testPatient(newScreen))
    setOpen(false);

  };






















  
    return (<div>
        <h5 className="h" style={{borderLeft:"10px solid #4c8c40"}}>Patel Test</h5>

        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        New Test
      </Button>
    
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No#</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">TEst  Kit</TableCell>
              <TableCell align="right">Test Agent</TableCell>
              <TableCell align="right">Result</TableCell>
              <TableCell align="right">Action</TableCell>
        
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                1
                </TableCell>
                <TableCell align="right">01/01/01</TableCell>
                <TableCell align="right">Red Cross 123</TableCell>
                <TableCell align="right">Doc Tawa</TableCell>
                <TableCell align="right">Positive</TableCell>
              
              </TableRow>
        
          </TableBody>
        </Table>
      </TableContainer> 





      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Testing  Details</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
<form>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleCity">Testing Kit:</Label>
                 <Input type="select" name="travelled" value={ScreenData.coughPresent}  onChange={e=>setScreen({ ...ScreenData ,coughPresent:e.target.value})} > 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>

          <Col md={12}>

          iubuib
          
          </Col>
      
        </Row>
         

        </form>
    
        
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCloseSubmit} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>





















      </div>
    )
}


export default TestPatient