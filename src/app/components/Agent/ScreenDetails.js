import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {onePatientScreen ,updateTest} from '../../../redux/actions/PatientsActions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import {useParams} from 'react-router'
import {Col,Label,Input,FormGroup,Form ,Row }  from 'reactstrap'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function patientsData(number, bodyAchesPresent, coldsPresent,coughPresent,diarrhoeaPresent,
  difficultiesInBreathingPresent,fatiguePresent,feverPresent,hasATravelHistoryToACovid19InfectedArea,
  hasDirectContactWithCovid19Patient, hasTravelledPast14Days,headachePresent) {

  return {number, bodyAchesPresent, coldsPresent,coughPresent,diarrhoeaPresent,
    difficultiesInBreathingPresent,fatiguePresent,feverPresent,hasATravelHistoryToACovid19InfectedArea,hasDirectContactWithCovid19Patient,
    hasTravelledPast14Days,headachePresent};
}

const rows = [
  patientsData(1, 'yes', 'yes','yes','yes','yes','yes','yes', 'yes','yes','yes','yes'),
  
  
].sort((a, b) => (a.number < b.number ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});




 function ScreenDetails() {

  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };




    let  para = useParams()

    console.log(para)
  

   


    const [open, setOpen] = useState(false);
    const [ScreenData ,setScreen] =  useState({

        
    "bodyAchesPresent": true,
    "coldsPresent": true,
    "coughPresent": true,
    "diarrhoeaPresent": true,
    "difficultiesInBreathingPresent": true,
    "fatiguePresent": true,
    "feverPresent": true,
    "hasATravelHistoryToACovid19InfectedArea": true,
    "hasDirectContactWithCovid19Patient": true,
    "hasTravelledPast14Days": true,
    "headachePresent": true, 
     partnerId:para.id

    })

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const content = useSelector((state) => state.patients.onescreen);


    const dispatch = useDispatch(onePatientScreen(para.id));
    
  const dispatchs = useDispatch();
    useEffect(() => {
      dispatch(onePatientScreen(para.id));
    },[]);



    console.log(content)


const username = localStorage.getItem('username')




  const  newScreen = {
            
    "bodyAchesPresent":ScreenData.bodyAchesPresent,
    "coldsPresent": ScreenData.coldsPresent,
    "coughPresent": ScreenData.coughPresent,
    "diarrhoeaPresent": ScreenData.diarrhoeaPresent,
    "difficultiesInBreathingPresent":ScreenData.difficultiesInBreathingPresent,
    "fatiguePresent": ScreenData.fatiguePresent,
    "feverPresent": ScreenData.feverPresent,
    "hasATravelHistoryToACovid19InfectedArea": ScreenData.hasATravelHistoryToACovid19InfectedArea,
    "hasDirectContactWithCovid19Patient":ScreenData.hasDirectContactWithCovid19Patient,
    "hasTravelledPast14Days": ScreenData.hasTravelledPast14Days,
    "headachePresent":ScreenData.headachePresent , 
     patientId:para.id,
     "testingAgentUsername":username


}



