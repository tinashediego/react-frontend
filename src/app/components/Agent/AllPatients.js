import React  ,{useEffect}from 'react';
import {Button  }  from 'reactstrap'
import {Link} from  'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {allPatient} from '../../../redux/actions/PatientsActions'
import { useHistory } from "react-router";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';


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


let a  =  content.map((x,i)=>(

  <TableRow key={i}>
  <TableCell>{i +1}</TableCell>
  <TableCell>{x.fullName}</TableCell>
  <TableCell>{x.email}</TableCell>
  <TableCell>{x.phoneNumber}</TableCell>
  <TableCell>{x.nationalIdNumber}</TableCell>
  <TableCell>{x.passportNumber}</TableCell>
  <TableCell>{x.gender}</TableCell>
  <TableCell> {x.dateOfBirth} </TableCell>

  <TableCell align="right"><Link to={`/onescreen/${x.patientId}`} style={{color:"green"}} ><BorderColorIcon/></Link>&nbsp;<Link style={{color:"red"}} to={`/test/${x.patientId}`}><DeleteIcon /></Link></TableCell>
  </TableRow>




))




  return (
    <div>
  
    <h1>All Patients </h1>
  
    <button><Link to="/addpatient" >New Patient</Link></button>
    <Table size="small" className="table table-striped" >

        <TableHead>
          <TableRow>
            <TableCell>No#</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>National Id</TableCell>
            <TableCell>Passport Number</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Date Of Birth</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {a}
        </TableBody>
        </Table>
    
    
    
  

    
    </div>
  );
}






export default AllPatients;