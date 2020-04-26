import React  ,{useState ,useEffect}from 'react';
import {Col,Label,FormGroup,Form ,Row ,Table,}  from 'reactstrap'
import axios from 'axios'
import { Button } from '@material-ui/core';


export default function Report({reset}) {

    const [repo ,setRepo] = useState([])

    var id =  localStorage.getItem('testId')

    useEffect(()=>{
        const  fetchData = async () =>{
     
         const resp =  await axios.get(`http://45.76.141.84:8080/v1/tests/${id}/agent/test-report`)
         const generate =  await axios.post('http://45.76.141.84:8080/v1/maisha-status-report' ,{testId:id})
       
        
            setRepo(resp.data)
            console.log(generate.data)
       
     
         }
     
         fetchData()
         
       },[])


       //console.log(repo)


    if(!repo){


        return 'loadding'
    }
     

      let {patientFullName ,result ,dateOfTest,testKitBrandName ,testKitBatchNumber ,testingAgentFullName,patientPhoneNumber ,patientScreening} =  repo

     
      // let {patient} =  patientScreening {`${`${patientScreening.bodyAchesPresent}`}`}


     // screenData(patientScreening)

      console.log(repo)

   

  
     



 
    

















     
    return (
        <div style={{ border:"4px solid  rgba(76,140,64,0.6) "}}>
  
    
        <Form style={{padding:20,}}>
<Row form>
        <Col md={6}>
    
        <h3>Personal Details</h3>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEmail">First Name</Label>
              <h6>{patientFullName}</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="examplePassword">Last Name</Label>
              <h6>Lincon</h6>
            </FormGroup>
          </Col>
        </Row>
    
        <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Date Of Birth</Label>
            <h6>01/01/01</h6>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePassword"> National Id</Label>
            <h6 >567-296335-f17</h6>
          </FormGroup>
        </Col>
      </Row>
    
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">Address</Label>
              <h6 >47 casteen belverder</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleState">Phone Number</Label>
              <h6>{patientPhoneNumber}</h6>
            </FormGroup>
          </Col>
      
        </Row>
    
    
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">Email Address</Label>
              <h6 >1123@gmail.com</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleState">Gender</Label>
              <h6 >Male</h6>
            </FormGroup>
          </Col>
      
        </Row>
    
    
        
 

        </Col>
    
    
    <Col md={6}>
    
        <h3>
        Last Screening Details  
         </h3>
    
        
    
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">Cough:</Label>
             <h6 style={{color:'red'}}>{7}</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleState">Colds</Label>
              <h6 style={{color:'red'}}>yes</h6>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">Diarrhoea</Label>
              <h6 style={{color:'red'}}>yes</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleState">Sore Throat</Label>
              <h6 style={{color:'red'}}>yes</h6>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">Body Aches</Label>
              <h6 style={{color:'red'}}>yes</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleState">Heachache</Label>
              <h6 style={{color:'red'}}>yes</h6>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">Tempreratue above 37.8 </Label>
              <h6 style={{color:'red'}}>yes</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleState">Difficulty in breathing</Label>
              <h6 style={{color:'green'}}>No</h6>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">Fatigue</Label>
              <h6 style={{color:'red'}}>yes</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleState">Travelled  in the past 14days</Label>
              <h6 style={{color:'red'}}>yes</h6>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
              <h6 style={{color:'green'}}>No</h6>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleState">Any direct contact with a Covid patient</Label>
              <h6 style={{color:'green'}}>No</h6>
            </FormGroup>
          </Col>
      
        </Row>

        </Col>
    
        </Row>
    
    
        
        <h3>Testing Details</h3>
    
    
        <Row form>
        <Table striped style={{boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" ,overflowX: "hidden"}} responsive>
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
            <td>{dateOfTest}</td>
            <td>{testKitBrandName}</td>
            <td>{testKitBatchNumber}</td>
            <td>{testingAgentFullName}</td>
            <td>{result}</td>
           
    
          </tr>
        </tbody>
      </Table>
      
    
      </Row>
      </Form>
    
         <Button  onClick={reset} color="primary">Finish</Button>
        </div>
      
    )
}



/// you are now uptodate with the latedst