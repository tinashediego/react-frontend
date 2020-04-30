import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {allKits} from '../../../redux/actions/KitsActions'

import {Col,Label,Input,FormGroup,Form ,Row }  from 'reactstrap'
import moment from 'moment'
import axios from 'axios'
import { TextField } from '@material-ui/core';

 function NewTest({next}) {

  const content2 = useSelector((state) => state.kits.allkits);  
  const dispatch2 = useDispatch(allKits());
  useEffect(() => {

    dispatch2(allKits())

  },[]);
    
    const [ScreenData ,setScreen] =  useState({
        "dateOfTest": moment().format('DD/MM/YYYY'),
        "patientScreeningId":'3234',
        "testKitId":1,
        "testResult": "",
        "testingAgentUsername": '' 
    })



const handleSubmit = (e) => {
  e.preventDefault()
  let a = localStorage.getItem('username')
  let b  = localStorage.getItem('partnerID')
  
  const  newScreen = {
    "dateOfTest": moment().format('DD/MM/YYYY'),
    "timeOfTest":moment().format('HH:mm'),
    "patientScreeningId":b,
    "testKitId":ScreenData.testKitId,
    "testResult": ScreenData.testResult,
    "serialNumber": ScreenData.serialNumber,
    "batchNumber": ScreenData.batchNumber,
    "testingAgentUsername": a,

        }

        axios.post("http://45.76.141.84:8080/v1/tests" ,newScreen)
             .then(resp=>{
              localStorage.setItem('testId' ,resp.data.id)
              console.log(resp)
              alert('succes')
              localStorage.removeItem('partnerId')
              next()         
             }
              )
              .catch(err=>{

                alert(err.message)
                console.log(err)
              })

    

  };








  return (

    <div>
   <h5 className="h" style={styles.h}>Test Patient</h5>
   <Col sm="12" md={{ size: 6, offset: 3 }}>
   <form onSubmit={handleSubmit}>
   <Row form>

   <Col md={12} >
   <FormGroup>
     <Label for="exampleCity">Testing Kit:</Label>
        <Input type="select" name="travelled" value={ScreenData.testKitId}  onChange={e=>setScreen({ ...ScreenData ,testKitId:e.target.value})} > 
       
       <option>SELECT</option>
       {content2.map((team) => <option key={team.id} value={team.id}>{team.brandName}</option>)}
            </Input>
            </FormGroup>
          </Col>

          <Col md={12} >
   <FormGroup>
     <Label for="exampleCity">Testing Kit:</Label>
        <Input type="select" name="travelled" value={ScreenData.testKitId}  onChange={e=>setScreen({ ...ScreenData ,testKitId:e.target.value})} > 
       
       <option>SELECT</option>
       {content2.map((team) => <option key={team.id} value={team.id}>{team.brandName}</option>)}
            </Input>
            </FormGroup>
          </Col>
          <Col md={12} >
   <FormGroup>
     <Label for="exampleCity">Testing Result:</Label>
        <Input type="select" name="travelled" value={ScreenData.testResult}  onChange={e=>setScreen({ ...ScreenData ,testResult:e.target.value})} > 
       
       <option>SELECT</option>
       <option>Positive</option>
       <option>Negative</option>
       <option>Inconclusive</option>)}
            </Input>
            </FormGroup>
          </Col>
          <Col md={12}>

<FormGroup>
    
       <TextField label="Serial Number" name="travelled" placeholder="Serial Number"
       value={ScreenData.serialNumber} onChange={e=>setScreen({ ...ScreenData , serialNumber:e.target.value})} fullWidth /> 

  </FormGroup>

</Col>
          <Col md={12} >
   <FormGroup>
    
        <TextField label="Batch Number" name="travelled" placeholder="Batch Number" value={ScreenData.batchNumber} 
      onChange={e=>setScreen({ ...ScreenData ,batchNumber:e.target.value})} fullWidth /> 
       
     
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