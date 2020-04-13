import React  ,{useState}from 'react';
import {Button ,Table }  from 'reactstrap'
import {Link} from  'react-router-dom'


const MyTests  = (props) =>{ 

  return (
    <div>
    
    <div >
    <h1 >My Tests</h1>
   <Table striped  responsive>
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






export default MyTests;