const handleCloseSubmit = () => {


    dispatchs(updateTest(newScreen))
    setOpen(false);



  };




     
  let a  = content.map((x)=>(

            x.map((y ,i)=>(

              <TableRow key={i}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{`${`${y.bodyAchesPresent}`}`}</TableCell>
              <TableCell>{`${y.coldsPresent}`}</TableCell>
              <TableCell>{`${y.coughPresent}`}</TableCell>
              <TableCell>{`${y.diarrhoeaPresent}`}</TableCell>
              <TableCell>{`${y.difficultiesInBreathingPresent}`}</TableCell>
              <TableCell> {`${y.headachePresent}`}</TableCell>
              <TableCell>{`${y.fatiguePresent}`}</TableCell>
              <TableCell> {`${y.feverPresent}`} </TableCell>
              <TableCell> {`${y.hasATravelHistoryToACovid19InfectedArea}`} </TableCell>
              <TableCell> {`${y.hasDirectContactWithCovid19Patient}`} </TableCell>
              <TableCell> {`${y.hasTravelledPast14Days}`}</TableCell>
              </TableRow>


            ))

   
  
  
  
  
  ))
  
  


   
  












  
    return (<div>
        <h5 className="h" style={{borderLeft:"10px solid #4c8c40"}}>Patient's Last Screens</h5>

        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        New Screen
      </Button>
    
   
        <Table aria-label="simple table">
        
          <TableBody>
        

              {a}
        
          </TableBody>
        </Table>
  


        <Table className='table table-striped table-bordered' aria-label="custom pagination table">
      
        <TableHead>
            <TableRow>
              <TableCell>No#</TableCell>
              <TableCell align="left">BodyAches</TableCell>
              <TableCell align="left">Cold</TableCell>
              <TableCell align="left">Cough</TableCell>
              <TableCell align="left">Diarrhoea</TableCell>
              <TableCell align="left">Breathing Difficult</TableCell>
              <TableCell align="left">Fatigue</TableCell>
              <TableCell align="left">Fever</TableCell>
              <TableCell align="left">Travelled to invected Areas</TableCell>
              <TableCell align="left">Contact with Covid patient</TableCell>
              <TableCell align="left">Travelled in last 14Days</TableCell>
              <TableCell align="left">Headache</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.number}>
              <TableCell align="left" component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="left">{row.bodyAchesPresent}</TableCell>
              <TableCell align="left">{row.coldsPresent}</TableCell>
              <TableCell align="left">{row.coughPresent}</TableCell>
              <TableCell align="left">{row.diarrhoeaPresent}</TableCell>
              <TableCell align="left">{row.difficultiesInBreathingPresent}</TableCell>
              <TableCell align="left">{row.fatiguePresent}</TableCell>
              <TableCell align="left">{row.feverPresent}</TableCell>
              <TableCell align="left">{row.hasATravelHistoryToACovid19InfectedArea}</TableCell>
              <TableCell align="left">{row.hasDirectContactWithCovid19Patient}</TableCell>
              <TableCell align="left">{row.hasTravelledPast14Days}</TableCell>
              <TableCell align="left">{row.headachePresent}</TableCell>
              
            </TableRow>
          ))}

        
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>





      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Screeing  Details</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
<form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Cough:</Label>
                 <Input type="select" name="travelled" value={ScreenData.coughPresent}  onChange={e=>setScreen({ ...ScreenData ,coughPresent:e.target.value})} > 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Colds</Label>
                  <Input type="select" name="travelled" value={ScreenData.coldsPresent}  onChange={e=>setScreen({ ...ScreenData ,coldsPresent:e.target.value})}  id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Diarrhoea</Label>
                  <Input type="select" name="travelled" value={ScreenData.diarrhoeaPresent}  onChange={e=>setScreen({ ...ScreenData ,diarrhoeaPresent:e.target.value})}  id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Sore Throat</Label>
                  <Input type="select" name="travelled"  value={ScreenData.difficultiesInBreathingPresent}  onChange={e=>setScreen({ ...ScreenData ,difficultiesInBreathingPresent:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Body Aches</Label>
                  <Input type="select" name="travelled"  value={ScreenData.bodyAchesPresent}  onChange={e=>setScreen({ ...ScreenData ,bodyAchesPresent:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Heachache</Label>
                  <Input type="select" name="travelled" value={ScreenData.headachePresent}  onChange={e=>setScreen({ ...ScreenData ,headachePresent:e.target.value})}  id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Tempreratue above 37.8 </Label>
                  <Input type="select" name="travelled"  value={ScreenData.feverPresent}  onChange={e=>setScreen({ ...ScreenData ,feverPresent:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Difficulty in breathing</Label>
                  <Input type="select" name="travelled"  value={ScreenData.coughPresent}  onChange={e=>setScreen({ ...ScreenData ,coughPresent:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
        
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Travelled  in the past 14days</Label>
              <Input type="select" name="travelled" value={ScreenData.hasTravelledPast14Days}  onChange={e=>setScreen({ ...ScreenData ,hasTravelledPast14Days:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
       
          
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
                  <Input type="select" name="travelled" value={ScreenData.hasATravelHistoryToACovid19InfectedArea}  onChange={e=>setScreen({ ...ScreenData ,hasATravelHistoryToACovid19InfectedArea:e.target.value})}  id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Any direct contact with a Covid patient</Label>
              <Input type="select" name="travelled"  value={ScreenData.hasDirectContactWithCovid19Patient}  onChange={e=>setScreen({ ...ScreenData ,hasDirectContactWithCovid19Patient:e.target.value})} id="gender"> 
              <option>Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
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


export default ScreenDetails