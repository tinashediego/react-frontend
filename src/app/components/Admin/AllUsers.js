import React  ,{useEffect}from 'react';
import Submenu from '../layout/Admin/SubMenu' ;
import { useDispatch, useSelector } from "react-redux";
import {Button ,Table }  from 'reactstrap'
import {Link} from  'react-router-dom'
import {allUsers} from '../../../redux/actions/authActions'


const AllUsers  = (props) =>{ 


  const content = useSelector((state) => state.auth.allusers);
  
  //this hook gives us redux store state


  console.log(content)
  const dispatch = useDispatch(allUsers());



  useEffect(() => {
    dispatch(allUsers());
  }, []);

  let a  =  content.map((x,i)=>(

    <tr key={i}>
    <th>{i +1}</th>
    <td>{x.username}</td>
    <td>{x.firstName}</td>
    <td>{x.lastName}</td>
    <td>{x.qualification}</td>
    <td>{x.email}</td>
    <td>{x.phoneNumber}</td>
    <td> {x.addressOfPractice} </td>

    <td> {x.practicingNumber}</td>
    </tr>


  
 
  ))
  return (
    <div>
    <Submenu />
    <div style={{marginTop:70 ,padding:10}}>
    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>All Users     <Button className='btn-danger'> <Link to="/adduser" style={{color:'white'}}>Add User</Link></Button></h1>
   <Table striped style={{boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last name</th>
          <th>Qualification</th>
          <th>Email</th>
          <th>Phone Number</th>    
          <th>Address Of Practise</th>
          <th>Practising Number</th>
        </tr>
      </thead>
      <tbody>

      {a}
      </tbody>
    </Table>
    
    
    
    </div>

    
    </div>
  );
}






export default AllUsers