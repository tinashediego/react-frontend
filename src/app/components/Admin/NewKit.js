import React  ,{useState} from 'react';
 
import {
  Form,
 
} from 'reactstrap';
import Alert from '@material-ui/lab/Alert';


import { TextField } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import axios from 'axios'

import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../../utils/helpers/api';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



 function NewKit() {




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


  const [state, setstate] = useState({"brandName": "",
                                      "manufacturer": "" ,
                                      "used": false
                                      
                                    })




      
      function handleSubmit(e) {
        e.preventDefault();
        if (state) {

          axios.post(`${api.customUrl}/test-kit-type` ,state)
               .then(res=>{

                
                setstate({manufacturer:'', brandName:''})

                handleClick()  
               }).catch(err=>{

              handleClickError()  })
            
        }
    }

   
    
    
    
    
    return (

<div>   
<div className="h" style={styles.h}><h5>New Kit</h5></div>


   
<div className={classes.root}>
      
<Snackbar open={open} onClose={handleClose} autoHideDuration={3000} anchorOrigin={{
      vertical: "top",
      horizontal: "center"}}>
  <Alert onClose={handleClose} severity="success">
    Kit added successfully
  </Alert>
</Snackbar>


<Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError} anchorOrigin={{
      vertical: "top",
      horizontal: "center"}}>
<Alert onClose={handleCloseError} severity="error">
  There was an error, try again 
</Alert>
</Snackbar>

</div>

<Form onSubmit={handleSubmit}>
  
<React.Fragment>
     
     <Grid container spacing={3}>
       <Grid item xs={12} sm={6}>
       <TextField label="Brand Name" type="text" value={state.brandName} onChange={e=> setstate({ ...state, brandName:e.target.value})} placeholder="Brand Name" fullWidth required />
       </Grid>
       <Grid item xs={12} sm={6}>
       <TextField label="Manufacture" type="text" value={state.manufacturer} 
onChange={e=> setstate({ ...state, manufacturer:e.target.value})}
 placeholder="Manufacturer" fullWidth required/>
       </Grid>

   
      
      
     </Grid>
   </React.Fragment>
   <div align="right" style={{paddingTop:10}}>
   <button className="btn btn-success" type="submit">submit</button>
   </div>
</Form>

</div>
       
    )
}


const styles = {

  h:{
    borderLeft:"10px solid #4c8c40"
  }
  
  
  
  
  
  
  }
export default NewKit