import React  ,{useState}from 'react';
import {Button ,Table }  from 'reactstrap'
import {Link} from  'react-router-dom'
import Chart from 'react-apexcharts'



const AgentDashboard  = (props) =>{ 


  let [colum,setColum] = useState({
          
    series: [{
      name: 'NEGATIVE',
      data: [44, 55, 41, 67, 22, 43 ,55,67,67,45]
    }, {
      name: 'POSITIVE',
      data: [13, 23, 20, 58, 13, 27 ,46,35,56,55]
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
  
  
  })





  
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
    
    <div >
 

    <Chart options={colum.options} series={colum.series} type="bar" height={350} />

    <Chart options={totalPositve.options} series={totalPositve.series} type="donut" height={350} />
  
    
    
    </div>


    
    </div>
  );
}






export default AgentDashboard;