import React  ,{useState} from 'react';
 
import {
  Form,
 
} from 'reactstrap';
import { useDispatch,} from 'react-redux';
import {addKit} from '../../../redux/actions/KitsActions'
import { useHistory } from "react-router";
import { TextField } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';




 function NewKit() {



  const [state, setstate] = useState({"brandName": "",
                                      "manufacturer": "" ,
                                      "serialNumber":"",
                                      "used": false
                                      
                                    })



      console.log(state)

      const dispatch = useDispatch();
      
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
       <TextField label="Manufacture" type="text" value={state.manufacturer} 
onChange={e=> setstate({ ...state, manufacturer:e.target.value})}
 placeholder="manufacturer" required={true}/>
       </Grid>

       <Grid item xs={12} sm={6}>
       <TextField label="Serial Number" type="text" value={state.serialNumber} 
onChange={e=> setstate({ ...state, serialNumber:e.target.value})}
 placeholder="serial number" required={true}/>
       </Grid>
      
      
     </Grid>
   </React.Fragment>
   <div align="right" style={{paddingTop:10}}>
<<<<<<< HEAD
    <button className="btn btn-success" variant="contained" type="submit"> Submit</button>
    </div>
=======
   <button className="btn btn-success" type="submit">submit</button>
   </div>
>>>>>>> 8864102019981080e442ce31136c9c6776564283
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