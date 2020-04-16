import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
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

export default function AllPatients() {
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

  return (
   
   <div>
      <h5 style={styles.container}>
    All Patients
     </h5>
      <Table className='table table-striped table-bordered' aria-label="custom pagination table">
      
      <TableHead>
          
          <TableRow>
            <TableCell align="left">NO#</TableCell>
            <TableCell align="left">Fullname</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">National ID</TableCell>
            <TableCell align="left">Passport Number</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Date of Birth</TableCell>
            <TableCell align="left">Action</TableCell>
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
              <TableCell align="left">{row.fullName}</TableCell>
              <TableCell align="left">{row.phoneNumber}</TableCell>
              <TableCell align="left">{row.nationalId}</TableCell>
              <TableCell align="left">{row.passportNumber}</TableCell>
              <TableCell align="left">{row.gender}</TableCell>
              <TableCell align="left">{row.dateOfBirth}</TableCell>
              <TableCell align="left"><button className="btn btn-success">Screen</button> <button className="btn btn-danger">Test</button></TableCell>
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