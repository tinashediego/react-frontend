import React  ,{useState ,useEffect}from 'react';
import {Button }  from 'reactstrap'
import {Link} from  'react-router-dom'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from "react-redux";
import {
  Demos

} from '../../../redux/actions/DashboardActions'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const AdminDashboard  = (props) =>{ 



  
  const content = useSelector((state) => state.dashboard.demos);
  const dispatch = useDispatch(Demos());

  
  useEffect(() => {
    dispatch(Demos());
  }, [])



let {totalNegativePatients ,totalPositivePatients ,provinceDemographics} =  content



console.log(provinceDemographics)
 
  

  //this hook gives us redux store state




  if(!provinceDemographics){

    return '.... Loading'
  }else{
    var pending = provinceDemographics.map(function (officer) {
      return officer.pendingTotal
    });

    var negativeTotal = provinceDemographics.map(function (officer) {
      return officer.negativeTotal
    });

    var inconclusiveTotal = provinceDemographics.map(function (officer) {
      return officer.inconclusiveTotal
    });

    var positiveTotal = provinceDemographics.map(function (officer) {
      return officer.positiveTotal
    });
 
  

 
    var province = provinceDemographics.map(function (officer) {
      return officer.province
    });

  }
  console.log(pending)
  let colum = {
          
    series:[ {
      name: 'NEGATIVE',
      data: negativeTotal
    }, {
      name: 'INCONCLUSIVE',
      data: inconclusiveTotal
    } , {
      name: 'POSITIVE',
      data: positiveTotal
    }],
    options: {

      title: {
        text: 'POSITiVE CASES AROUND THE COUNTRY',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },
    },
    
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'text',
        categories:province
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    },
  
  
  }

















  return (
    <div>
    
    <div className="container" >

    <h5 className="container">TOTAL TEST</h5>
    <Table size="small" className="table table-striped" >

<TableHead>
  <TableRow>
    <TableCell>POSITIVE</TableCell>
    <TableCell>NEGATIVE</TableCell>
   
  </TableRow>
</TableHead>
<TableBody>

    <TableRow>
    <TableCell>{totalPositivePatients }</TableCell>
      <TableCell>{totalNegativePatients}</TableCell>
    </TableRow>
</TableBody>
</Table>
 
</div>

 

    <Chart options={colum.options} series={colum.series} type="bar" height={350} />

  
  
    
   


    
    </div>
  );
}






export default AdminDashboard;