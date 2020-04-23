import React  ,{useEffect , useState}from 'react';

import {Allfacility ,addfacilty} from '../../../redux/actions/KitsActions'
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
import {Link} from 'react-router-dom'



const AllFacilities  = (props) =>{ 



  const [open, setOpen] = useState(false);
// Generate Order Data


  const content = useSelector((state) => state.kits.allfacility);
  
  //this hook gives us redux store state


  const dispatch = useDispatch(Allfacility());


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    dispatch(Allfacility());
  }, [])



  const [state, setstate] = useState({"testingFacility": "",
                                      
                                    })



      console.log(state)

      const dispatchs = useDispatch();
      
    
    
      function handleSubmit(e) {
        e.preventDefault();
        if (state) {
            dispatchs(addfacilty(state))
            setOpen(false);
        }
    }


    if(!content){

        return 'Loading  ...'
    }

   


  console.log(content)

     let a  =  content.map((x,i)=>(

    <TableRow key={i}>
    <TableCell>{i +1}</TableCell>
    <TableCell>{x.id}</TableCell>
    <TableCell>{x.testingFacility}</TableCell>
 
    </TableRow>
  
  ))
  return (
    <div>

   

    <h5 className="container" style={styles.container}>All Facilities</h5>
    <Button style={{color:'green'}}variant="contained" onClick={handleClickOpen}>New Facility</Button>


      <Table size="small" className="table table-striped" >
  
  <TableHead>
    <TableRow>
      <TableCell>No#</TableCell>
      <TableCell>ID</TableCell>
      <TableCell>TESTING FACILITY</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
 


    {a}
  </TableBody>
</Table>







<Dialog
open={open}
onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"

>
<DialogTitle id="alert-dialog-title" style={styles.dialog}>New  FACILTY</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
  <Form className="col-sm-12" onSubmit={handleSubmit} style={{width:"100%"}}>
  <FormGroup className="col-sm-12" >
    
    <TextField className="col-sm-12" label="Brand Name"  value={state.testingFacility}  onChange={e=> setstate({ ...state, testingFacility:e.target.value})} id="exampleEmail" placeholder="New Facility" />
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



export default AllFacilities;