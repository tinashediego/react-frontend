import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {testPatient ,allPatientTests ,onePatientScreen} from '../../../redux/actions/PatientsActions'
import {allKits} from '../../../redux/actions/KitsActions'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
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
import Table from '@material-ui/core/Table';
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

function patientsData(number, date, time,agent,kitUsed,brandName,results) {

  return {number, date, time,agent,kitUsed,brandName,results};
}

const rows = [
  patientsData(1, '12-03-1924', 4355,'mula','red cross','red red','negative'),
  
  
].sort((a, b) => (a.number < b.number ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



 function TestPatient() {


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



console.log(a[0])



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
    

        
      <Table className='table table-striped table-bordered' aria-label="custom pagination table">
      
      <TableHead>
          <TableRow>
            <TableCell>No#</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Agent</TableCell>
            <TableCell align="left">Kit Used</TableCell>
            <TableCell align="left">Brand Name</TableCell>
            <TableCell align="left">Test Results</TableCell>
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
            <TableCell align="left">{row.date}</TableCell>
            <TableCell align="left">{row.time}</TableCell>
            <TableCell align="left">{row.agent}</TableCell>
            <TableCell align="left">{row.kitUsed}</TableCell>
            <TableCell align="left">{row.brandName}</TableCell>
            <TableCell align="left">{row.results}</TableCell>
            
            
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