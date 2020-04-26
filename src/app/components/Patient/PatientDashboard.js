import React  ,{useState ,useEffect}from 'react';
import {Col,Label,FormGroup,Form ,Row ,Table,}  from 'reactstrap'
import axios from 'axios'
import QRCode from 'qrcode'


const PatientDashboard  = (props) =>{ 

  const [repo ,setRepo] = useState([])



  useEffect(()=>{
   const  fetchData = async () =>{

    const resp =  await axios.get('http://45.76.141.84:8080/v1/maisha-status-report')
  
   
       setRepo(resp.data)
  

    }

    fetchData()
    generateQR()
  },[])


  
  function generateQR() {
    let str = 'https://telpatizy.herokuapp.com/'
    QRCode.toCanvas(document.getElementById('canvas'), str)
    }


 
  








  return (
    <div style={{ border:"4px solid  rgba(76,140,64,0.6) "}}>
  
    <div>
     <canvas id="canvas"  align="center" />
     
</div>


    <Form style={{padding:20,}}>

    <div md={6}>
    
    

    <h3>Patel Personal Details</h3>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleEmail">First Name</Label>
          <h6>Patel</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="examplePassword">Last Name</Label>
          <h6>Lincon</h6>
        </FormGroup>
      </Col>
    </Row>

    <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">Date Of Birth</Label>
        <h6>01/01/01</h6>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword"> National Id</Label>
        <h6 >567-296335-f17</h6>
      </FormGroup>
    </Col>
  </Row>

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Address</Label>
          <h6 >47 casteen belverder</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Phone Number</Label>
          <h6>07821442345</h6>
        </FormGroup>
      </Col>
  
    </Row>


    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Email Address</Label>
          <h6 >1123@gmail.com</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Gender</Label>
          <h6 >Male</h6>
        </FormGroup>
      </Col>
  
    </Row>


    
    </div>




    <h3>
    Last Screening Details  
     </h3>

    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Cough:</Label>
         <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Colds</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Diarrhoea</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Sore Throat</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Body Aches</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Heachache</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Tempreratue above 37.8 </Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Difficulty in breathing</Label>
          <h6 style={{color:'green'}}>No</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Fatigue</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Travelled  in the past 14days</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
          <h6 style={{color:'green'}}>No</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Any direct contact with a Covid patient</Label>
          <h6 style={{color:'green'}}>No</h6>
        </FormGroup>
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
        <td>01/01/01</td>
        <td>REd Cross</td>
        <td>13543</td>
        <td>Des</td>
        <td>negative</td>
       

      </tr>
    </tbody>
  </Table>
  

  </Row>
  </Form>

   
    </div>
  );
}






export default PatientDashboard;