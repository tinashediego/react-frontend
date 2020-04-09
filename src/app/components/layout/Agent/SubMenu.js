
import React from 'react';

//import {Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

import SideBar from  './SideBar'
import { useDispatch ,useSelector} from "react-redux";
import {logoutUser , } from '../../../../redux/actions/authActions'

const SubMenu = () => {


  

  const dispatch = useDispatch();
  const user =  localStorage.getItem('username')



  function logout (){


    dispatch(logoutUser())

  }


  return (
    
         <div>

         
        <Navbar  light fixed="top" expand="md" style={{  backgroundColor:"white",boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <SideBar/>  
            <Nav className="ml-auto" navbar>
            <NavItem><span style={{float:"right", fontSize:23, marginRight:10,color:"rgba(76,140,64,0.6)"}}>{user}</span></NavItem>
            <NavItem  onClick={logout}><Button color='#fff'> Log Out</Button></NavItem>
         </Nav>    
        </Navbar>
      
    </div>
      
  
  );
}



export default SubMenu