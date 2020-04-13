import React  ,{useEffect}from 'react';
import Submenu from '../layout/Agent/SubMenu' ;
import {Button ,Table }  from 'reactstrap'
import {Link} from  'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {allPatient} from '../../../redux/actions/PatientsActions'
import { useHistory } from "react-router";


const AllPatients  = (props) =>{ 

  
  const content = useSelector((state) => state.patients.allpatients);
  
  //this hook gives us redux store state


  console.log(content)
  const dispatch = useDispatch(allPatient());
  useEffect(() => {
    dispatch(allPatient());
  }, []);

  let history = useHistory()

 function handleScreens(id){

    
  
    history.goBack()
   
  



  }

  
 function handleTest(id){

    
  
  history.goBack()
 




}




  return (
    <div>
    <div>
    <h1>All Patients     <Button className='btn-info' > <Link to="/addpatient" >New Patient</Link></Button></h1>
   <Table striped style={{boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Nationa Id</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Gender</th>
           <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        <tr>
        <th scope="row">1</th>
        <td>Tindo</td>
        <td>Doctor</td>
        <td>mark@mark.com</td>
          <td>0780</td>
          <td>1234</td>
       
       <td>   <Button  onClick={handleScreens} className="btn btn-info"><Link to='/patientDetails' style={{color:"white"}}>Screens</Link></Button></td> 
       <td>   <Button   onClick={handleTest} className="btn btn-info"><Link to='/patientDetails' style={{color:"white"}}>Tests</Link></Button></td> 
      </tr>

      </tbody>
    </Table>
    
    
    
    </div>

    
    </div>
  );
}






export default AllPatients;