import React, {useEffect ,useState} from 'react';
import Chart from 'react-apexcharts'
import axios from 'axios'
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import {TextField} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
  
  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  
  
  

const AdminDashboard = () => {



    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
  
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
  
  
    const [sym ,setSym] = useState([])
    const [prov ,setProv] = useState([])
    const [util ,setUtils]  = useState([])
    const [cumCity ,setCum]  =  useState([])
    const [totalDemo ,setDemo] =  useState([])
    const [age ,setAge]  = useState([])
    
    const  [SearchData ,setSearch] = useState({search:''})

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



       const cummulativeCity =  async () =>{



        const  Cum  = await axios.get('http://45.76.141.84:8080/v1/tests/test-coverage/daily/city')


        setCum(Cum.data)

               
       } 


    const fetchDemo = async () =>{


        const mydemo  =  await  axios.get('http://45.76.141.84:8080/v1/patients/demographics')

           setDemo(mydemo.data)
    }



    const fectAge = async () =>{

        const myage =  await axios.get('http://45.76.141.84:8080/v1/patients/my-record')

        setAge(myage.data)






    }

        fetchSym()
        fetchProvince()
        fetchUtils()
        cummulativeCity ()
        fetchDemo()
        fectAge()






    },[])




    
  console.log(age)
    let {agentTestKitCountCollection} = util
    let {cityDemographics} = totalDemo




    //this hook gives us redux store state

    if (!prov && !sym  && !util) {


      

            return '.... Loading'


       

      
    } 


    if(!agentTestKitCountCollection){

        return '.... Loading'


    }

    if(!cityDemographics){

        return '  .... Loading'
    }


 console.log(cityDemographics)

  
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
                            <TableCell>{totalDemo.totalPositivePatients}</TableCell>
                            <TableCell>{totalDemo.totalNegativePatients}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </TableContainer>




            <TableContainer
            style={{border: "3px solid #f1f1f1" ,marginTop:30}}
                component={Paper}>

                <h5
                    style={{
                    marginTop: 10,
                    borderLeft: "10px solid #4c8c40"
                }}
                    className="container">Statisics per City</h5>

                    <div align="right" style={{marginBottom:10}}>
                    <TextField  placeholder="search by City" value={SearchData.search} onChange={e=>setSearch({ ...SearchData ,search:e.target.value})}/>
               
                </div>
                <Table
                    size="small"
                    className="table table-striped table-bordered"
                    style={{
                    marginTop: 5,
                    marginBottom: 15
                }}>

                    <TableHead>
                        <TableRow>
                        <TableCell>No#</TableCell>
                            <TableCell>CITY</TableCell>
                            <TableCell>POSITIVE</TableCell>
                            <TableCell>NEGATIVE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    {(rowsPerPage > 0
                        ? cityDemographics.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : cityDemographics
                      ).sort((a, b) => a.city.localeCompare(b.city)).filter( (x)=>{ return x.city.toUpperCase().indexOf(SearchData.search.toUpperCase()) !== -1 }).map((x ,i) => (
                        <TableRow key={i}>
                <TableCell>{i +1}</TableCell>
                <TableCell>{x.city}</TableCell>
                <TableCell>{x.positiveTotal}</TableCell>
                <TableCell>{x.negativeTotal}</TableCell>
               
                </TableRow>
                    
                      ))}
                    </TableBody>

                    <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={cityDemographics.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: { 'aria-label': 'rows per page' },
                          native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
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