import React  ,{useState} from 'react';
 
import {
  Row, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

import {Link} from 'react-router-dom'
import { useDispatch,} from 'react-redux';
import {addKit} from '../../../redux/actions/KitsActions'
import { useHistory } from "react-router";
import { TextField } from '@material-ui/core';


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
<br></br>
<Form align="center" className="col-sm-12" style={styles.container} onSubmit={handleSubmit}>

  <div className="row">
  <FormGroup className="col-sm-4" >
  
  <TextField label="Brand Name" type="text" value={state.brandName}  onChange={e=> setstate({ ...state, brandName:e.target.value})} id="exampleEmail" placeholder="Brand Name" required={true} />
</FormGroup>

<FormGroup className="col-sm-4">

<TextField label="Batch Number" type="number" value={state.batchNumber}  onChange={e=> setstate({ ...state, batchNumber:e.target.value})} id="exampleEmail" placeholder="Batch Number" required={true}/>
</FormGroup>

<FormGroup className="col-sm-4">

<TextField label="Serial Number" type="number" value={state.serialNumber}  onChange={e=> setstate({ ...state, serialNumber:e.target.value})} id="exampleEmail" placeholder="Serial Number" required={true} />
</FormGroup>
  </div>



<Button color="success" type="submit" style={{marginTop:30}} >Add Kit</Button>


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