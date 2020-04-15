import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {testPatient ,allPatientTests ,onePatientScreen} from '../../../redux/actions/PatientsActions'
import {allKits} from '../../../redux/actions/KitsActions'
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
import moment from 'moment'


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import createMixins from '@material-ui/core/styles/createMixins';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



 function TestPatient() {

    let  para = useParams()
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const content = useSelector((state) => state.patients.alltests);
    const content2 = useSelector((state) => state.kits.allkits);  
    const content3 = useSelector((state) => state.patients.onescreen);
    const username = localStorage.getItem('username')
    const dispatch = useDispatch(allPatientTests(para.id));
    const dispatch2 = useDispatch(allKits());
    const dispatch3 = useDispatch(onePatientScreen(para.id));
    const [ScreenData ,setScreen] =  useState({
        "dateOfTest": moment().format('DD/MM/YYYY'),
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
      dispatch2(allKits())
      dispatch3(onePatientScreen(para.id))
    },[]);

  var a = []
content3.map(x=>{


x.map(y=>{
  console.log(x)
  return  a.push(y.id)

})
    
})



<<<<<<< HEAD
console.log(a)
console.log(content)
=======
console.log(a[0])
>>>>>>> bc10e84612732830d27127797a964a6170add98f



console.log(content)
const handleCloseSubmit = () => {

  
  const  newScreen = {
    "dateOfTest": moment().format('DD/MM/YYYY'),
    "timeOfTest":moment().format('HH:mm'),
    "patientScreeningId":a[0],
    "testKitId":ScreenData.testKitId,
    "testResult": ScreenData.testResult,
    "testingAgentUsername": username,

        }
    dispatchs(testPatient(newScreen))
    console.log(newScreen)
    setOpen(false);

  };



   
  let ap  = content.map((x ,i)=>(

  

      <TableRow key={i}>
      <TableCell>{i +1}</TableCell>
      <TableCell>{x.dateOfTest}</TableCell>
      <TableCell>{x.timeOfTest}</TableCell>
      <TableCell>{x.testingAgentFullName}</TableCell>
      <TableCell>{x.testKitBatchNumber}</TableCell>
      <TableCell>{x.testKitBrandName}</TableCell>
      <TableCell>{x.result}</TableCell>
  
    
      </TableRow>
    

    ))








  
    return (<div>
        <h5 className="h" style={{borderLeft:"10px solid #4c8c40"}}>Patel Test</h5>

        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        New Test
      </Button>
    

        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No#</TableCell>
              <TableCell >Date</TableCell>
              <TableCell >Time</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell >Kit USed</TableCell>
              <TableCell >Brand Name</TableCell>
              <TableCell >Result</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
             

              {ap}
        
          </TableBody>
        </Table>
    





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

        <Col md={12} >
        <FormGroup>
          <Label for="exampleCity">Testing Kit:</Label>
             <Input type="select" name="travelled" value={ScreenData.testResult}  onChange={e=>setScreen({ ...ScreenData ,testKitId:e.target.value})} > 
            
             {content2.map((team) => <option key={team.value} value={team.id}>{team.brandName}</option>)}
                 </Input>
                 </FormGroup>
               </Col>

          <Col md={12}>

          <FormGroup>
              <Label for="exampleCity">Test Kit Result:</Label>
                 <Input type="select" name="travelled" value={ScreenData.testResult}  onChange={e=>setScreen({ ...ScreenData ,testResult:e.target.value})} > 
          <option>Select</option>
          <option value="POSITIVE">POSITIVE</option>
          <option value="NEGATIVE">NEGATIVE</option>
          </Input>
            </FormGroup>
          
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