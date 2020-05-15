import React, {useEffect, useState} from 'react';
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
import {makeStyles, useTheme} from '@material-ui/core/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import CircularProgress from '@material-ui/core/CircularProgress';
import api from '../../../utils/helpers/api';
const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5)
    }
}));

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const {count, page, rowsPerPage, onChangePage} = props;

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
                aria-label="first page">
                {theme.direction === 'rtl'
                    ? <LastPageIcon/>
                    : <FirstPageIcon/>}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page">
                {theme.direction === 'rtl'
                    ? <KeyboardArrowRight/>
                    : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page">
                {theme.direction === 'rtl'
                    ? <KeyboardArrowLeft/>
                    : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page">
                {theme.direction === 'rtl'
                    ? <FirstPageIcon/>
                    : <LastPageIcon/>}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
};







const AdminDashboard = () => {

    const classes = useStyles();

    const [page,
        setPage] = useState(0);
    const [rowsPerPage,
        setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [sym,
        setSym] = useState([])
    const [prov,
        setProv] = useState([])
    const [util,
        setUtils] = useState([])
    const [cumCity,
        setCum] = useState([])
    const [totalDemo,
        setDemo] = useState([])


    const [cityDaily ,setCityDaily] =  useState([])
    const [cityWeekly , setcityWeek] =  useState([])
    






    const [SearchData,
        setSearch] = useState({search: ''})

      const  [SearchCityData ,setCSearch] =  useState({search:'HARARE'})
      const  [SearchProvData ,setPSearch] =  useState({search:'HARARE'})

    useEffect(() => {

        const fetchSym = async() => {
            const resp1 = await axios.get(`${api.apiUrl}/tests/testing-trigger`)
            setSym(resp1.data)

        }

        const fetchProvince = async() => {

            const resp2 = await axios.get(`${api.apiUrl}/tests/test-coverage/cumulative/province`)

            setProv(resp2.data)
        }

        const fetchUtils = async() => {

            const resp3 = await axios.get(`${api.apiUrl}/test-kits/test-utilisation`)

            setUtils(resp3.data)
        }

        const cummulativeCity = async() => {

            const Cum = await axios.get(`${api.apiUrl}/patients/demographics/age`)

            setCum(Cum.data)

        }

        const fetchDemo = async() => {

            const mydemo = await axios.get(`${api.apiUrl}/patients/demographics`)

            setDemo(mydemo.data)
        }

    


        const fCityDaily  =  async() => {

            let myq = SearchCityData.search.toUpperCase()

            const cityd = await axios.get(`${api.apiUrl}/tests/test-coverage/daily/city?city=${myq}`)

            setCityDaily(cityd.data)

        }


        
        const fCityWeek =  async() => {

            let myq = SearchProvData.search.toUpperCase()

            const cityW = await axios.get(`${api.apiUrl}/tests/test-coverage/weekly/city?city=${myq}`)

            setcityWeek(cityW.data)

        }

        fetchSym()
        fetchProvince()
        fetchUtils()
        cummulativeCity()
        fetchDemo()
   
        fCityDaily()
        fCityWeek()
        

    }, [SearchCityData.search, SearchProvData.search])

    let {agentTestKitCountCollection} = util
    let {cityDemographics} = totalDemo
    let {provinceDemographics} = totalDemo

    let {dailyTestCounts} = cityDaily
    let  {weeklyTestCounts} = cityWeekly
    //this hook gives us redux store state

    if (!prov && !sym && !util) {

        return <div className={classes.root}>
        <CircularProgress />
        <CircularProgress color="secondary" />
      </div>

    }

    if (!agentTestKitCountCollection) {

        return <div className={classes.root}>
        <CircularProgress />
     
      </div>

    }

    if (!cityDemographics) {

        return <div className={classes.root}>
        <CircularProgress />
        
      </div>
    }

    if (!cumCity) {
        return <div className={classes.root}>
        <CircularProgress />
       
      </div>
    }


    if(!dailyTestCounts){


        return <div className={classes.root}>
        <CircularProgress />
       
      </div>
    




      
    }



   if(!weeklyTestCounts) {



    
    return <div className={classes.root}>
    <CircularProgress />
   
  </div>



   }
    //console.log(cumCity)


  
    
    console.log(cityDaily)
    //console.log(cityDaily)


    let colum = {

        series: [
            { //
                name: 'NEGATIVE',
                data: provinceDemographics.map(({negativeTotal}) => negativeTotal)
            }, {
                name: 'INCONCLUSIVE',
                data: prov.map(({inconclusiveTotal}) => inconclusiveTotal)
            }, {
                name: 'POSITIVE',
                data: provinceDemographics.map(({positiveTotal}) => positiveTotal)
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
                categories: provinceDemographics.map(({province}) => province)
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
            } ,
            {
                name:"DEFECT",
                data:[util.totalDefectiveKits]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 430,
                marginTop: 30
            },
            colors: [
                '#00ff00', '#0000ff', '#ff0000' ,
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
                categories: ['USED', 'UNUSED','DEFECT']
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
                style={{
                border: "3px solid #f1f1f1",
                marginTop: 30,
                paddingLeft:10
            }}
                component={Paper}>

                <h5
                    style={{
                    marginTop: 10,
                    borderLeft: "10px solid #4c8c40",
                    paddingLeft:10
                }}
                    className="container">Total Test</h5>
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
                style={{
                border: "3px solid #f1f1f1",
                marginTop: 30,
                paddingLeft:10
            }}
                component={Paper}>

                <h5
                    style={{
                    marginTop: 10,
                    borderLeft: "10px solid #4c8c40",
                    paddingLeft:10
                }}
                    className="container">Statisics per City</h5>

                <div
                    align="right"
                    style={{
                    marginBottom: 10
                }}>
                    <TextField
                        placeholder="search by City"
                        value={SearchData.search}
                        onChange={e => setSearch({
                        ...SearchData,
                        search: e.target.value
                    })}/>

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
                                    ? cityDemographics
                                    : cityDemographics
                                  ).sort((a, b) => a.city.localeCompare(b.city)).filter( (row)=>{ return row.city.toUpperCase().indexOf(SearchData.search.toUpperCase()) !== -1 }).map((row ,i) => (
                                    <TableRow key={i}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{row.city}</TableCell>
                                <TableCell>{row.positiveTotal}</TableCell>
                                <TableCell>{row.negativeTotal}</TableCell>

                            </TableRow>

                        ))}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[
                                5,
                                10,
                                25, {
                                    label: 'All',
                                    value: -1
                                }
                            ]}
                                colSpan={3}
                                count={cityDemographics.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page'
                                },
                                native: true
                            }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}/>
                        </TableRow>
                    </TableFooter>
                </Table>

            </TableContainer>


            <TableContainer
              style={{
                border: "3px solid #f1f1f1",
                marginTop: 30,
                paddingLeft:10
            }}
                component={Paper}>

                <h5
                    style={{
                    marginTop: 30,
                    paddingLeft:10,
                    borderLeft: "10px solid #4c8c40"
                }}
                    className="container">DAILY TEST FOR PROVINCE/CITY - {SearchCityData.search.toUpperCase()}</h5>

                    <div
                    align="right"
                    style={{
                    marginBottom: 10
                }}>
                    <TextField
                        placeholder="search by City"
                        value={SearchCityData.search}
                        onChange={e => setCSearch({
                        ...SearchCityData,
                        search: e.target.value
                    })}/>

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
                            ? dailyTestCounts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : dailyTestCounts).sort((a, b) => a.dateOfTest.localeCompare(b.dateOfTest)).map((x, i) => (
                            <TableRow key={i}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{x.dateOfTest}</TableCell>
                                <TableCell>{x.positiveTestCount}</TableCell>
                                <TableCell>{x.negativeTestCount}</TableCell>

                            </TableRow>

                        ))}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[
                                5,
                                10,
                                25, {
                                    label: 'All',
                                    value: -1
                                }
                            ]}
                                colSpan={3}
                                count={dailyTestCounts.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page'
                                },
                                native: true
                            }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}/>
                        </TableRow>
                    </TableFooter>
                </Table>

            </TableContainer>

            
            
            <TableContainer
              style={{
                border: "3px solid #f1f1f1",
                marginTop: 30,
                paddingLeft:10
            }}
                component={Paper}>

                <h5
                    style={{
                    marginTop: 30,
                    paddingLeft:10,
                    borderLeft: "10px solid #4c8c40"
                }}
                    className="container">WEEKLY TEST FOR PROVINCE/CITY - {SearchProvData.search.toUpperCase()}</h5>

                    <div
                    align="right"
                    style={{
                    marginBottom: 10
                }}>
                    <TextField
                        placeholder="search by City"
                        value={SearchProvData.search}
                        onChange={e => setPSearch({
                        ...SearchProvData,
                        search: e.target.value
                    })}/>

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
                            ? weeklyTestCounts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : weeklyTestCounts).sort((a, b) => a.weekOfYear.localeCompare(b.weekOfYear))
                                .map((x, i) => (
                            <TableRow key={i}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{x.weekOfYear}</TableCell>
                                <TableCell>{x.positiveTestCount}</TableCell>
                                <TableCell>{x.negativeTestCount}</TableCell>

                            </TableRow>

                        ))}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[
                                5,
                                10,
                                25, {
                                    label: 'All',
                                    value: -1
                                }
                            ]}
                                colSpan={3}
                                count={weeklyTestCounts.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page'
                                },
                                native: true
                            }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}/>
                        </TableRow>
                    </TableFooter>
                </Table>

            </TableContainer>

            <div
                style={{
                border: "3px solid #f1f1f1",
                marginTop: 30,
                paddingLeft:10
            }}>

                <h5
                    style={{
                    borderLeft: "10px solid #4c8c40",
                    marginTop:30,
                    paddingLeft:10
                }}>Cases around the country</h5>

                <Chart options={colum.options} series={colum.series} type="bar" height={350}/>

            </div>

            <TableContainer
            style={{border: "3px solid #f1f1f1" ,marginTop:30, paddingLeft:10}}
                component={Paper}>

                <h5
                    style={{
                    marginTop: 30,
                    borderLeft: "10px solid #4c8c40",
                    paddingLeft:10
                }}
                    className="container">Kit Utilisations</h5>

                    <div align="right" style={{marginBottom:10}}>
                    <TextField  placeholder="search by Agent Name" value={SearchData.search} onChange={e=>setSearch({ ...SearchData ,search:e.target.value})}/>
               
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
                            <TableCell>Training Agent Name</TableCell>
                            <TableCell>Number of Kits Used</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    {(rowsPerPage > 0
                        ? agentTestKitCountCollection.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : agentTestKitCountCollection
                      ).sort((a, b) => a.trainingAgentName.localeCompare(b.trainingAgentName)).filter( (x)=>{ return x.trainingAgentName.toUpperCase().indexOf(SearchData.search.toUpperCase()) !== -1 }).map((x ,i) => (
                        <TableRow key={i}>
                <TableCell>{i +1}</TableCell>
                <TableCell>{x.trainingAgentName}</TableCell>
                <TableCell>{x.numberOfKitsUsed}</TableCell>
     
               
                </TableRow>
                    
                      ))}
                    </TableBody>

                    <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={agentTestKitCountCollection.length}
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


            <div
                style={{
                border: "3px solid #f1f1f1",
                marginTop: 30,
                paddingLeft:10
            }}>
                <h5
                    style={{
                    borderLeft: "10px solid #4c8c40",
                    marginTop:30,
                    paddingLeft:10
                }}>Kits Data</h5>

                <Chart
                    options={horizontalBar.options}
                    series={horizontalBar.series}
                    type="bar"
                    height={350}/>

            </div>
            <div
                style={{
                border: "3px solid #f1f1f1",
                marginTop: 30,
                paddingLeft:10
            }}>

                <h5
                    style={{
                    borderLeft: "10px solid #4c8c40",
                    marginTop:30,
                    paddingLeft:10
                }}>Symptoms Statistics</h5>

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