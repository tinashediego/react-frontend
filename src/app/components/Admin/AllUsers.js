import React  ,{useEffect}from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from  'react-router-dom'
import {allUsers} from '../../../redux/actions/authActions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const AllUsers  = (props) =>{ 

  // Generate Order Data
function createData(id, date, name, shipTo, paymentMethod) {
  return { id, date, name, shipTo, paymentMethod};
}




  const content = useSelector((state) => state.auth.allusers);
  
  //this hook gives us redux store state


  console.log(content)
  const dispatch = useDispatch(allUsers());



  useEffect(() => {
    dispatch(allUsers());
  }, []);


  let a  =  content.map((x,i)=>(

    <TableRow key={i}>
    <TableCell>{i +1}</TableCell>
    <TableCell>{x.username}</TableCell>
    <TableCell>{x.firstName}</TableCell>
    <TableCell>{x.lastName}</TableCell>
    <TableCell>{x.qualification}</TableCell>
    <TableCell>{x.email}</TableCell>
    <TableCell>{x.phoneNumber}</TableCell>
    <TableCell> {x.addressOfPractice} </TableCell>

    <TableCell> {x.practicingNumber}</TableCell>

    
    </TableRow>


  
 
  ))
  return (
    <div>

   

    <h5 className="container" style={styles.container}>All Users</h5>
    <button className="btn btn-success" ><Link to="adduser" style={{color:'white'}}>Add User</Link></button>
    <Table size="small" className="table table-striped table-bordered" >
  
  <TableHead>
    <TableRow>
      <TableCell>#</TableCell>
      <TableCell>Username</TableCell>
      <TableCell>First Name</TableCell>
      <TableCell>Last Name</TableCell>
      <TableCell>Qualification</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Phone Number</TableCell>
      <TableCell>Address of Practicing</TableCell>
      <TableCell>Practicing Number</TableCell>
  
    </TableRow>
  </TableHead>
  <TableBody>
 


    {a}
  </TableBody>
</Table>
      
 
    </div>
  );
}




const styles={
  container:{
    borderLeft:"10px solid #4c8c40"
  },
}

export default AllUsers