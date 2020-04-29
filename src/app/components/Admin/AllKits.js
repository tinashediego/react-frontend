import React  ,{useEffect , useState}from 'react';

import {allKits ,addKit} from '../../../redux/actions/KitsActions'
import { useDispatch, useSelector } from "react-redux";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {FormGroup,Form }  from 'reactstrap'
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

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



const AllKits  = (props) =>{ 


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  


  const [open, setOpen] = useState(false);
// Generate Order Data


  const content = useSelector((state) => state.kits.allkits);
  console.log(content)
  //this hook gives us redux store state


  const dispatch = useDispatch(allKits());


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    dispatch(allKits());
  }, [])



  const [state, setstate] = useState({"batchNumber": "",
                                      "brandName": "" 
                                    })



      console.log(state)

      const dispatchs = useDispatch();
      
    
    
      function handleSubmit(e) {
        e.preventDefault();
        if (state) {
            dispatchs(addKit(state))
            setOpen(false);
        }
    }

   


  console.log(content)

     let a  =  content.map((x,i)=>(

    <TableRow key={i}>
    <TableCell>{i +1}</TableCell>
    <TableCell>{x.createdDate}</TableCell>
    <TableCell>{x.brandName}</TableCell>
    <TableCell>{x.manufacturer}</TableCell>
    <TableCell>{x.serialNumber}</TableCell>
    </TableRow>
  
  ))
  return (
    <div>

   

    <h5 className="container" style={styles.container}>All Kits</h5>
    <Button style={{color:'green'}}variant="contained" > <Link to='/newkit'>New Kit</Link></Button>


<Table className='table table-striped table-bordered' aria-label="custom pagination table">
      
      <TableHead>
          
          <TableRow>
          <TableCell>No#</TableCell>
      <TableCell>Date</TableCell>
      <TableCell> Brand Name</TableCell>
    
      <TableCell>manufacturer</TableCell>
     
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? content.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : content
          ).map((x ,i) => (
            <TableRow key={i}>
    <TableCell>{i +1}</TableCell>
    <TableCell>{x.createdDate}</TableCell>
    <TableCell>{x.brandName}</TableCell>
    <TableCell>{x.manufacturer}</TableCell>
   
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




























<Dialog
open={open}
onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"

>
<DialogTitle id="alert-dialog-title" style={styles.dialog}>New Kit</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
  <Form className="col-sm-12" onSubmit={handleSubmit} style={{width:"100%"}}>

  <FormGroup className="col-sm-12" >
    
    <TextField className="col-sm-12" label="Brand Name"  value={state.brandName}  onChange={e=> setstate({ ...state, brandName:e.target.value})} id="exampleEmail" placeholder="Brand Name" />
  </FormGroup>

  <FormGroup className="col-sm-12">
  <TextField className="col-sm-12" label="Batch Number" type="number" value={state.batchNumber}  onChange={e=> setstate({ ...state, batchNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>

<FormGroup className="col-sm-12">
  <TextField className="col-sm-12" label="Serial Number" type="number" value={state.serialNumber}  onChange={e=> setstate({ ...state, serialNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>

</Form>
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleClose} color="primary">
    Cancel
  </Button>
  <Button onClick={handleSubmit} color="primary" autoFocus>
    Submit
  </Button>
</DialogActions>
</Dialog>



    </div>
  );
}


const styles={
  container:{
    borderLeft:"10px solid #4c8c40"
  },
  dialog:{
    borderLeft:"10px solid #4c8c40",
    marginLeft:"10px"
  }
}



export default AllKits;