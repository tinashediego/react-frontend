import React  ,{useEffect}from 'react';
import {Button}  from 'reactstrap'
import {Link} from  'react-router-dom'
import {allKits} from '../../../redux/actions/KitsActions'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';


const AllKits  = (props) =>{ 

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, action) {
  return { id, date, name, shipTo, paymentMethod, action };
}


  const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000'),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
  ];


  const content = useSelector((state) => state.kits.allkits);
  
  //this hook gives us redux store state


  const dispatch = useDispatch(allKits());


  useEffect(() => {
    dispatch(allKits());
  }, [])



  console.log(content)

     /*let a  =  content.map((x,i)=>(

    <tr key={i}>
    <th>{i +1}</th>
    <td>{x.username}</td>
    <td>{x.firstName}</td>
    <td>{x.lastName}</td>
    <td>{x.qualification}</td>
    <td>{x.email}</td>
    <td> {x.addressOfPractice} </td>
    <td>{x.groupName}</td>
    <td> {x.practicingNumber}</td>
    </tr>
  
  ))*/
  return (
    <div>

   

    <h5 className="container" style={styles.container}>All Kits</h5>
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
        <TableCell align="right"><a href="#" style={{color:"green"}} ><BorderColorIcon/></a>&nbsp;&nbsp;<a style={{color:"red"}} href="#"><DeleteIcon /></a></TableCell>
      </TableRow>
    ))}
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



export default AllKits;