import React, {useState} from 'react';
import {Col, Form, FormGroup, Button} from 'reactstrap';
import Background from '../../../assets/1.jpg';
import {useHistory} from 'react-router'
import Logo from '../../../assets/logo.png';

import axios from "axios"

import {TextField} from '@material-ui/core';

const ChangePass = () => {

    const [userData,
        setData] = useState( {  "confirmPassword": "string",
        "oldPassword": "string",
        "password": "string"})

    const pu = useHistory()
    console.log(userData)
    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post('http://45.76.141.84:8080/v1/users/change-password', userData)
            .then(resp => {
                alert('success')
                pu.push('/patient')
            })
            .catch(err => {

                alert(err.message)
            })

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
                    marginTop: -30
                }}
                    onSubmit={handleSubmit}>
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