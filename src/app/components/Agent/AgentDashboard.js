import React  ,{useState ,useEffect}from 'react';
import {Button }  from 'reactstrap'
import {Link} from  'react-router-dom'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from "react-redux";
import {
  genderMale,genderFeMale ,maleNegative ,malePositive ,
  bulawayoNegative,bulawayoPositive ,harareNegative ,hararePositive, 
  midlandsNegative,midlandsPositive, manicalandNegative ,manicalandPositive
  ,mashonalandCentralNegative ,mashonalandCentralPositive,  matabelelandNorthPositive,
  mashonalandEastNegative ,mashonalandEastPositive,
  mashonalandWestNegative ,mashonalandWestPositive ,masvingoNegative,masvingoPositive ,matabelelandNorthNegative,matabelelandSouthNegative
  ,

} from '../../../redux/actions/DashboardActions'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const AgentDashboard  = (props) =>{ 

  const content = useSelector((state) => state.dashboard.gendermale);
  const content2 = useSelector((state) => state.dashboard.genderfemale);
  const content3 = useSelector((state) => state.dashboard.malepositive);
  const content4 = useSelector((state) => state.dashboard.malenegative);
  //this hook gives us redux store stat






  return (
    <div>
    
    <div className="container" >

    <h5 className="container">TOTAL TEST</h5>
    <Table size="small" className="table table-striped" >

<TableHead>
  <TableRow>
    <TableCell>MALE</TableCell>
    <TableCell>FEMALE</TableCell>
   
  </TableRow>
</TableHead>
<TableBody>

    <TableRow>
    <TableCell>{content}</TableCell>
      <TableCell>{content2}</TableCell>
    </TableRow>
</TableBody>
</Table>
 
</div>


    
<div className="container" >

<h5 className="container">TOTA TEST RESULTS</h5>
<Table size="small" className="table table-striped" >

<TableHead>
<TableRow>
<TableCell>GENDER</TableCell>
<TableCell>POSITIVE</TableCell>
<TableCell>NEGATIVE</TableCell>

</TableRow>
</TableHead>
<TableBody>

<TableRow>
<TableCell>MALE</TableCell>
<TableCell>{content3}</TableCell>
  <TableCell>{content4}</TableCell>
</TableRow>
</TableBody>
</Table>

</div>

 

    <Chart options={colum.options} series={colum.series} type="bar" height={350} />

    <Chart options={totalPositve.options} series={totalPositve.series} type="donut" height={350} />
  
    
   


    
    </div>
  );
}






export default AgentDashboard;