import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'


export const mainListItems = (
  <div style={{backgroundColor:"#4c8c40",minHeight:'90vh'}}>
  
    <ListItem button>
<<<<<<< HEAD
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
=======


      <Link to="/agent">
      <ListItemIcon style={{color:'white'}}>
        <DashboardIcon  />
      </ListItemIcon>
      </Link>
      <Link to="/agent" style={{color:'white'}}>

      <ListItemText primary="TEST PATIENT" />
      </Link>    
    </ListItem>
    <ListItem button> 
      <Link to="/allpatients">
        <ListItemIcon style={{color:'white'}}>
        <PeopleIcon />
      </ListItemIcon>
      </Link>
>>>>>>> 8864102019981080e442ce31136c9c6776564283
      <Link to='/allpatients' style={{color:'white'}}>
      <ListItemText primary="All Patients" />
      </Link>
    </ListItem>  
<<<<<<< HEAD
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
=======

>>>>>>> 8864102019981080e442ce31136c9c6776564283
  </div>
);
