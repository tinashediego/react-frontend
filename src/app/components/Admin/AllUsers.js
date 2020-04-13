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


  const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000'),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
    createData(content)
  ];

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
    <button>Add User</button>
      <Table size="small" className="table table-striped" >
  
  <TableHead>
    <TableRow>
      <TableCell>Date</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Ship To</TableCell>
      <TableCell>Payment Method</TableCell>
      <TableCell align="right">Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.shipTo}</TableCell>
        <TableCell>{row.paymentMethod}</TableCell>
        <TableCell align="right"><a href="#" style={{color:"green"}} ><BorderColorIcon/></a>&nbsp;<a style={{color:"red"}} href="#"><DeleteIcon /></a></TableCell>
      </TableRow>
    ))}


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