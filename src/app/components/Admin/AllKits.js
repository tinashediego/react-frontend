import React  ,{useEffect , useState}from 'react';
import {Link} from  'react-router-dom'
import {allKits ,addKit} from '../../../redux/actions/KitsActions'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {Col,Label,Input,FormGroup,Form ,Row }  from 'reactstrap'



import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const AllKits  = (props) =>{ 



  const [open, setOpen] = useState(false);
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, action) {
  return { id, date, name, shipTo, paymentMethod, action };
}


  const content = useSelector((state) => state.kits.allkits);
  
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
                                      "brandName": "" ,
                                      'serialNumber':''
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
    <TableCell>{x.brandName}</TableCell>
    <TableCell>{x.batchNumber}</TableCell>
    <TableCell>{x.serialNumber}</TableCell>
    </TableRow>
  
  ))
  return (
    <div>

   

    <h5 className="container" style={styles.container}>All Kits</h5>

    <button onClick={handleClickOpen}> Add New Kit</button>
      <Table size="small" className="table table-striped" >
  
  <TableHead>
    <TableRow>
      <TableCell>Date</TableCell>
      <TableCell> Brand Name</TableCell>
      <TableCell>Batch Number</TableCell>
      <TableCell>Serial Number</TableCell>
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
<DialogTitle id="alert-dialog-title">Screeing  Details</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
  <Form className="col-sm-12" style={styles.container} onSubmit={handleSubmit}>

  <FormGroup  >
    <Label for="exampleEmail">Brand Name</Label>
    <Input type="text" value={state.brandName}  onChange={e=> setstate({ ...state, brandName:e.target.value})} id="exampleEmail" placeholder="Brand Name" />
  </FormGroup>

  <FormGroup>
  <Label for="exampleEmail">Batch Number</Label>
  <Input type="number" value={state.batchNumber}  onChange={e=> setstate({ ...state, batchNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>

<FormGroup>
  <Label for="exampleEmail">Serial Number</Label>
  <Input type="number" value={state.serialNumber}  onChange={e=> setstate({ ...state, serialNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>



<Button color="success" type="submit" className="btn btn-block" style={{marginTop:30}} >Add Kit</Button>


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
}



export default AllKits;