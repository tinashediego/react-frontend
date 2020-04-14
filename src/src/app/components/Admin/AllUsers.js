import React  ,{useEffect}from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Button }  from 'reactstrap'
import {Link} from  'react-router-dom'
import {allUsers} from '../../../redux/actions/authActions'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';


const AllUsers  = (props) =>{ 

  // Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, action) {
  return { id, date, name, shipTo, paymentMethod, action };
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

    <TableCell align="right"><a href="#" style={{color:"green"}} ><BorderColorIcon/></a>&nbsp;<a style={{color:"red"}} href="#"><DeleteIcon /></a></TableCell>
    </TableRow>


  
 
  ))
  return (
    <div>

   

    <h5 className="container" style={styles.container}>All Users</h5>
    <button className="btn btn-success">Add User</button>
      
  
  
    

    {a}
 
    </div>
  );
}




const styles={
  container:{
    borderLeft:"10px solid #4c8c40"
  },
}

export default AllUsers