import React, {useState} from 'react';
import {Col, Form, FormGroup, Button} from 'reactstrap';
import Background from '../../../assets/1.jpg';
import {useHistory} from 'react-router'
import Logo from '../../../assets/logo.png';

import axios from "axios"

import {TextField} from '@material-ui/core';
import api from '../../../utils/helpers/api';
const ChangePass = () => {

    const [userData,
        setData] = useState( {  "confirmPassword": "",
        "oldPassword": "",
        "password": ""})

    const pu = useHistory()
    console.log(userData)

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
             strength = "OMG Weak!!";
               color = "red";
            break;
            case 1:
                strength = "Super very Weak"
                color = "red";
                break ;
            case 2:
                strength = "Very Weak";
                color = "red";
                break;
            case 3:
                strength = "Medium";
                color = "orange";
                break;
            case 4:
                strength = "Strong";
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


            

            alert('passwords not matchin')
        }else{


            
        axios
        .post(`${api.apiUrl}/users/change-password`, userData)
        .then(resp => {
            alert('success')
            pu.push('/agent')
        })
        .catch((err) => {
            /*alert(err.message)*/
            alert("Error, please make sure you are entering correct details");
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
                <span id="msg"></span>

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