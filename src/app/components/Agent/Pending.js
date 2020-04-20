import React , {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import {allpendingTests ,updatePendingTest} from '../../../redux/actions/PatientsActions'
import {Link} from  'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import {TextField} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Col,Label,Input,FormGroup ,Row }  from 'reactstrap'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


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

function patientsData(number, fullName, phoneNumber,nationalId,passportNumber,gender,dateOfBirth,action) {

  return {number, fullName, phoneNumber,nationalId,passportNumber,gender,dateOfBirth,action};
}

const rows = [
  patientsData(1, 'Munya', +26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  patientsData(2, 'Patel', +26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  patientsData(3, 'Everjoy',+26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  patientsData(4, 'Memo', +26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  patientsData(5, 'Diego', +26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  patientsData(6, 'Tinlee', +26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  patientsData(7, 'Tanaka', +26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  patientsData(8, 'Tello', +26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  patientsData(9, 'Mulaz', +26378322333,'63-22344434k43','63-22344434k43','male','03-01-1995'),
  
].sort((a, b) => (a.number < b.number ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function Pending() {


  const [ScreenData ,setScreen] =  useState({
    "dateOfTest":'',
    "patientScreeningId":'',
    "testKitId":'',
    "testResult": "POSITIVE",
    "testingAgentUsername": '' 
})





  const content2 = useSelector((state) => state.patients.allpendingtests)
  
  //this hook gives us redux store state

  
  const dtspa4 = useDispatch(allpendingTests())
  useDispatch(allpendingTests())
  useEffect(() => {
  
    dtspa4(allpendingTests())

  }, []);

  const classes = useStyles2();
  console.log(content2)




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


  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);




  const handleClose = () => {
    setOpen(false);
  };

  var id ;
function selectItem(x){
 


     localStorage.setItem('thisid',x)
     setOpen(true);

 
   



  }



  let a  =  content2
  const  [SearchData ,setSearch] = useState({search:''})

    
  const dispatched = useDispatch();

  function  handleCloseSubmit(){

    let ids = localStorage.getItem('thisid')

    const  newScreen = {
     
      "id":ids,
      "testResult": ScreenData.testResult,
  
  
          }
      dispatched(updatePendingTest(newScreen))
      console.log(newScreen)
      setOpen(false);

  }
  return (
   
   <div>
      <h5 style={styles.container}>
    All Pending   
     </h5>
     <div align="right" style={{marginBottom:10}}>
     <TextField sty placeholder="search by phoneNumber"  value={SearchData.search} onChange={e=>setSearch({ ...SearchData ,search:e.target.value})}/>
    
     </div>
      <Table className='table table-striped table-bordered' aria-label="custom pagination table">
      
      <TableHead>
          
          <TableRow>
            <TableCell align="left">NO#</TableCell>
            <TableCell align="left">Fullname</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Result</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? a.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : a
          ).filter(  (x)=>{

            return x.result.toLowerCase().indexOf(SearchData.search.toLowerCase()) !== -1
      
          }).map((row ,i) => (
            <TableRow key={i}>
              <TableCell align="left" component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="left">{row.patientFullName}</TableCell>
              <TableCell align="left">{row.patientPhoneNumber}</TableCell>
              <TableCell align="left">{row.result}</TableCell>
              
              <TableCell align="left">
              <Button  variant="contained" color="primary" onClick={() => selectItem(row.id)} >update</Button>&nbsp;
              
              </TableCell>
            </TableRow>
          ))}

        
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={a.length}
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
      <DialogTitle id="alert-dialog-title">Testing  Details</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
<form>
        <Row form>


          <Col md={12}>

          <FormGroup>
              <Label for="exampleCity">Testing Kit:</Label>
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
  
  );
 

}
const styles = {

  container:{
    borderLeft:"10px solid #4c8c40",

     
  
}

}