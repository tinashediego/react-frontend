import React  ,{useState}from 'react';
import {Button ,Table }  from 'reactstrap'
import {Link} from  'react-router-dom'


const AgentDashboard  = (props) =>{ 

  return (
    <div>
    
    <div style={{marginTop:70 ,padding:10}}>
    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>Test Statistics</h1>
   <Table striped style={{boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>TEST RESULT</th>
          <th>TOTAL</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>positive</td>
          <td>150</td>
       
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>NEGATIVE</td>
        <td>120</td>
  
     </tr>
  
      </tbody>
    </Table>
    
    
    
    </div>


    
    </div>
  );
}






export default AgentDashboard;