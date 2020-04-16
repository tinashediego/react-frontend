import React  ,{useState}from 'react';
import {Col, Form, FormGroup, Label, Input,Button} from 'reactstrap';
import Background from '../../../assets/1.jpg'
import { useDispatch,} from 'react-redux';
import {loginUser} from '../../../redux/actions/authActions'
import Logo from '../../../assets/logo.png';
import {TextField} from '@material-ui/core';

const Login  = () =>{


   const [userData ,setData] =  useState({ username:'' ,password:''})
   const dispatch = useDispatch();

   console.log(userData)



   
   function handleSubmit(e) {
    e.preventDefault();
    if (userData) {
        dispatch(loginUser(userData));
    }
}



  return (

    <div responsive="true">

    <div style={styles.img}/> 
  
    <Col  style={styles.container} sm="12" md={{ size: 6, offset: 3 }}>
    <div style={{textAlign:"center"}}>
      <img alt="Logo" style={{height:"100px"}} src={Logo}></img>
    </div>
    <Form align="center"  style={{paddingBottom:20,marginTop:-30}} onSubmit={handleSubmit}>
      <FormGroup>
      
        <TextField 
                label = "Username"
               name="username"  
               value={userData.username}  
               id="username" 
               placeholder="Username"
               onChange={e=>setData({ ...userData ,username:e.target.value})}
               style={{width:400}}
               required/>
      </FormGroup>
      <FormGroup>
        
        <TextField type="password" 
              label="Password"
               name="password" 
               id="password" 
               value={userData.password} 
               placeholder="password"
               onChange={e=>setData({...userData,password:e.target.value})} 
               style={{width:400}}
               required/>
      </FormGroup>
      
      <Button color="success"style={{width:400}} type="submit">Submit</Button>
  
  
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

export default Login;