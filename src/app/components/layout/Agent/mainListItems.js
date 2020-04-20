import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NoteIcon from '@material-ui/icons/Note';

export const mainListItems = (
  <div style={{backgroundColor:"#4c8c40",minHeight:'90vh'}}>
  
    <ListItem button>
<Link to="/agent">
<ListItemIcon style={{color:'white'}}>
        <DashboardIcon  />
      </ListItemIcon></Link>
      <Link to="/agent" style={{color:'white'}}>
      <ListItemText primary="Screen Patient" />
      </Link>    
    </ListItem>
    <ListItem button> 
     <Link to='/allpatients'>
     <ListItemIcon style={{color:'white'}}>
        <PeopleIcon />
      </ListItemIcon>
     </Link>
      <Link to='/allpatients' style={{color:'white'}}>
      <ListItemText primary="All Patients" />
      </Link>
    </ListItem>  
    <ListItem button>
      <Link to='/pending'>
      <ListItemIcon style={{color:'white'}}>
        <NoteIcon />
      </ListItemIcon>
      </Link>
      <Link to='/pending' style={{color:'white'}}>
      <ListItemText primary="Pending Results" />
      </Link>
    </ListItem>


    <ListItem button>
    <Link to='/allkits'>
    <ListItemIcon style={{color:'white'}}>
      <BusinessCenterIcon />
    </ListItemIcon>
    </Link>
    <Link to='/allkits' style={{color:'white'}}>
    <ListItemText primary="Kits" />
    </Link>
  </ListItem>
  </div>
);
