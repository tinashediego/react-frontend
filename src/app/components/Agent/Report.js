import React, {useState, useEffect} from 'react';
import {
    Col,
    Label,
    FormGroup,
    Form,
    Row,
    Table
} from 'reactstrap'
import axios from 'axios'
import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import Logo from '../../../assets/logo.png';
import html2canvas from 'html2canvas'
import * as jsPDF from 'jspdf';





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Report({reset}) {


  const classes = useStyles()

    const [repo,
        setRepo] = useState([])

    var id = localStorage.getItem('testId')

    useEffect(() => {
        const fetchData = async() => {

            const resp = await axios.post('http://45.76.141.84:8080/v1/maisha-status-report', {testId: id})

            setRepo(resp.data)

        }

        fetchData()

    }, [id])

    console.log(repo)

    let {testingDetails} = repo
    if (!repo) {

        return 'loadding'

    }

    if (!testingDetails) {

        return 'Loading ....'

    } else {

        console.log(Object.keys(testingDetails))
    }

    // let {patient} =  patientScreening
    // {`${`${patientScreening.bodyAchesPresent}`}`}
    // console.log(patientScreening[0].patientId);

    console.log(repo.patientScreeningDTO)


    

    return (
        <div  id="content" >

        <div style={{
          textAlign: "center"
      }}>
          <img
              alt="Logo"
              style={{
              height: "100px"
          }}
              src={Logo}></img>
      </div>

            <Form
                style={{
                paddingLeft: "auto",
                marginLeft: 20
            }}>

                <Row form>
                    <Col md={12}>
                        <fieldset>
                            <legend>{repo.firstName}
                                Personal Details</legend>
                        </fieldset>
                        <Row form>
                            <Col md={4}>
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

                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail">Date Of Birth</Label>
                                    <h6>{repo.dateOfBirth}</h6>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState">Phone Number</Label>
                                    <h6>{repo.phoneNumber}</h6>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        National Id</Label>
                                    <h6 >{repo.nationalIDNumber}</h6>
                                </FormGroup>
                            </Col>

                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword">Passport Number</Label>
                                    <h6 >{repo.passportNumber}</h6>
                                </FormGroup>
                            </Col>

                        </Row>

                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleCity">Email Address</Label>
                                    <h6 >{repo.email}</h6>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleCity">Address</Label>
                                    <h6 >{repo.address}</h6>
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
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.coughPresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.coughPresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleState">Colds</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.coldsPresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.coldsPresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>

                        </Row>

                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="exampleCity">Diarrhoea</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.diarrhoeaPresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.diarrhoeaPresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleState">Sore Throat</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.difficultiesInBreathingPresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.difficultiesInBreathingPresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>

                        </Row>

                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="exampleCity">Body Aches</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.bodyAchesPresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.bodyAchesPresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleState">Heachache</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.headachePresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.headachePresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>

                        </Row>

                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="exampleCity">Fever</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.feverPresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.feverPresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleState">Difficulties in breathing</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.difficultiesInBreathingPresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.difficultiesInBreathingPresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>

                        </Row>

                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="exampleCity">Fatigue</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.fatiguePresent === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.fatiguePresent === true
                                            ? 'YES'
                                            : 'NO'}</h6>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleState">Travelled in the past 14 days</Label>
                                    <h6
                                        style={{
                                        color:  repo.patientScreeningDTO.hasDirectContactWithCovid19Patient === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.hasDirectContactWithCovid19Patient === true
                                            ? 'YES'
                                            : 'NO'}
                                    </h6>
                                </FormGroup>
                            </Col>

                        </Row>

                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
                                    <h6
                                        style={{
                                        color: repo.patientScreeningDTO.hasDirectContactWithCovid19Patient === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.hasDirectContactWithCovid19Patient === true
                                            ? 'YES'
                                            : 'NO'}
                                    </h6>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleState">Any direct contact with a Covid-19 patient</Label>
                                    <h6
                                        style={{
                                        color: repo.patientScreeningDTO.hasDirectContactWithCovid19Patient === true
                                        ? 'red'
                                        : 'green'
                                    }}>{repo.patientScreeningDTO.hasDirectContactWithCovid19Patient === true
                                            ? 'YES'
                                            : 'NO'}
                                    </h6>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">Country</Label>
                                <h6
                                    style={{
                                    color:'green'
                                }}>{repo.patientScreeningDTO.countryVisited}
                                </h6>
                            </FormGroup>
                        </Col>

                        </Row>

                        <Row form>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="exampleCity">Country Travveled</Label>
                                <h6
                                    style={{
                                    color:  repo.patientScreeningDTO.countryTravelledTo === null
                                    ? 'red'
                                    : 'green'
                                }}>{repo.patientScreeningDTO.countryTravelledTo}</h6>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleState">Received any Covid Councelling?</Label>
                                <h6
                                    style={{
                                    color:  repo.patientScreeningDTO.receivedAnyCounsellingOnCovid19 === true
                                    ? 'red'
                                    : 'green'
                                }}>{repo.patientScreeningDTO.receivedAnyCounsellingOnCovid19 === true
                                        ? 'YES'
                                        : 'NO'}
                                </h6>
                            </FormGroup>
                        </Col>

                    </Row>

                    </Col>

                </Row>

                <h3>Testing Details</h3>

                <Row form>
                    <Table
                        striped
                        style={{
                        boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        overflowX: "hidden"
                    }}
                        responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Brand Name of Kit</th>
                                <th>Batch Number</th>
                                <th>Result</th>
                                <th>Testing Agent Name</th>
                                <th>Qualification</th>
                                <td>Address</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <th scope="row">1</th>
                                <td>{testingDetails.dateOfTest}</td>
                                <td>{testingDetails.testKitBrandName}</td>
                                <td>{testingDetails.testKitSerialNumber}</td>
                                <td>{testingDetails.result}</td>
                                <td>{testingDetails.testingAgent}</td>
                                <td>{testingDetails.qualification}</td>
                                <td>{testingDetails.addressOfPractice}</td>

                            </tr>
                        </tbody>
                    </Table>

                </Row>
            </Form>

            <Button 
            variant="contained"
            color="primary"
            className={classes.submit} onClick={reset}>Go to New Test</Button>


        </div>

    )
}
