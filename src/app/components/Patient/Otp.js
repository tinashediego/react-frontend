import React, {useState} from 'react';
import {Col, Form, FormGroup, Button} from 'reactstrap';
import Background from '../../../assets/1.jpg';
import {useHistory} from 'react-router'
import Logo from '../../../assets/logo.png';

import axios from "axios"

import {TextField} from '@material-ui/core';
import api from '../../../utils/helpers/api';

const Otp = () => {

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

                alert('success')
                pu.push('/patLogin')
            })
            .catch(err => {
                 
                alert('OTP CAN BE ONLY BE REQUESTED AFTER 24 HOURS')
            })

    }

    return (
        <div>

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
                            label="nationalIdNumber"
                            type="text"
                            value={userData.nationalIdNumber}
                            placeholder="nationalIdNumber"
                        
                             
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