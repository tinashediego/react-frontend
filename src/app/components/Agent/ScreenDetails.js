import React,{useState} from 'react'
import { useDispatch} from "react-redux";
import {updateTest} from '../../../redux/actions/PatientsActions'
import {useParams} from 'react-router'
import {Col,Label,Input,FormGroup,Form ,Row }  from 'reactstrap'


 function ScreenDetails() {



    let  para = useParams()

    console.log(para)
  

   
   var ids = localStorage.getItem('partnerId')

    const [ScreenData ,setScreen] =  useState({       
    "bodyAchesPresent": true,
    "coldsPresent": true,
    "coughPresent": true,
    "diarrhoeaPresent": true,
    "difficultiesInBreathingPresent": true,
    "fatiguePresent": true,
    "feverPresent": true,
    "hasATravelHistoryToACovid19InfectedArea": true,
    "hasDirectContactWithCovid19Patient": true,
    "hasTravelledPast14Days": true,
    "headachePresent": true, 
    })


    
  const dispatchs = useDispatch();
   



  const username = localStorage.getItem('username')




  const  newScreen = {
            
    "bodyAchesPresent":ScreenData.bodyAchesPresent,
    "coldsPresent": ScreenData.coldsPresent,
    "coughPresent": ScreenData.coughPresent,
    "diarrhoeaPresent": ScreenData.diarrhoeaPresent,
    "difficultiesInBreathingPresent":ScreenData.difficultiesInBreathingPresent,
    "fatiguePresent": ScreenData.fatiguePresent,
    "feverPresent": ScreenData.feverPresent,
    "hasATravelHistoryToACovid19InfectedArea": ScreenData.hasATravelHistoryToACovid19InfectedArea,
    "hasDirectContactWithCovid19Patient":ScreenData.hasDirectContactWithCovid19Patient,
    "hasTravelledPast14Days": ScreenData.hasTravelledPast14Days,
    "headachePresent":ScreenData.headachePresent , 
     patientId:ids,
     "testingAgentUsername":username


}


const handleSubmit = (e) => {

  e.preventDefault();

    dispatchs(updateTest(newScreen))



  };



  
    return (
      
      <div>
      <h5 className="h" style={{borderLeft: "10px solid #4c8c40"}}>Patient's  Screens</h5>
      <Form onSubmit={handleSubmit}>
          <Row form>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleCity">Cough:</Label>
                      <Input type="select" name="travelled" value={ScreenData.coughPresent} onChange={e=>setScreen({ ...ScreenData ,coughPresent:e.target.value})} >
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleState">Colds</Label>
                      <Input type="select" name="travelled" value={ScreenData.coldsPresent} onChange={e=>setScreen({ ...ScreenData ,coldsPresent:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
  
          </Row>
  
          <Row form>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleCity">Diarrhoea</Label>
                      <Input type="select" name="travelled" value={ScreenData.diarrhoeaPresent} onChange={e=>setScreen({ ...ScreenData ,diarrhoeaPresent:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleState">Sore Throat</Label>
                      <Input type="select" name="travelled" value={ScreenData.difficultiesInBreathingPresent} onChange={e=>setScreen({ ...ScreenData ,difficultiesInBreathingPresent:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
  
          </Row>
  
          <Row form>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleCity">Body Aches</Label>
                      <Input type="select" name="travelled" value={ScreenData.bodyAchesPresent} onChange={e=>setScreen({ ...ScreenData ,bodyAchesPresent:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleState">Heachache</Label>
                      <Input type="select" name="travelled" value={ScreenData.headachePresent} onChange={e=>setScreen({ ...ScreenData ,headachePresent:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
  
          </Row>
  
          <Row form>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleCity">Tempreratue above 37.8 </Label>
                      <Input type="select" name="travelled" value={ScreenData.feverPresent} onChange={e=>setScreen({ ...ScreenData ,feverPresent:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleState">Difficulty in breathing</Label>
                      <Input type="select" name="travelled" value={ScreenData.coughPresent} onChange={e=>setScreen({ ...ScreenData ,coughPresent:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
  
          </Row>
  
          <Row form>
  
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleState">Travelled in the past 14days</Label>
                      <Input type="select" name="travelled" value={ScreenData.hasTravelledPast14Days} onChange={e=>setScreen({ ...ScreenData ,hasTravelledPast14Days:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
  
          </Row>
  
          <Row form>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
                      <Input type="select" name="travelled" value={ScreenData.hasATravelHistoryToACovid19InfectedArea} onChange={e=>setScreen({ ...ScreenData ,hasATravelHistoryToACovid19InfectedArea:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleState">Any direct contact with a Covid patient</Label>
                      <Input type="select" name="travelled" value={ScreenData.hasDirectContactWithCovid19Patient} onChange={e=>setScreen({ ...ScreenData ,hasDirectContactWithCovid19Patient:e.target.value})} id="gender">
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
  
          </Row>
          <div align="right" style={{paddingTop:10}}>
              <button className="btn btn-success" type="submit">submit</button>
          </div>
      </Form>
  
  </div>
    )
}


export default ScreenDetails