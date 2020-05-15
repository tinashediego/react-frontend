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

const Otp = () => {

    const classes = useStyles();

    const [open,
        setOpen] = React.useState(false);
    const [openError,
        setOpenError] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClickError = () => {
        setOpenError(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        
    };

    const handleCloseError = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);

    };

    const [userData,
        setData] = useState({nationalIdNumber: ''})

    const pu = useHistory()
    console.log(userData)
    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post(`${api.apiUrl}/users/regenerate-otp`, userData)
            .then(resp => {
                localStorage.setItem('tenp' ,userData.nationalIdNumber)
                handleClick()
               
                pu.push('/patLogin')
            })
            .catch(err => {
                handleClickError()
                
            })

    }

    return (
        <div>

            <div align="center" style={styles.img}/>

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
                <div className={classes.root}>

<Snackbar open={open} onClose={handleClose} anchorOrigin={{
vertical: "top",
horizontal: "center"
}}>
    <Alert onClose={handleClose} severity="success">
        OTP generated successfully!
    </Alert>
</Snackbar>

<Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError} anchorOrigin={{
vertical: "top",
horizontal: "center"
}}>
    <Alert onClose={handleCloseError} severity="error">
        There was an error, try again
    </Alert>
</Snackbar>

</div>


                <Form
                    align="center"
                    style={{
                    paddingBottom: 20,
                    marginTop: -30,
                    textAlign:"center"
                }}
                    onSubmit={handleSubmit}>
                    <FormGroup>

                        <TextField
                            label="National ID Number"
                            type="text"
                            value={userData.nationalIdNumber}
                            placeholder="e.g. 63-123456A43 "
                        
                             
                            onChange={e => setData({
                            ...userData,
                            nationalIdNumber: e.target.value
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
                        type="submit">GENERATE OTP</Button>
                            <br></br>
                        <div style={{marginTop:15, color:"red"}}>
                        <span>N.B OTP can be only requested after 24 hours</span>
                        </div>

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

export default Otp;