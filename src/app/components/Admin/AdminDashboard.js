import React, {useEffect ,useState} from 'react';
import Chart from 'react-apexcharts'
import axios from 'axios'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

const AdminDashboard = () => {

  
    const [sym ,setSym] = useState([])
    const [prov ,setProv] = useState([])
    const [util ,setUtils]  = useState([])

    useEffect(() => {
       
        const fetchSym  = async ()=>{
            const resp1 =  await axios.get('http://45.76.141.84:8080/v1/tests/testing-trigger')
             setSym(resp1.data)
            
        }

        const fetchProvince =  async () =>{


            const resp2 =  await axios.get('http://45.76.141.84:8080/v1/tests/test-coverage/cumulative/province')

            setProv(resp2.data)
        }



       const  fetchUtils  =  async () =>{


           const resp3 = await  axios.get('http://45.76.141.84:8080/v1/test-kits/test-utilisation')

           setUtils(resp3.data)
       }

        fetchSym()
        fetchProvince()
        fetchUtils()








    },[])




    console.log(util)
    let {agentTestKitCountCollection} = util


    //this hook gives us redux store state

    if (!prov && !sym  && !util) {


      

            return '.... Loading'


       

      
    } 


    if(!agentTestKitCountCollection){

        return '.... Loading'


    }



  

   console.log(prov)
  
    let colum = {

        series: [
            {  //
                name: 'NEGATIVE',
                data:prov.map(({ negativeTestCount }) => negativeTestCount)
            }, {
                name: 'INCONCLUSIVE',
                data: prov.map(({ inconclusiveTestCount }) => inconclusiveTestCount)
            }, {
                name: 'POSITIVE',
                data: prov.map(({ positiveTestCount }) => positiveTestCount)
            }
        ],
        options: {

            colors: [
                '#00ff00', // color for data at index 0
                '#0000ff', // color for data at index 1
                '#ff0000', // color for data at index 2
                // color for data at index 3 ...
            ],
            title: {
                text: 'POSITiVE CASES AROUND THE COUNTRY',
                align: 'left',
                margin: 30,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238',
                    marginTop: '30px'
                }
            },

            chart: {
                type: 'bar',
                margin: 30,
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            xaxis: {
                type: 'text',
                categories: prov.map(({ cityOrProvinceName }) => cityOrProvinceName)
            },
            legend: {
                position: 'right',
                offsetY: 40
            },
            fill: {
                opacity: 1
            }
        }
    }

    var horizontalBar = {

        series: [
            {
                name: "USED",
                data: [util.totalUsedKits]
            }, {
                name: 'Unused',
                data: [util.totalUnUsedKits]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 430,
                marginTop: 30
            },
            colors: [
                '#00ff00', '#ff0000'
            ],
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top'
                    }
                }
            },

            title: {
                text: 'KITS',
                align: 'left',
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238'
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories: ['USED', 'UNUSED']
            }
        }
    };

    var pieCmyhart = {

        series: [
            sym.colds,
            sym.cough,
            sym.headache,
            sym.diarrhoea,
            sym.soreThroat,
            
            sym.bodyAches,
            sym.fever,
            sym.difficultiesInBreathing
        ],

        options: {
            chart: {
                width: 380,
                type: 'donut'
            },
            labels: [
                'COLDS',
                'COUGH',
                'HEADACHE',
                'Diarrhoea',
                'Sore Throat',
                'Body Aches',
                'Fever',
                'breathing'
            ],
            title: {
                text: 'SYMPTOMS',
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238'
                }
            },
            dataLabels: {
                enabled: true
            },
            fill: {
                type: 'gradient'
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        }
    };

    return (
        <div>

            <TableContainer
            style={{border: "3px solid #f1f1f1" ,marginTop:30}}
                component={Paper}>

                <h5
                    style={{
                    marginTop: 10,
                    borderLeft: "10px solid #4c8c40"
                }}
                    className="container">TOTAL TEST</h5>
                <Table
                    size="small"
                    className="table table-striped table-bordered"
                    style={{
                    marginTop: 5,
                    marginBottom: 15
                }}>

                    <TableHead>
                        <TableRow>
                            <TableCell>POSITIVE</TableCell>
                            <TableCell>NEGATIVE</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell>{10}</TableCell>
                            <TableCell>{50}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </TableContainer>



            <div  style={{border: "3px solid #f1f1f1" ,marginTop:30}}>

            <h5 style={{
                borderLeft: "10px solid #4c8c40"
            }}>Cases around the country</h5>

            <Chart options={colum.options} series={colum.series} type="bar" height={350}/>


            </div>

            <TableContainer
               style={{border: "3px solid #f1f1f1" ,marginTop:30}}
                component={Paper}>

                <h5
                    style={{
                    borderLeft: "10px solid #4c8c40"
                }}>KIT UTILISATIONS</h5>
                <Table
                    size="small"
                    className="table table-striped table-bordered"
                    aria-label="customized table"
                    style={{
                    margingTop: 15,
                    marginBottom: 15
                }}>

                    <TableHead>
                        <TableRow>
                        <TableCell>No#</TableCell>
                            <TableCell>AGENT</TableCell>
                            <TableCell>Total Kits USED</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                    {agentTestKitCountCollection.map((x ,i) => (
                        <TableRow key={i}>
                <TableCell>{i +1}</TableCell>
                <TableCell>{x.trainingAgentName}</TableCell>
                <TableCell>{x.numberOfKitsUsed}</TableCell>
               
               
                </TableRow>
                    
                      ))}

                       
                    </TableBody>
                </Table>
            </TableContainer>



<div  style={{border: "3px solid #f1f1f1" ,marginTop:30}}>
            <h5 style={{
                borderLeft: "10px solid #4c8c40"
            }}>KITS DATA</h5>
  
            <Chart
                options={horizontalBar.options}
                series={horizontalBar.series}
                type="bar"
                height={350}/>




                </div>
            <div   style={{border: "3px solid #f1f1f1" ,marginTop:30}}>

                <h5
                    style={{
                    borderLeft: "10px solid #4c8c40"
                }}>SYMPTOMS STATS</h5>

                <Chart
                    options={pieCmyhart.options}
                    series={pieCmyhart.series}
                    type="donut"
                    height={350}/>

            </div>

        </div>
    );
}

export default AdminDashboard;