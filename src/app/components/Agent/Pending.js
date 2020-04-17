import React , {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import {allPatient} from '../../../redux/actions/PatientsActions'
import {Link} from  'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Modal from '@material-ui/core/Modal';
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
import Pageview from '@material-ui/icons/Pageview'
import BorderColorIcon from '@material-ui/icons/BorderColor';

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


const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function Pending() {







  const content = useSelector((state) => state.patients.allpatients);
  
  //this hook gives us redux store state


  console.log(content)
  const dispatch = useDispatch(allPatient());
  useEffect(() => {
    dispatch(allPatient());
  }, []);

  const classes = useStyles2();

  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (x) => {
    setOpen(true);

    console.log(x)
  };

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
  const  [SearchData ,setSearch] = useState({search:''})
  return (
   
   <div>
      <h5 style={styles.container}>
    All Pending   <input  placeholder="search by phoneNumber"  value={SearchData.search} onChange={e=>setSearch({ ...SearchData ,search:e.target.value})}/>
     </h5>
      <Table className='table table-striped table-bordered' aria-label="custom pagination table">
      
      <TableHead>
          
          <TableRow>
            <TableCell align="left">NO#</TableCell>
            <TableCell align="left">Fullname</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? a.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : a
          ).filter(  (x)=>{

            return x.phoneNumber.toLowerCase().indexOf(SearchData.search.toLowerCase()) !== -1
      
          }).map((row ,i) => (
            <TableRow key={i}>
              <TableCell align="left" component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="left">{row.fullName}</TableCell>
              <TableCell align="left">{row.phoneNumber}</TableCell>  
              <TableCell align="left"> 
              <Button  variant="contained" color="primary"   onClick={()=>( handleOpen({}))} >update</Button>&nbsp;
              
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



      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <p>Hello there</p>
    </Modal>



      
   </div>
  
  );
 

}
const styles = {

  container:{
    borderLeft:"10px solid #4c8c40",

     
  
}

}