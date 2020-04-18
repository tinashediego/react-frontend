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




const AdminDashboard  = (props) =>{ 


  //this hook gives us redux store state



  
  let colum = {
          
    series: [{
      name: 'NEGATIVE',
      data: [4, 5, 1, 6, 2, 4 ,5,7,6,5]
    }, {
      name: 'POSITIVE',
      data: [3, 3, 2, 8, 3, 2 ,6,3,6,7]
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
        categories: ['Midlands', 'Harare', 'Masvingo', 'Manicaland',
          'matebeleland South', 'matebeleland North' ,'mashonaland West' ,'mashonaland east' ,'mashonaland North' ,'Bulawayo'        ],
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





  
  let [totalPositve,setPositive] = useState(
    
    
    {
          
      series: [50, 100],
      options: {

        title: {
          text: 'POSTIVES VS NEGATIVES FOR THE TESTED',
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
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
  
    }
  )































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
    <TableCell>{10}</TableCell>
      <TableCell>{18}</TableCell>
    </TableRow>
</TableBody>
</Table>
 
</div>


    
<div className="container" >

<h5 className="container">TOTAL TEST RESULTS</h5>
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
<TableCell>{10}</TableCell>
  <TableCell>{15}</TableCell>
</TableRow>
</TableBody>
</Table>

</div>

 

    <Chart options={colum.options} series={colum.series} type="bar" height={350} />

    <Chart options={totalPositve.options} series={totalPositve.series} type="donut" height={350} />
  
    
   


    
    </div>
  );
}






export default AdminDashboard;