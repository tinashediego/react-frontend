import React , {useState} from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import './SideBar.css'


const SideBar  =  ({props})  => {

  return (

    <Menu>
    <Link className="menu-item" to="/agent">
      Home
    </Link>

    <Link className="menu-item" to="/allpatients">
      Patients
    </Link>



  </Menu>


  );
};


export default SideBar