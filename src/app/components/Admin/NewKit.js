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


 function NewKit() {



  const [state, setstate] = useState({"batchNumber": "",
                                          "brandName": ""})



      console.log(state)

      const dispatch = useDispatch();
      
  let history = useHistory()
    
    
      function handleSubmit(e) {
        e.preventDefault();
        if (state) {
            dispatch(addKit(state))
        }
    }

    function handleClose(){

      history.goBack()
     }
    
    
    
    
    return (
        <div>
    
        <Col  style={styles.container} sm="12" md={{ size: 6, offset: 3 }}>


        <Button className='btn-secondary' style={{marginTop:10,marginBottom:10}}  onClick={handleClose}>Close</Button>
        
        <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>
       New Kit 
        </h1>
        <Form  onSubmit={handleSubmit} style={{width:'100%'}}>
          <FormGroup  >
            <Label for="exampleEmail">Brand Name</Label>
            <Input type="text" value={state.brandName}  onChange={e=> setstate({ ...state, brandName:e.target.value})} id="exampleEmail" placeholder="Brand Name" />
          </FormGroup>
    
          <FormGroup>
          <Label for="exampleEmail">Batch Number</Label>
          <Input type="number" value={state.batchNumber}  onChange={e=> setstate({ ...state, batchNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
    
      
        <Col sm={{ size: 10, offset: 4}}>
        <Button color="success" type="submit"  style={{width:200}}>Add Kit</Button>
      </Col>
      
        </Form>
        
        
        </Col>
        
      
      
      </div>
    )
}


const styles = {

    container:{
      
       
       border:"4px solid green",
      marginTop:"150px",
      backgroundColor:"#fff" ,
      positon:'inherit',
      boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      paddingBottom:45
    
  
    
  },
  
  
  
  
  
  
  }
export default NewKit