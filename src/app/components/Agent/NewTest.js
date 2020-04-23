import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {testPatient ,allPatientTests ,onePatientScreen} from '../../../redux/actions/PatientsActions'
import {allKits} from '../../../redux/actions/KitsActions'

import {Col,Label,Input,FormGroup,Form ,Row }  from 'reactstrap'
import moment from 'moment'








 function NewTest() {

    
    
    const [ScreenData ,setScreen] =  useState({
        "dateOfTest": moment().format('DD/MM/YYYY'),
        "patientScreeningId":'3234',
        "testKitId":1,
        "testResult": "POSITIVE",
        "testingAgentUsername": '' 
    })



const handleSubmit = () => {

  
  const  newScreen = {
    "dateOfTest": moment().format('DD/MM/YYYY'),
    "timeOfTest":moment().format('HH:mm'),
    "patientScreeningId":'nno',
    "testKitId":ScreenData.testKitId,
    "testResult": ScreenData.testResult,
    "testingAgentUsername": 'uygyy',

        }

   

  };








  return (

    <div>
   <h5 className="h" style={styles.h}>Test Patient</h5>
   <Col sm="12" md={{ size: 6, offset: 3 }}>
   <form>
   <Row form>

   <Col md={12} >
   <FormGroup>
     <Label for="exampleCity">Testing Kit:</Label>
        <Input type="select" name="travelled" value={ScreenData.testResult}  onChange={e=>setScreen({ ...ScreenData ,testKitId:e.target.value})} > 
       
       <option>Hello there</option>
            </Input>
            </FormGroup>
          </Col>

     <Col md={12}>

     <FormGroup>
         <Label for="exampleCity">Test Kit Result:</Label>
            <Input type="select" name="travelled" value={ScreenData.testResult}  onChange={e=>setScreen({ ...ScreenData ,testResult:e.target.value})} > 
     <option>Select</option>
     <option value="POSITIVE">POSITIVE</option>
     <option value="NEGATIVE">NEGATIVE</option>
     </Input>
       </FormGroup>
     
     </Col>
 
   </Row>

   <div align="right" style={{paddingTop:10}}>
   <button className="btn btn-success" type="submit">submit</button>
</div>
    

   </form>
  </Col>
  
  </div>
  );
}

const styles = {

h:{
  borderLeft:"10px solid #4c8c40",
  
}
}
export default NewTest;