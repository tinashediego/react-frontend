import React  ,{useState} from 'react';
 
import {
  Form,
  FormGroup, Label, Input
} from 'reactstrap';
import { useDispatch,} from 'react-redux';
import {addKit} from '../../../redux/actions/KitsActions'
import { useHistory } from "react-router";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

























 function NewKit() {



  const [state, setstate] = useState({"batchNumber": "",
                                      "brandName": "" ,
                                      'serialNumber':''
                                    })



      console.log(state)

      const dispatch = useDispatch();
      
  let history = useHistory()
    
    
      function handleSubmit(e) {
        e.preventDefault();
        if (state) {
            dispatch(addKit(state))
        }
    }

   
    
    
    
    
    return (

<div>   
<div className="h" style={styles.h}><h5>New Kit</h5></div>

<Form onSubmit={handleSubmit}>
  
<React.Fragment>
     
     <Grid container spacing={3}>
       <Grid item xs={12} sm={6}>
       <TextField label="Brand Name" type="text" value={state.brandName}  onChange={e=> setstate({ ...state, brandName:e.target.value})} placeholder="Brand Name" required={true} />
       </Grid>
       <Grid item xs={12} sm={6}>
       <TextField label="Batch Number" type="number" value={state.batchNumber} 
onChange={e=> setstate({ ...state, batchNumber:e.target.value})}
 placeholder="Batch Number" required={true}/>
       </Grid>
       <Grid item xs={12}>
       <TextField label="Serial Number" type="number" value={state.serialNumber}  
onChange={e=> setstate({ ...state, serialNumber:e.target.value})}
placeholder="Serial Number"  required={true} />
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