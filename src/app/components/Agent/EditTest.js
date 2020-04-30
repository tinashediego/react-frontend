import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {allKits} from '../../../redux/actions/KitsActions'
import {useParams} from 'react-router'

import {Col,Label,Input,FormGroup,Row }  from 'reactstrap'
import moment from 'moment'
import axios from 'axios'
import {TextField} from '@material-ui/core'



 function NewTest({next}) {

  const content2 = useSelector((state) => state.kits.allkits);  
  let  para = useParams()
  const dispatch2 = useDispatch(allKits());
  useEffect(() => {

    dispatch2(allKits())

  },[]);
    
    const [ScreenData ,setScreen] =  useState({
        "dateOfTest": moment().format('DD/MM/YYYY'),
        "patientScreeningId":'3234',
        "testKitId":1,
        "testResult": "POSITIVE",
        "batchNumber":"",
        "serialNumber":"",
        "testingAgentUsername": '' 
    })


    console.log(para)


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
    "batchNumber": ScreenData.batchNumber,
    "serialNumber": ScreenData.serialNumber,
    "testingAgentUsername": a,

        }


        console.log(newScreen)

        axios.post("http://45.76.141.84:8080/v1/tests" ,newScreen)
             .then(resp=>{

                localStorage.setItem('testId' ,resp.data.id)
              alert('succes')
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

     <Col md={12}>

     <FormGroup>
         <Label for="exampleCity">Test  Result:</Label>
            <Input type="select" name="travelled" value={ScreenData.testResult}  onChange={e=>setScreen({ ...ScreenData ,testResult:e.target.value})} > 
     <option>Select</option>
     <option value="POSITIVE">Positive</option>
     <option value="NEGATIVE">Negative</option>
     <option value="INCONCLUSIVE">Inconclusive</option>
     </Input>
       </FormGroup>
   
     </Col>

     <Col md={12}>

     <FormGroup>
  
            <TextField label="Batch Number" name="travelled" value={ScreenData.batchNumber}  onChange={e=>setScreen({ ...ScreenData ,batchNumber:e.target.value})} fullWidth placeholder="Batch Number" /> 
   
       </FormGroup>
     
     </Col>
     <Col md={12}>

<FormGroup>

       <TextField label="Serial Number" name="travelled" value={ScreenData.serialNumber}  onChange={e=>setScreen({ ...ScreenData ,serialNumber:e.target.value})} fullWidth placeholder="Serial Number" /> 

  </FormGroup>

</Col>
   </Row>

   <div align="right" style={{paddingTop:10}}>
   <button className="btn btn-success" type="submit">submit</button>
</div>
    

   </form>
  </Col>
  <button className="btn btn-primary">Finish</button>
  </div>
  );
}

const styles = {

h:{
  borderLeft:"10px solid #4c8c40",
  
}
}
export default NewTest;