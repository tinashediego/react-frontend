import React,{useState} from 'react'

import {Col,Label,Input,FormGroup,Form ,Row }  from 'reactstrap'
import Alert from '@material-ui/lab/Alert';
import countryList  from './country'
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
  
  
  

 function ScreenDetails({next}) {


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
      next()
    };

   const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenError(false);
        
      };
  
  

   
   var ids = localStorage.getItem('patientId')

    const [ScreenData ,setScreen] =  useState({ 
        thisAChild:false,      
    "bodyAchesPresent":'',
    "coldsPresent":'',
    "coughPresent": '',
    "diarrhoeaPresent": '',
    "difficultiesInBreathingPresent": '',
    "fatiguePresent": '',
    "feverPresent":'',
    "hasATravelHistoryToACovid19InfectedArea": '',
    "hasDirectContactWithCovid19Patient": '',
    "hasTravelledPast14Days":'',
    "headachePresent": '', 
    "receivedAnyCounsellingOnCovid19":""
    })


    


   



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
    "hasTravelledPast21DaysOutsideZimbabwe": ScreenData.hasTravelledPast14Days,
    "headachePresent":ScreenData.headachePresent , 
    "countryVisited": ScreenData.countryVisited,
     patientId:ids,
     "testingAgentUsername":username,
     "receivedAnyCounsellingOnCovid19":ScreenData.receivedAnyCounsellingOnCovid19


}


const handleSubmit = (e) => {

  e.preventDefault();


  axios.post(`${api.apiUrl}/patient-screenings` ,newScreen)
        .then(resp =>{

            localStorage.setItem('partnerID',resp.data.id)
            handleClick()

        }).catch(err=>{


            handleClickError()
        })




  };


  function ifYes(){


    if(ScreenData.hasTravelledPast14Days === 'true'){

        return(   <Col md={6}>
            <FormGroup>
                <Label for="exampleCity">Country 
                Visited</Label>
                <Input type="select" name="travelled" value={ScreenData.countryVisited} onChange={e=>setScreen({ ...ScreenData ,countryVisited:e.target.value})}  >
                <option>Select</option>
                {countryList.map((team,i) => <option key={i} value={team}>{team}</option>)}
             
                </Input>
            </FormGroup>
        </Col>)
    }else{

        return ''
    }



  }
  let  patie = localStorage.getItem('currentPatient')

  
    return (
      
      <div>
      <h5 className="h" style={{borderLeft: "10px solid #4c8c40"}}>{patie}'s  Screens</h5>



      <div className={classes.root}>
      
      <Snackbar open={open} onClose={handleClose} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
        <Alert onClose={handleClose} severity="success">
          Patient screened successfully!
        </Alert>
      </Snackbar>


      <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
      <Alert onClose={handleCloseError} severity="error">
        There was an error, try again 
      </Alert>
    </Snackbar>
    
    </div>
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
                      <Input type="select" name="travelled" value={ScreenData.coldsPresent} onChange={e=>setScreen({ ...ScreenData ,coldsPresent:e.target.value})}  >
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
                      <Input type="select" name="travelled" value={ScreenData.diarrhoeaPresent} onChange={e=>setScreen({ ...ScreenData ,diarrhoeaPresent:e.target.value})}  >
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleState">Difficult in Breathing</Label>
                      <Input type="select" name="travelled" value={ScreenData.difficultiesInBreathingPresent} onChange={e=>setScreen({ ...ScreenData ,difficultiesInBreathingPresent:e.target.value})}  >
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
                      <Input type="select" name="travelled" value={ScreenData.bodyAchesPresent} onChange={e=>setScreen({ ...ScreenData ,bodyAchesPresent:e.target.value})}  >
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="exampleState">Heachache</Label>
                      <Input type="select" name="travelled" value={ScreenData.headachePresent} onChange={e=>setScreen({ ...ScreenData ,headachePresent:e.target.value})}  >
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
                      <Label for="exampleCity">Fever </Label>
                      <Input type="select" name="travelled" value={ScreenData.feverPresent} onChange={e=>setScreen({ ...ScreenData ,feverPresent:e.target.value})}  >
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>

              <Col md={6}>
              <FormGroup>
                  <Label for="exampleCity">Received Covid-Related-Councelling Before </Label>
                  <Input type="select" name="travelled" value={ScreenData.receivedAnyCounsellingOnCovid19} onChange={e=>setScreen({ ...ScreenData ,receivedAnyCounsellingOnCovid19:e.target.value})} >
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
                      <Label for="exampleState">Any direct contact with a Covid-19 patient</Label>
                      <Input type="select" name="travelled" value={ScreenData.hasDirectContactWithCovid19Patient} onChange={e=>setScreen({ ...ScreenData ,hasDirectContactWithCovid19Patient:e.target.value})}  >
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                      </Input>
                  </FormGroup>
              </Col>

              <Col md={6}>
              <FormGroup>
                  <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
                  <Input type="select" name="travelled" value={ScreenData.hasATravelHistoryToACovid19InfectedArea} onChange={e=>setScreen({ ...ScreenData ,hasATravelHistoryToACovid19InfectedArea:e.target.value})}  >
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
              <Label for="exampleState">Travelled in the past 21 days to Other Countries</Label>
              <Input type="select" name="travelled" value={ScreenData.hasTravelledPast14Days} onChange={e=>setScreen({ ...ScreenData ,hasTravelledPast14Days:e.target.value})}  >
              <option>Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
              
              </Input>
          </FormGroup>
      </Col>
       {ifYes()}
        

      </Row>
          <div align="right" style={{paddingTop:10}}>
              <button className="btn btn-success" type="submit">submit</button>
          </div>
      </Form>
  
  </div>
    )
}


export default ScreenDetails