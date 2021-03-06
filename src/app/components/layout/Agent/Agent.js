import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './mainListItems';
import {useLocation ,useParams ,useHistory} from 'react-router'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Tooltip from '@material-ui/core/Tooltip';


import AllPatients from '../../Agent/AllPatients';
import EditPatient from '../../Agent/EditPatient';



import AddPatient from '../../Agent/AddPatients';
import MyTests from "../../Agent/MyTests";
import {logoutUser ,} from '../../../../redux/actions/authActions'
import { useDispatch} from "react-redux"
import Logo from '../../../../assets/logo.png';
import EditStepper from '../../Agent/EditStepper';
import Defect from '../../Agent/Defect';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));





export default function Agent() {

  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const location =  useLocation()
  let his =  useHistory()
  let  para = useParams()
  let  username = localStorage.getItem('username')

  let Role = localStorage.getItem('Role')


  if(Role  !== 'AGENT'){

    localStorage.clear()
    his.goForward('/')



  }





  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
 

  function switchPages(){

    switch (location.pathname) {
      case '/agent':

       return<MyTests/>
     case'/allpatients' :
              return<AllPatients/>
  
     case`/test/${para.id}`:

     return <EditStepper/>
 
     case '/addpatient':
       return <AddPatient />
    
     case '/mytests':
      return <MyTests />


      case '/defect':
      return <Defect />
      case`/editPatient/${para.id}`:

      return <EditPatient/>

    
      default:
        break;
    }

  }

  function logout (){

    dispatch(logoutUser())

  }

  function handlePassword(){

    his.push('/change') 




  }

  
 
  
  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style={{backgroundColor: "#fff",color: "black"}}>
        <Toolbar className={classes.toolbar}>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                <img src={Logo} style={{width:"64px"}} alt="LOGO"></img>

            </Typography>

            <Tooltip title="Log Out" aria-label="Log Out" onClick={logout}>
          
            <IconButton color="inherit" >
                <h5>{username} | Logout</h5>

                <AccountCircleIcon/>

            </IconButton>
            

            </Tooltip>


           

            <Tooltip title="Change Password" aria-label="password"  onClick={handlePassword}>
            <IconButton color="inherit" >
            
            <LockOpenIcon/>

            
            </IconButton>
            
          </Tooltip>

      

            
        </Toolbar>
    </AppBar>
    <Drawer variant="permanent" classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }} open={open}>
        <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />

    </Drawer>
    <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lx" className={classes.container}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {switchPages()}
                    </Paper>
                </Grid>
            </Grid>
            <Box style={{marginTop:105,marginBottom:-5}}>

                <Copyright />

            </Box>
        </Container>
    </main>
</div>
  );
}