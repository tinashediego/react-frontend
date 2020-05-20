import React, {useState} from 'react';
import {Col, Form, FormGroup, Button} from 'reactstrap';
import Background from '../../../assets/1.jpg'
import Logo from '../../../assets/logo.png';
import {TextField} from '@material-ui/core';
import jwt_decode from "jwt-decode";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import api from '../../../utils/helpers/api';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));




const Login = ({next}) => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

    const [userData,
        setData] = useState({username: '', password: ''})
    

        const handleClick = () => {
          setOpen(true);
          
        };
        const handleClickError = () => {
            setOpenError(true);
          };
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }

          switch (Role) {
            case 'ADMIN':
                return window.location.href = '/dashboard'
            case 'AGENT':
                return window.location.href = '/agent'
            case 'PATIENT':
                return window.location.href = '/patient'
            default:
                break;
        }
      
          setOpen(false);
        
        };
      
       const handleCloseError = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
        
            setOpenError(false);
            
          };
      
    //console.log(userData)
    function handleSubmit(e) {
        e.preventDefault();
        if (userData) {

            axios
                .post(`${api.authUrl}`, userData)
                .then( async res => {
                    localStorage.setItem('access_token', res.data.jwtToken)
                    const decoded = jwt_decode(res.data.jwtToken);
                    var {Role, username} = decoded
                    localStorage.setItem('username', username)
                    localStorage.setItem('Role', Role)
                   await handleClick()  

                   

                })
                .catch(err => {

                  console.log(err)

                  handleClickError()
                })

        }
    }

    let Role = localStorage.getItem('Role')

    switch (Role) {
        case 'ADMIN':
            return window.location.href = '/dashboard'
        case 'AGENT':
            return window.location.href = '/agent'
        case 'PATIENT':
            return window.location.href = '/patient'

        default:
            break;
    }

    return (
        <div responsive="true">

            <div style={styles.img}/>


            <div className={classes.root}>
      
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{
vertical: "top",
horizontal: "center"
}} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Logged in successfully
              </Alert>
            </Snackbar>
         
         
            <Snackbar open={openError} anchorOrigin={{
vertical: "top",
horizontal: "center"
}} autoHideDuration={3000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error">
              Invalid credentials! 
            </Alert>
          </Snackbar>
          
          </div>

            <Col
                style={styles.container}
                sm="12"
                md={{
                size: 6,
                offset: 3
            }}>
                <div style={{
                    textAlign: "center"
                }}>
                    <img
                        alt="Logo"
                        style={{
                        height: "100px"
                    }}
                        src={Logo}></img>
                </div>
                <Form
                    align="center"
                    style={{
                    paddingBottom: 20,
                    marginTop: -30
                }}
                    onSubmit={handleSubmit}>
                   <div align="center">
<FormGroup>

<TextField
    label="Username"
    name="username"
    value={userData.username}
    id="username"
    placeholder="Username"
    onChange={e => setData({
    ...userData,
    username: e.target.value
})}
    style={{
    width: "50%"
}}
    required/>
</FormGroup>
<FormGroup>

<TextField
    type="password"
    label="Password"
    name="password"
    id="password"
    value={userData.password}
    placeholder="password"
    onChange={e => setData({
    ...userData,
    password: e.target.value
})}
    style={{
    width: "50%"
}}
    required/>
</FormGroup>

<Button
color="success"
style={{
width: "50%"
}}
type="submit">Submit</Button>
                   </div>

                </Form>



                <Grid item>
                <Link href="/otp" variant="body2">
                  {"Login as Patient😊"}
                </Link>
              </Grid>

            </Col>

            

        </div>
    );
}

const styles = {

    container: {
        border: "40px solid  rgba(76,140,64,0.6)",
        marginTop: "150px",
        backgroundColor: "#fff"
    },
    img: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "auto",
        position: "fixed",
        top: 0,
        left: 0

    }

}

export default Login;