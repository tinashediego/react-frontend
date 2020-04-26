import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {Link} from 'react-router-dom'

export const mainListItems = (
  <div className="MuiList-padding" style={{backgroundColor:"#4c8c40",height:'90vh'}}>
  
  <ListItem button>

  
<Link to="/dashboard">
<ListItemIcon style={{color:'white'}}>
  <DashboardIcon  />
</ListItemIcon>
</Link>

<Link to="/dashboard" style={{color:'white'}}>

<ListItemText primary="Dashboard" />
</Link>    
</ListItem>
<ListItem button> 
<Link to="/allusers">
<ListItemIcon style={{color:'white'}}>
  <PeopleIcon />
</ListItemIcon>
</Link>
<Link to='/allusers' style={{color:'white'}}>
<ListItemText primary="Users" />
</Link>
</ListItem> 
<ListItem button>
<Link to="/allkits">
<ListItemIcon style={{color:'white'}}>
  <BusinessCenterIcon />
</ListItemIcon>
</Link>
<Link to='/allkits' style={{color:'white'}}>
<ListItemText primary="Kits" />
</Link>
</ListItem>
<ListItem button> 
<Link to="/allfacilities">
<ListItemIcon style={{color:'white'}}>
  <LocalHospitalIcon />
</ListItemIcon>
</Link>
<Link to='/allfacilities' style={{color:'white'}}>
<ListItemText primary="Testing Facilities" />
</Link>
</ListItem>  
  </div>
);
