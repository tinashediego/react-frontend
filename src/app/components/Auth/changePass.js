import React, {useState} from 'react';
import {Col, Form, FormGroup, Button} from 'reactstrap';
import Background from '../../../assets/1.jpg';
import {useHistory} from 'react-router'
import Logo from '../../../assets/logo.png';

import axios from "axios"

import {TextField} from '@material-ui/core';
import api from '../../../utils/helpers/api';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const ChangePass = () => {

    const classes = useStyles();

    const [openIncorrect,setOpenIncorrect] = useState();
    const [errorMessage,
        setErrorMsage] = useState('')
    const [open,
        setOpen] = React.useState(false);
    const [openError,
        setOpenError] = React.useState(false);
        
    const handleClick = () => {
        setOpen(true);
    };
    const handleClickError = (x) => {
        setErrorMsage(x)
        setOpenError(true);
    };

    const handleClickIncorrect = () => {
        setOpenIncorrect(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        
    };

    const handleCloseIncorrect = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenIncorrect(false);
        
    };

    const handleCloseError = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);

    };

    const [userData,
        setData] = useState( {  "confirmPassword": "",
        "oldPassword": "",
        "password": ""})

    const pu = useHistory()
  

    function validatePassword(password) {
                
        // Do not show anything when the length of password is zero.
        if (userData.password.length === 0) {
            document.getElementById("msg").innerHTML = "";
            return;
        }
        // Create an array and push all possible values that you want in password
        var matchedCase = [];
        matchedCase.push("[$@$!%*#?&]"); // Special Charector
        matchedCase.push("[A-Z]");      // Uppercase Alpabates
        matchedCase.push("[0-9]");      // Numbers
        matchedCase.push("[a-z]");     // Lowercase Alphabates

        // Check the conditions
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(userData.password)) {
                ctr++;
            }
        }
        // Display it
        var color = "";
        var strength = "";
        switch (ctr) {
            case 0:
                strength = "Password: Very weak";
                color = "red";
            break;
            case 1:
                strength = "Password: Very weak";
                color = "red";
                break ;
            case 2:
                strength = "Password: Very weak";
                color = "red";
                break;
            case 3:
                strength = "Password: Medium";
                color = "orange";
                break;
            case 4:
                strength = "Password: Strong";
                color = "green";
                break;

                default:
                    break 

                
        }
        document.getElementById("msg").innerHTML = strength;
        document.getElementById("msg").style.color = color;
    }
    function handleSubmit(e) {
        e.preventDefault();

        if(userData.confirmPassword !== userData.password){


            

           // alert('')
            handleClickIncorrect()
        }else{


            
        axios
        .post(`${api.apiUrl}/users/change-password`, userData)
        .then(resp => {
            //alert('success')
            handleClick()
            pu.push('/agent')
        })
        .catch((err) => {
            /*alert(err.message)*/
            //alert("Error, please make sure you are entering correct details");
            handleClickError(err.response.data.message)
        })


        }



    

    }

    return (
        <div responsive="true">

            <div style={styles.img}/>

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
                    marginTop: -30,textAlign:"center"
                }}
                    onSubmit={handleSubmit}>

<div className={classes.root}>

<Snackbar open={open} onClose={handleClose} autoHideDuration={3000} anchorOrigin={{
vertical: "top",
horizontal: "center"
}}>
    <Alert onClose={handleClose} severity="success">
        User password changed successfully
    </Alert>
</Snackbar>

<Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError} anchorOrigin={{
vertical: "top",
horizontal: "center"
}}>
    <Alert onClose={handleCloseError} severity="error">
        {errorMessage}
    </Alert>
</Snackbar>

<Snackbar open={openIncorrect} autoHideDuration={3000} onClose={handleCloseIncorrect} anchorOrigin={{
vertical: "top",
horizontal: "center"
}}>
    <Alert onClose={handleCloseIncorrect} severity="error">
        Passwords not matching
    </Alert>
</Snackbar>

</div>
                    <FormGroup>

                        <TextField
                            label="Old password"
                            type="password"
                            value={userData.oldPassword}
                            
                            onChange={e => setData({
                            ...userData,
                            oldPassword: e.target.value
                        })}
                            style={{
                            width: "50%"
                        }}
                            required/>
                    </FormGroup>
                    <FormGroup>

                    <TextField
                        label="new password"
                        type="password"
                        value={userData.password}
                        onKeyPress={
                            validatePassword
                        }
                       
                        onChange={e => setData({
                        ...userData,
                        password: e.target.value
                    })}
                        style={{
                        width: "50%"
                    }}
                        required/>
                                        </FormGroup>
                
                <FormGroup> 
                <div style={{marginTop:0,marginBottom:"5px"}}><span id="msg"></span></div>
                <TextField
                    label="Confirm password"
                    type="password"
                    value={userData.confirmPassword}
                   
                    onChange={e => setData({
                    ...userData,
                    confirmPassword: e.target.value
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
                        type="submit">Change Password</Button>

                </Form>

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

export default ChangePass;