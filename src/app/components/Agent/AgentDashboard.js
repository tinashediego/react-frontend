import React  ,{useState ,useEffect}from 'react';
import {Button }  from 'reactstrap'
import {Link} from  'react-router-dom'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from "react-redux";



const AgentDashboard  = (props) =>{ 

  const content = useSelector((state) => state.dashboard.gendermale);
  const content2 = useSelector((state) => state.dashboard.genderfemale);
  const content3 = useSelector((state) => state.dashboard.malepositive);
  const content4 = useSelector((state) => state.dashboard.malenegative);
  //this hook gives us redux store stat






  return (
    <div>
    
   


    
    </div>
  );
}






export default AgentDashboard;