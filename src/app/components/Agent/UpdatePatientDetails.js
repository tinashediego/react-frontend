import React  ,{useState}from 'react';
import Submenu from '../layout/Agent/SubMenu' ;
import {Button ,Col,Label,Input,FormGroup,Form ,Row ,Table}  from 'reactstrap'
import {Link} from  'react-router-dom'
import { useHistory } from "react-router";


function UpdatePatientDetails() {

  
  let history = useHistory()


  const [updated, setUpdates] = useState({ 
  
  "bodyAches": true,
  "colds": true,
  "comment": "string",
  "cough": true,
  "diarrhoea": true,
  "difficultyBreathing": true,
  "directContactWithCovid19Patient": true,
  "fatigue": true,
  "fever": true,
  "headache": true,
  "processInstanceId": "string",
  "soreThroat": true,
  "taskId": "string",
  "testNeeded": true,
  "travelHistoryToACovid19InfectedArea": true,
  "travelledPast14Days": true    
      
})


  function handleClose(){

    history.goBack()
   }
  
    return (
        <div>

        <Submenu />
        <div style={{marginTop:70 ,padding:10}} >

        <Button className='btn-secondary' style={{marginBottom:10}}  onClick={handleClose}>Close</Button>

        <Form  style={{padding:20, border:"4px solid  rgba(76,140,64,0.6) ",boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}} responsive>

    
        <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>
        Patel Screening Details  
        </h1>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Cough:</Label>
                 <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Colds</Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Diarrhoea</Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Sore Throat</Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Body Aches</Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Heachache</Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Tempreratue above 37.8 </Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Difficulty in breathing</Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Fatigue</Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Travelled  in the past 14days</Label>
              <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
       
          
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
                  <Input type="select" name="travelled"  id="gender"> 
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Any direct contact with a Covid patient</Label>
              <Input type="select" name="travelled"  id="gender"> 
              <option>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </Input>
            </FormGroup>
          </Col>
      
        </Row>  
        <Col sm={{ size: 10, offset: 5}}>
        <Button color="success" type="submit"  style={{width:200}}> <Link style={{color:'white'}} to="/patientDetails">Update</Link></Button>
      </Col>
      </Form>
    
        
        
        
        </div>

  
            
        </div>
    )
}


export default UpdatePatientDetails