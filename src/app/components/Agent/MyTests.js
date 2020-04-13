import React  ,{useState,useEffect}from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Button ,Table }  from 'reactstrap'
import {Link} from  'react-router-dom'
import { Mytests } from '../../../redux/actions/PatientsActions';


const MyTests  = (props) =>{ 




  
  const content = useSelector((state) => state.auth.allusers);
  
  //this hook gives us redux store state


  console.log(content)
  const dispatch = useDispatch(Mytests());



  let name = localStorage.getItem('username')

  useEffect(() => {
    dispatch(Mytests(name));
  }, []);

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