import React , {useState} from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import './SideBar.css'


const SideBar  =  ({props})  => {

  return (

    <Menu>
    <Link className="menu-item" to="/">
      Home
    </Link>

    <Link className="menu-item" to="/allusers">
      Users
    </Link>


    <Link className="menu-item" to="/allkits">
    Kits
  </Link>




  </Menu>


  );
};


export default SideBar