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
import axios from 'axios'
import api from '../../../utils/helpers/api';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
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






export default function AllUsers() {



  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  
  
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
    
  }

 const handleCloseError = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenError(false);
      
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

  
  const content = useSelector((state) => state.auth.allusers);

  console.log(content)
  const dispatch = useDispatch(allUsers());



  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);







   function reset(x ,y){
  let newData = {

    email:x,
    username:y
  }
  

  axios.post(`${api.apiUrl}/users/reset-password`,newData)
       .then(resp=>{

        handleClick() 
        
        console.log('success')
       }).catch(err=>{
        handleClickError() 
      
       })

  }




  return (
   
   <div>
      <h5 style={styles.container}>
    All Users
     </h5>

     <div className={classes.root}>
      
      <Snackbar open={open} onClose={handleClose}  anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
        <Alert   onClose={handleClose} severity="success">
          New password sent to user's email!
        </Alert>
      </Snackbar>
      
      
      <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError} anchorOrigin={{
      vertical: "top",
      horizontal: "center"}}>
      <Alert onClose={handleCloseError} severity="error">
        There was an error, try again 
      </Alert>
      </Snackbar>
      
      </div>

     <Button style={{color:'green'}}variant="contained"> <Link to='/adduser'>Add user</Link></Button>
      <Table className='table table-striped table-bordered' aria-label="custom pagination table">
      
      <TableHead>
          
          <TableRow>
            <TableCell align="left">First name</TableCell>
            <TableCell align="left">Last name</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">National ID</TableCell>
            <TableCell align="left">Practicing Number</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Group</TableCell>
            <TableCell align="left">Testing Facility</TableCell>
          
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? content.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : content
          ).map((x ,i) => (
            <TableRow key={i}>
            <TableCell>{x.firstName}</TableCell>
            <TableCell>{x.lastName}</TableCell>
            <TableCell>{x.phoneNumber}</TableCell>
            <TableCell>{x.nationalIdNumber}</TableCell>
            <TableCell>{x.practicingNumber}</TableCell>
            <TableCell>{x.email}</TableCell>
            <TableCell>{x.group}</TableCell>
            <TableCell>{x.testingFacilityName}</TableCell>
            
        
            <TableCell align="right"><Button className="btn-sm" style={{backgroundColor:"orange" ,color:"white"}}   onClick={()=>{ reset(x.email , x.username)}}>Reset password</Button>
            </TableCell>
            </TableRow>
        
          ))}

        
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={content.length}
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