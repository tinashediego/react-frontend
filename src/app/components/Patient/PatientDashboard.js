import React, {useState, useEffect} from 'react';
import {
    Col,
    Label,
    FormGroup,
    Form,
    Row,
  
} from 'reactstrap'
import {useHistory} from 'react-router'
import axios from 'axios'
import QRCode from 'qrcode'

const PatientDashboard = (props) => {

    const [repo,
        setRepo] = useState([])
    const [user,
        setUser] = useState([])

    let loc = useHistory()

    useEffect(() => {
        const fetchData = async() => {

            const resp = await axios.get('http://45.76.141.84:8080/v1/maisha-status-report')
            const users = await axios.get('http://45.76.141.84:8080/v1/users/profile')

            setRepo(resp.data)
            setUser(users.data)

        }

        fetchData()

    }, [])

    var {usedOTP} = user

    console.log(usedOTP)


    let {testingDetails} = repo

    if (!testingDetails) {

        






        return <canvas id="canvas" align="center"/>

    } else {

        
        usedOTP === false ? loc.push('/otp') : console.log('its now true')
        function generateQR() {
            let str = "TEST RESULTS :" + testingDetails.result
            QRCode.toCanvas(document.getElementById('canvas'), str)
        }
        generateQR()

      
    }

    return (
        <div style={{
            border: "4px solid rgba(76,140,64,0.6) "
        }}>

            <div>
                <canvas id="canvas" align="center"/>

            </div>

            <Form style={{
                padding: 20
            }}>

                <div md={6}>

                    <h3>{repo.firstName}
                        Personal Details</h3>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">First Name</Label>
                                <h6>{repo.firstName}</h6>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Last Name</Label>
                                <h6>{repo.lastName}</h6>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Date Of Birth</Label>
                                <h6>{repo.dateOfBirth}</h6>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    National Id</Label>
                                <h6 >{repo.nationalIDNumber}</h6>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">Address</Label>
                                <h6 >{repo.address}</h6>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleState">Phone Number</Label>
                                <h6>{repo.phoneNumber}</h6>
                            </FormGroup>
                        </Col>

                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">Email Address</Label>
                                <h6 >{repo.email}</h6>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleState">Gender</Label>
                                <h6 >{repo.gender}</h6>
                            </FormGroup>
                        </Col>

                    </Row>

                </div>

                <h3>
                    Last Screening Details
                </h3>

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
  
        
  
    
  
  

            </Form>

        </div>
    );
}

export default PatientDashboard;