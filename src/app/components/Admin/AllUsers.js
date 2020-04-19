import React  ,{useEffect}from 'react';
import { useDispatch, useSelector } from "react-redux";
import {allUsers} from '../../../redux/actions/authActions'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

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

export default function AllUsers() {
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

  
  const content = useSelector((state) => state.auth.allusers);

  console.log(content)
  const dispatch = useDispatch(allUsers());



  useEffect(() => {
    dispatch(allUsers());
  }, []);


  let a  =  content.map((x,i)=>(

    <TableRow key={i}>
    <TableCell>{i +1}</TableCell>
    <TableCell>{x.username}</TableCell>
    <TableCell>{x.firstName}</TableCell>
    <TableCell>{x.lastName}</TableCell>
    <TableCell>{x.qualification}</TableCell>
    <TableCell>{x.email}</TableCell>
    <TableCell>{x.phoneNumber}</TableCell>
    <TableCell> {x.addressOfPractice} </TableCell>

    <TableCell> {x.practicingNumber}</TableCell>

    <TableCell align="right"><a href="#" style={{color:"green"}} >reset</a>&nbsp;<a style={{color:"red"}} href="#">delete</a></TableCell>
    </TableRow>


  
 
  ))














  return (
   
   <div>
      <h5 style={styles.container}>
    All Users
     </h5>
     <Button style={{color:'green'}}variant="contained"> <Link to='/adduser'>Add user</Link></Button>
      <Table className='table table-striped table-bordered' aria-label="custom pagination table">
      
      <TableHead>
          
          <TableRow>
            <TableCell align="left">NO#</TableCell>
            <TableCell align="left">Fullname</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">National ID</TableCell>
            <TableCell align="left">Practising Number</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Adress Of Practice</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? content.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : content
          ).map((x ,i) => (
            <TableRow key={i}>
            <TableCell>{i +1}</TableCell>
            <TableCell>{x.fullName}</TableCell>
            <TableCell>{x.phoneNumber}</TableCell>
            <TableCell>{x.nationalIdNumber}</TableCell>
            <TableCell>{x.practicingNumber}</TableCell>
            <TableCell>{x.email}</TableCell>
            <TableCell>{x.phoneNumber}</TableCell>
            <TableCell> {x.addressOfPractice} </TableCell>
        
            <TableCell align="right"><button style={{backgroundColor:"green"}} >reset</button>&nbsp;<button style={{backgroundColor:"red"}} href="#">delete</button></TableCell>
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
   </div>
  
  );
 

}
const styles = {

  container:{
    borderLeft:"10px solid #4c8c40",

     
  
}

}