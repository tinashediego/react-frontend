import React, {useEffect} from 'react';
import Chart from 'react-apexcharts'
import {useDispatch, useSelector} from "react-redux";
import {Demos} from '../../../redux/actions/DashboardActions'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

const AdminDashboard = () => {

    const content = useSelector((state) => state.dashboard.demos);
    const dispatch = useDispatch(Demos());

    useEffect(() => {
        dispatch(Demos());
    }, [dispatch])

    let {totalNegativePatients, totalPositivePatients, provinceDemographics} = content

    console.log(provinceDemographics)

    //this hook gives us redux store state

    if (!provinceDemographics) {

        return '.... Loading'
    } else {
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

        series: [
            {
                name: 'NEGATIVE',
                data: negativeTotal
            }, {
                name: 'INCONCLUSIVE',
                data: inconclusiveTotal
            }, {
                name: 'POSITIVE',
                data: positiveTotal
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
                categories: province
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
                data: [44]
            }, {
                name: 'DEFECT',
                data: [53]
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
                categories: ['USED', 'DEFECT']
            }
        }
    };

    var pieCmyhart = {

        series: [
            44,
            55,
            41,
            17,
            15,
            33,
            34
        ],

        options: {
            chart: {
                width: 380,
                type: 'donut'
            },
            labels: [
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
                            <TableCell>{totalPositivePatients}</TableCell>
                            <TableCell>{totalNegativePatients}</TableCell>
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
                }}>BATCHES</h5>
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
                            <TableCell>BUDGETED</TableCell>
                            <TableCell>SPEND</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell>{200}</TableCell>
                            <TableCell>{50}</TableCell>
                        </TableRow>
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