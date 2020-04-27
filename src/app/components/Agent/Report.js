import React, { useState, useEffect } from 'react';
import { Col, Label, FormGroup, Form, Row, Table, } from 'reactstrap'
import axios from 'axios'


export default function Report() {

  const [repo, setRepo] = useState([])

  var id = localStorage.getItem('testId')

  useEffect(() => {
    const fetchData = async () => {

      const resp = await axios.post('http://45.76.141.84:8080/v1/maisha-status-report', { testId: id })


      setRepo(resp.data)
     


    }

    fetchData()

  }, [])


  

console.log(repo)

let {testingDetails ,} = repo
  if (!repo ) {

    

      return 'loadding'
  


    

  

   
  }



  if(!testingDetails){

        return 'Loading ....'

  }else{


    console.log(Object.keys(testingDetails))
  }

    












  

  
  // let {patient} =  patientScreening {`${`${patientScreening.bodyAchesPresent}`}`}

 // console.log(patientScreening[0].patientId);



























  return (
    <div >

  













      <Form style={{paddingLeft:"auto",marginLeft:20}}>



        <Row form>
          <Col md={12}>
<fieldset>
  <legend>{repo.firstName} Personal Details</legend>
</fieldset>  
  <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleEmail">First Name</Label>
                  <h6>{repo.firstName}</h6>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="examplePassword">Last Name</Label>
                  <h6>{repo.lastName}</h6>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleEmail">Date Of Birth</Label>
                  <h6>{repo.dateOfBirth}</h6>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="examplePassword"> National Id</Label>
                  <h6 >{repo.nationalIDNumber}</h6>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">Address</Label>
                  <h6 >{repo.address}</h6>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">Phone Number</Label>
                  <h6>{repo.phoneNumber}</h6>
                </FormGroup>
              </Col>

            </Row>


            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">Email Address</Label>
                  <h6 >{repo.email}</h6>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">Gender</Label>
                  <h6 >{repo.gender}</h6>
                </FormGroup>
              </Col>

            </Row>

          

            
            




          </Col>

<hr></hr>
          <Col md={12}>

           <fieldset>
             <legend>
              Screening Details
             </legend>
           </fieldset>


            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">Cough:</Label>
                  <h6 style={{ color: 'red' }}>{`${ `${repo.patientScreeningDTO.coughPresent}`}`}</h6>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleState">Colds</Label>
                  <h6 style={{ color: 'red' }}>{`${repo.patientScreeningDTO.coldsPresent}`}</h6>
                </FormGroup>
              </Col>

            </Row>


            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">Diarrhoea</Label>
                  <h6 style={{ color: 'red' }}>{`${repo.patientScreeningDTO.diarrhoeaPresent}`}</h6>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleState">Sore Throat</Label>
                  <h6 style={{ color: 'red' }}>{`${repo.patientScreeningDTO.difficultiesInBreathingPresent}`}</h6>
                </FormGroup>
              </Col>

            </Row>


            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">Body Aches</Label>
                  <h6 style={{ color: 'red' }}>{`${`${repo.patientScreeningDTO.bodyAchesPresent}`}`}</h6>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleState">Heachache</Label>
                  <h6 style={{ color: 'red' }}>{`${repo.patientScreeningDTO.headachePresent}`}</h6>
                </FormGroup>
              </Col>

            </Row>


            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">Tempreratue above 37.8 </Label>
                  <h6 style={{ color: 'red' }}>{`${repo.patientScreeningDTO.feverPresent}`}</h6>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleState">Difficulty in breathing</Label>
                  <h6 style={{ color: 'green' }}>{`${repo.patientScreeningDTO.difficultiesInBreathingPresent}`}</h6>
                </FormGroup>
              </Col>

            </Row>


            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">Fatigue</Label>
                  <h6 style={{ color: 'red' }}>{`${repo.patientScreeningDTO.fatiguePresent}`}</h6>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleState">Travelled  in the past 14days</Label>
                  <h6 style={{ color: 'red' }}>{`${repo.patientScreeningDTO.hasDirectContactWithCovid19Patient}`} </h6>
                </FormGroup>
              </Col>

            </Row>


            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
                  <h6 style={{ color: 'green' }}>{`${repo.patientScreeningDTO.hasDirectContactWithCovid19Patient}`} </h6>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleState">Any direct contact with a Covid patient</Label>
                  <h6 style={{ color: 'green' }}>{`${repo.patientScreeningDTO.hasDirectContactWithCovid19Patient}`} </h6>
                </FormGroup>
              </Col>

            </Row>

          </Col>

        </Row>



        <h3>Testing Details</h3>


        <Row form>
          <Table striped style={{ boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", overflowX: "hidden" }} responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Brand Name of Kit</th>
                <th>Batch Number</th>
                <th>Testing Agent</th>
                <th>Result</th>

              </tr>
            </thead>
            <tbody>
              <tr>



              
                <th scope="row">1</th>
                <td>{testingDetails.dateOfTest}</td>
                <td>{testingDetails.testKitBrandName}</td>
                <td>{testingDetails.testKitSerialNumber}</td>
                <td>{testingDetails.testingAgent}</td>
                <td>{testingDetails.result}</td>


              </tr>
            </tbody>
          </Table>


        </Row>
      </Form>


    </div>

  )
}
