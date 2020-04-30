import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { allPatient} from '../../../redux/actions/PatientsActions'
import {Link} from  'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import {TextField} from '@material-ui/core'
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
import moment from 'moment'

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




export default function AllPatients() {







  const content = useSelector((state) => state.patients.allpatients);
  
  //this hook gives us redux store state


  console.log(content)
  const dispatch = useDispatch(allPatient());
  useEffect(() => {
    dispatch(allPatient());
  }, [dispatch]);

 




  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  let a  =  content






  
  const  [SearchData ,setSearch] = React.useState({search:''})



  if(!content){


    return 'Loading'
  }
  return (
   
    <div>
    <h5 style={styles.container}>
    All Patients
     </h5>
     <div align="right" style={{marginBottom:10}}>
     <TextField sty placeholder="search by phoneNumber" value={SearchData.search} onChange={e=>setSearch({ ...SearchData ,search:e.target.value})}/>

 </div>
    <Table className='table table-striped table-bordered' aria-label="custom pagination table">

        <TableHead>

            <TableRow>
                <TableCell align="left">NO#</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">National ID</TableCell>
                <TableCell align="left">Passport Number</TableCell>
                <TableCell align="left">Test Result</TableCell>
                <TableCell align="left">Date of Birth</TableCell>
                <TableCell align="left">Action</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {(rowsPerPage > 0 ? a.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : a ).sort(function(a, b) {
              var dateA = new Date(a.createdDate), dateB = new Date(b.createdDate);
              return dateA - dateB;
          }).reverse().filter( (x)=>{ return x.phoneNumber.toLowerCase().indexOf(SearchData.search.toLowerCase()) !== -1 }).map((row ,i) => (
            <TableRow key={i}>
                <TableCell align="left" component="th" scope="row">
                    {i+1}
                </TableCell>
                <TableCell>{moment(row.createdDate).format('DD/MM/YYYY')}</TableCell>
                <TableCell align="left">{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">{row.phoneNumber}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.passportNumber}</TableCell>
                <TableCell align="left">{row.passportNumber}</TableCell>
                <TableCell align="left">{row.testResult}</TableCell>
                <TableCell align="left">{row.dateOfBirth}</TableCell>
                <TableCell align="left">
                
                    <Button variant="contained">
                        <Link style={{color: "red"}} to={`/test/${row.patientId}`}>Repeat Test</Link>
                    </Button>

                </TableCell>
            </TableRow>
            ))}

        </TableBody>
        <TableFooter>
            <TableRow>
                <TablePagination rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]} colSpan={3} count={a.length} rowsPerPage={rowsPerPage} page={page} SelectProps={{ inputProps: { 'aria-label': 'rows per page' }, native: true, }} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} ActionsComponent={TablePaginationActions} />
            </TableRow>
        </TableFooter>
    </Table>
</div>
  
  );
 

}
const styles = {

  container:{
    borderLeft:"10px solid #4c8c40",

     
  
}

}