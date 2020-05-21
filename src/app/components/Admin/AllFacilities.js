import React, {useEffect, useState} from 'react';

import {Allfacility} from '../../../redux/actions/KitsActions'
import {useDispatch, useSelector} from "react-redux";

import Table from '@material-ui/core/Table';
import Alert from '@material-ui/lab/Alert';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {FormGroup, Form} from 'reactstrap'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useHistory} from 'react-router'
import axios from 'axios';
import HarareSurburbs from '../Agent/Haras'
import BulawayoSurbubs from '../Agent/Blues'
import MidlandsCities from '../Agent/MIDLANDS'
import matN from '../Agent/MatableNorth'
import matSouth from '../Agent/MatabelendSouth'
import masvingo from '../Agent/Masvingo'
import manicaland from '../Agent/Manicalands'
import mashcent from '../Agent/MAshCent'
import masheast from '../Agent/masheast'
import mashwest from '../Agent/MashWest'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import api from '../../../utils/helpers/api'
import Snackbar from '@material-ui/core/Snackbar';

import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Grid from '@material-ui/core/Grid';


const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5)
    }
}));

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
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

const AllFacilities = (props) => {


    const [errorMessage,
        setErrorMsage] = useState('')
    const [openDel, setOpenDel] = useState();
  const [openErrorDel, setOpenErrorDel] = useState();
    const [page,
        setPage] = React.useState(0);
    const [rowsPerPage,
        setRowsPerPage] = React.useState(5);
    const classes = useStyles();

    const [state,
        setstate] = useState({"testingFacilityName": "", "city": "", "province": "", "streetAddress": "", "suburb": ""})

    const [openR,
        setOpenR] = React.useState(false);
    const [openError,
        setOpenError] = React.useState(false);


        var pu = useHistory()
        const handleClickErrorDel = (x) => {
            setErrorMsage(x)
            setOpenErrorDel(true);
        };
          const handleClickDel = () => {
            setOpenDel(true);
        };

        const handleCloseDelError = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
        
            setOpenErrorDel(false);
        
        };
        const handleCloseDel = (event, reason) => {
          if (reason === 'clickaway') {
              return;
          }
        
          setOpenDel(false);
        
        }
    const handleClick = () => {
        setOpenR(true);
    };
    const handleClickError = (x) => {
        setErrorMsage(x)
        setOpenError(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenR(false);

    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);

    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [open,
        setOpen] = useState(false);
    // Generate Order Data

    const content = useSelector((state) => state.kits.allfacility);

    //this hook gives us redux store state

    const dispatch = useDispatch(Allfacility());

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseR = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(Allfacility());
    }, [dispatch])

    function handleCities() {

        switch (state.city) {
            case 'HARARE':

                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Surburb</InputLabel>
                            <Select
                                native
                                value={state.suburb}
                                onChange={e => setstate({
                                ...state,
                                suburb: e.target.value
                            })}
                                inputProps={{
                                name: 'suburb',
                                id: 'age-native-simple'
                            }}
                                required>
                                <option aria-label="None" value=""/> {HarareSurburbs.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )

            case 'BULAWAYO':

                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Surburb</InputLabel>
                            <Select
                                native
                                value={state.suburb}
                                onChange={e => setstate({
                                ...state,
                                suburb: e.target.value
                            })}
                                inputProps={{
                                name: 'suburb',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {BulawayoSurbubs.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )

            default:
                break;
        }

    }

    function handleProvinces() {

        switch (state.province) {
            case 'MIDLANDS':
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'suburb',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {MidlandsCities.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )

            case "MANICALAND":
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {manicaland.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )
            case "MASHONALAND_CENTRAL":
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {mashcent.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )
            case "MASHONALAND_EAST":
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {masheast.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )
            case "HARARE":
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/>

                                <option value="HARARE">HARARE</option>
                                <option value="CHITUNGWIZA">CHITUNGWIZA</option>
                                <option value="EPWORTH">EPWORTH</option>
                            </Select>
                        </FormControl>

                    </Grid>
                )
            case "BULAWAYO":
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'suburb',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/>
                                <option value="BULAWAYO">BULUWAYO</option>
                            </Select>
                        </FormControl>

                    </Grid>
                )
            case "MASHONALAND_WEST":
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {mashwest.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )

            case "MASVINGO":
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {masvingo.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )
            case "MATABELELAND_NORTH":
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {matN.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )

            case "MATABELELAND_SOUTH":

                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={state.city}
                                onChange={e => setstate({
                                ...state,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {matSouth.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                )

            default:
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (state) {

            var newFac = {

                "location": {
                    "city": state.city,
                    "province": state.province,
                    "streetAddress": state.streetAddress,
                    surburb: state.surburb

                },

                "testingFacilityName": state.testingFacilityName

            }

            axios
                .post(`${api.apiUrl}/testing-facilities`, newFac)
                .then(resp => {
                    handleClick()
                    setOpen(false);
                    window.location.href = '/allfacilities'
                })
                .catch(err => {

                    handleClickError(err.response.data.message)

                    //alert(err.message)

                })

        }
    }


  function  deleteFacility (x){


    axios.delete(`${api.apiUrl}/testing-facilities/${x}`)
         .then(resp=>{

           // alert('success')
           handleClickDel()
            pu.push(`/allfacilities`)
            
         })
         .catch(err=>{

           // alert(err.message)
           handleClickErrorDel(err.response.data.message)
         })

  }

  function EditFacility (x){
    pu.push(`/editFacility/${x}`)

  }

    if (!content) {

        return 'Loading  ...'
    }

    return (
        <div>

            <h5 style={styles.container}>All Facilities</h5>
 <div className={classes.root}>

<Snackbar
    open={openDel}
    onClose={handleCloseDel}
    autoHideDuration={3000}
    anchorOrigin={{
    vertical: "top",
    horizontal: "center"
}}>
    <Alert onClose={handleCloseDel} severity="success">
        Facility deleted successfully!
    </Alert>
</Snackbar>

<Snackbar
    open={openErrorDel}
    autoHideDuration={3000}
    onClose={handleCloseDelError}
    anchorOrigin={{
    vertical: "top",
    horizontal: "center"
}}>
    <Alert onClose={handleCloseDelError} severity="error">
        {errorMessage}
    </Alert>
</Snackbar>

</div>
            <Button
                style={{
                color: 'green'
            }}
                onClick={handleClickOpen}variant="contained" >New Facility</Button>

            <div className={classes.root}>

                <Snackbar
                    open={openR}
                    anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                    onClose={handleCloseR} autoHideDuration={3000}>
                    <Alert onClose={handleCloseR} severity="success">
                        This is a success message!
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={openError}
                    autoHideDuration={3000}
                    anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                    onClose={handleCloseError}>
                    <Alert onClose={handleCloseError} severity="error">
                       {errorMessage}
                    </Alert>
                </Snackbar>

            </div>

            <Table
                className='table table-striped table-bordered'
                aria-label="custom pagination table">

                <TableHead>

                    <TableRow>

                        <TableCell>ID</TableCell>
                        <TableCell>Testing facility</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Province</TableCell>
                        <TableCell>Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? content.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : content).map((x, i) => (
                        <TableRow key={i}>

                            <TableCell>{x.id}</TableCell>
                            <TableCell>{x.testingFacilityName}</TableCell>

                            <TableCell>
                                {x.location === null|| x.location === undefined
                                    ? 'n/n'
                                    : x.location.city}</TableCell>
                            <TableCell>
                                {x.location === null || x.location === undefined
                                    ? 'n/n'
                                    : x.location.province}</TableCell>

                                    <TableCell> 
                                    
                                    <Button color="primary" variant="contained"   onClick={() => {
                                        EditFacility(x.id)
                                    }}> Edit</Button>
                                    &nbsp;&nbsp;


                                    {x.deleteDisabled === false ?<Button
                                        style={{
                                        backgroundColor: 'red',
                                        color: 'white'
                                      }}
                                      onClick={() => {
                                      deleteFacility(x.id)
                                      }}
                                        variant="contained">DELETE</Button> : ' '}
                                   
                                    
                                    </TableCell>

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
                            count={content.length}
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

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" style={styles.dialog}>New Facility</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Form
                            className="col-sm-12"
                            onSubmit={handleSubmit}
                            style={{
                            width: "100%"
                        }}>
                            <FormGroup className="col-sm-12">

                                <TextField
                                    className="col-sm-12"
                                    label="Facility  Name"
                                    value={state.testingFacilityName}
                                    onChange={e => setstate({
                                    ...state,
                                    testingFacilityName: e.target.value
                                })}
                                    id="exampleEmail"
                                    placeholder="New Facility"
                                    required/>
                            </FormGroup>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Province</InputLabel>
                                <Select
                                    native
                                    value={state.province}
                                    required
                                    onChange={e => setstate({
                                    ...state,
                                    province: e.target.value
                                })}
                                    inputProps={{
                                    name: 'province',
                                    id: 'age-native-simple'
                                }}>
                                    <option aria-label="None" value=""/>
                                    <option value="MANICALAND">MANICALAND</option>
                                    <option value="MASHONALAND_CENTRAL">MASHONALAND_CENTRAL</option>
                                    <option value="MASHONALAND_EAST">MASHONALAND_EAST</option>
                                    <option value="HARARE">HARARE</option>
                                    <option value="BULAWAYO">BULAWAYO</option>
                                    <option value="MASHONALAND_WEST">MASHONALAND_WEST</option>
                                    <option value="MASVINGO">MASVINGO</option>
                                    <option value="MATABELELAND_NORTH">MATABELELAND_NORTH</option>
                                    <option value="MATABELELAND_SOUTH">MATABELELAND_SOUTH</option>
                                    <option value="MIDLANDS">MIDLANDS</option>
                                </Select>
                            </FormControl>
                            {handleProvinces()}
                            {handleCities()}

                            <FormGroup className="col-sm-12">

                                <TextField
                                    className="col-sm-12"
                                    label="streetAddress"
                                    value={state.streetAddress}
                                    onChange={e => setstate({
                                    ...state,
                                    streetAddress: e.target.value
                                })}
                                    id="exampleEmail"
                                    placeholder="New Facility"/>
                            </FormGroup>

                        </Form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseR} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

const styles = {
    container: {
        borderLeft: "10px solid #4c8c40"
    },
    dialog: {
        borderLeft: "10px solid #4c8c40",
        marginLeft: "10px"
    }
}

export default AllFacilities;