import React  ,{useState}from 'react';
import {Col, Form, FormGroup,Button} from 'reactstrap';
import Background from '../../../assets/1.jpg'
import { useDispatch,} from 'react-redux';
import{useLocation} from 'react-router'
import Logo from '../../../assets/logo.png';

import axios from "axios"


import {TextField} from '@material-ui/core';

const Otp  = () =>{


   const [userData ,setData] =  useState({ newpassword:'' ,password:'' ,confirmpassword:""})



   const pu =  useLocation()
   console.log(userData)
   function handleSubmit(e) {
    e.preventDefault();


    if(userData.newpassword === userData.confirmpassword){


        alert("passwords dont match")
    }else{

     
           
            axios.post('http://45.76.141.84:8080/v1/users/change-password' ,userData)
                .then(resp =>{

                    alert('success')
                    pu.push('/patient')



                })
                .catch(err=>{


                    alert(err.message)
                })
        }



    
   
}



  return (
    <div responsive="true">

    <div style={styles.img}/>

    <Col style={styles.container} sm="12" md={{ size: 6, offset: 3 }}>
        <div style={{textAlign: "center"}}>
            <img alt="Logo" style={{height: "100px"}} src={Logo}></img>
        </div>
        <Form align="center" style={{paddingBottom:20,marginTop:-30}} onSubmit={handleSubmit}>
            <FormGroup>

                <TextField label="Username" type="oldpassword" value={userData.oldpassword} i placeholder="old password" onChange={e=>setData({ ...userData ,oldpassword:e.target.value})} style={{width:"50%"}} required/>
            </FormGroup>
            <FormGroup>

                <TextField type="password" label="Password" name="password" id="password" value={userData.newpassword} placeholder="password" onChange={e=>setData({...userData,newpassword:e.target.value})} style={{width:"50%"}} required/>
            </FormGroup>


            <FormGroup>

                <TextField type="password" label="Password" name="password" id="password" value={userData.confirmpassword} placeholder="password" onChange={e=>setData({...userData,confirmpassword:e.target.value})} style={{width:"50%"}} required/>
            </FormGroup>

            <Button color="success" style={{width: "50%"}} type="submit">Submit</Button>

        </Form>

    </Col>

</div>
  );

}

const styles = {

  container:{  
    border:"40px solid  rgba(76,140,64,0.6)",
    marginTop:"150px",
    backgroundColor:"#fff" , 
    
},
img:{
     backgroundImage: `url(${Background})`,
     backgroundRepeat:"no-repeat",
     backgroundSize:"cover",
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