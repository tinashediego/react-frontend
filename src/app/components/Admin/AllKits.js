import React  ,{useEffect}from 'react';
import Submenu from '../layout/Admin/SubMenu' ;
import {Button ,Table }  from 'reactstrap'
import {Link} from  'react-router-dom'
import {allKits} from '../../../redux/actions/KitsActions'
import { useDispatch, useSelector } from "react-redux";


const AllKits  = (props) =>{ 




  const content = useSelector((state) => state.kits.allkits);
  
  //this hook gives us redux store state


  const dispatch = useDispatch(allKits());


  useEffect(() => {
    dispatch(allKits());
  }, [])



  console.log(content)

     /*let a  =  content.map((x,i)=>(

    <tr key={i}>
    <th>{i +1}</th>
    <td>{x.username}</td>
    <td>{x.firstName}</td>
    <td>{x.lastName}</td>
    <td>{x.qualification}</td>
    <td>{x.email}</td>
    <td> {x.addressOfPractice} </td>
    <td>{x.groupName}</td>
    <td> {x.practicingNumber}</td>
    </tr>
  
  ))*/
  return (
    <div>
    <Submenu />
    <div style={{marginTop:60 ,padding:10}}>

   <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>All Kits      <Button className='btn-info' style={{marginLeft:1400,marginBottom:10,marginTop:10}}> <Link to="/newkit" style={{color:'white'}}>Add NewKit</Link></Button></h1>
    
   <Table striped style={{boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Brand Name</th>
          <th>Batch Number</th>
          <th>Used</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Bean</td>
          <td>x2324</td>
          <td>Used</td>
        </tr>
        <tr>
        <th scope="row">2</th>
          <td>Bean</td>
          <td>x2324</td>  
          <td>New</td>  
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Bean</td>
          <td>x2324</td>   
          <td>Used</td>   
        </tr>
        <tr>
        <th scope="row">4</th>
        <td>Bean</td>
        <td>x2324</td>
        <td>New</td>
        
        </tr>
      </tbody>
    </Table>
    
    
    
    </div>

    
    </div>
  );
}






export default AllKits;