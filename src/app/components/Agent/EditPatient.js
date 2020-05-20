import React, {useState ,useEffect} from 'react';
import axios from 'axios'
import {TextField} from '@material-ui/core';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import HarareSurburbs from './Haras'
import BulawayoSurbubs from './Blues'
import MidlandsCities from './MIDLANDS'
import matN from './MatableNorth'
import matSouth from './MatabelendSouth'
import masvingo from './Masvingo'
import manicaland from './Manicalands'
import mashcent from './MAshCent'
import masheast from './masheast'
import mashwest from './MashWest'

import {makeStyles} from '@material-ui/core/styles';
import {useParams } from 'react-router'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import api from '../../../utils/helpers/api';

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

const EditPatient = ({next}) => {

    const classes = useStyles();
    const [openBirth, setOpenBirth] = useState();
        const [open,
        setOpen] = React.useState(false);
    const [openError,
        setOpenError] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClickError = () => {
        setOpenError(true);
    };

    const handleClickErrorBirth = () => {
        setOpenBirth(true);
    };

    const handleCloseErrorBirth = ()=>{
        setOpenBirth(false);
    }
    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        next()
    };

    const handleCloseError = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);

    };

    const [patientData,
        setPatient] = useState({
        "address": "",
        "email": "",
        thisAChild: '',
        "firstName": "",
        "group": "PATIENT",
        "lastName": "",
        dateOfBirth: '',
        "passportNumber": "",
        nationalIdNumber: "",
        "phoneNumber": "",
        "gender": "",
        "city": "",
        "suburb": "",
        "province": ""

    })

   let a  = useParams()


    useEffect(() => {
        const fetchData = async() => {

            const resp = await axios.get(`${api.apiUrl}/patients/${a.id}`)

            let {user} = resp.data

           
                                    

            setPatient(user)

        }

        fetchData()


    },[])


    console.log(patientData)

    function handleCities() {

       

        switch (patientData.city) {
            case 'HARARE':

                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Surburb</InputLabel>
                            <Select
                                native
                                value={patientData.suburb}
                                onChange={e => setPatient({
                                ...patientData,
                                suburb: e.target.value
                            })}
                                inputProps={{
                                name: 'suburb',
                                id: 'age-native-simple'
                            }}>
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
                                value={patientData.suburb}
                                onChange={e => setPatient({
                                ...patientData,
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

        switch (patientData.province) {
            case 'MIDLANDS':
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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
                                value={patientData.city}
                                onChange={e => setPatient({
                                ...patientData,
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

    function isAlphaNumeric(e) {

        var specialKeys = [];
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
        var keyCode = e.keyCode === 0
            ? e.charCode
            : e.keyCode;
        var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) !== -1 && e.charCode !== e.keyCode));
        document
            .getElementById("error")
            .style
            .display = ret
            ? "none"
            : "inline";
        return ret;
    }
    function isAlphaNumeric2(e) {

        var specialKeys = [];
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
        var keyCode = e.keyCode === 0
            ? e.charCode
            : e.keyCode;
        var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) !== -1 && e.charCode !== e.keyCode));
        document
            .getElementById("error2")
            .style
            .display = ret
            ? "none"
            : "inline";
        return ret;
    }
    function isAlphaNumeric3(e) {

        var specialKeys = [];
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
        var keyCode = e.keyCode === 0
            ? e.charCode
            : e.keyCode;
        var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) !== -1 && e.charCode !== e.keyCode));
        document
            .getElementById("error3")
            .style
            .display = ret
            ? "none"
            : "inline";
        return ret;
    }

    function isAlphaNumeric4(e) {

        var specialKeys = [];
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
        var keyCode = e.keyCode === 0
            ? e.charCode
            : e.keyCode;
        var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) !== -1 && e.charCode !== e.keyCode));
        document
            .getElementById("error4")
            .style
            .display = ret
            ? "none"
            : "inline";
        return ret;
    }


    

    function handleSubmit(e) {

        e.preventDefault();

        var newPatient = {
            userCommand: {
                "firstName": patientData.firstName,
                "username":patientData.username,
                "lastName": patientData.lastName,
                "group": patientData.group,
                "gender": patientData.gender,
                "phoneNumber": patientData.phoneNumber,                  
                "email": patientData.email,
                "nationalIdNumber": patientData.nationalId,
                "passportNumber": patientData.passportNumber,
                "dateOfBirth": moment(patientData.dateOfBirth).format('DD/MM/YYYY'),
                thisAChildIsThisChildOrincapacitatedToUsePhone: patientData.thisAChild,
                "address": {
                    "streetAddress": patientData.address.streetAddress,
                    "city": patientData.city,
                    "province": patientData.province,
                    "suburb": patientData.suburb
                }
            }

        }

        if (`${moment().diff(patientData.dateOfBirth, 'days', false)}` < '1'  ) {
            handleClickErrorBirth()
            //alert('Please enter a valid date of birth!')

        } else {


            console.log(newPatient)
            axios
                .put(`${api.apiUrl}/patients/${a.id}`, newPatient)
                .then(resp => {
                
                    localStorage.setItem('patientId', resp.data.id)
                    localStorage.setItem('currentPatient', patientData.firstName)
                    handleClick()
                })
                .catch(err => {

                    handleClickError()

                })

        }

    }

    return (
        <Container component="main" maxWidth="xl">

            <Typography component="h1" style={styles.container} variant="h5">
                Edit Patient
            </Typography>

            <div className={classes.root}>

                <Snackbar open={open} onClose={handleClose} autoHideDuration={3000} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
                    <Alert onClose={handleClose} severity="success">
                        Patient added successfully!
                    </Alert>
                </Snackbar>

                <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
                    <Alert onClose={handleCloseError} severity="error">
                        There was an error, try again
                    </Alert>
                </Snackbar>

                <Snackbar open={openBirth} autoHideDuration={3000} onClose={handleCloseErrorBirth} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
                    <Alert onClose={handleCloseErrorBirth} severity="error">
                        Enter a valid date of birth
                    </Alert>
                </Snackbar>

            </div>

            <form onSubmit={handleSubmit} className={classes.form}>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            value={patientData.firstName}
                            onKeyPress={(e) => {
                            isAlphaNumeric(e)
                        }}
                            ondrop="return false;"
                            onChange={e => setPatient({
                            ...patientData,
                            firstName: e.target.value
                        })}
                            placeholder="First Name"
                            autoComplete="firstName"
                            fullWidth
                            required/>
                        <span
                            id="error"
                            style={{
                            color: 'red',
                            display: 'none'
                        }}>* Special Characters not allowed</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            value={patientData.lastName}
                            onKeyPress={(e) => {
                            isAlphaNumeric2(e)
                        }}
                            ondrop="return false;"
                            onChange={e => setPatient({
                            ...patientData,
                            lastName: e.target.value
                        })}
                            placeholder="Last Name"
                            fullWidth
                            required/>
                        <span
                            id="error2"
                            style={{
                            color: 'red',
                            display: 'none'
                        }}>* Special Characters not allowed</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="National ID"
                            onKeyPress={(e) => {
                            isAlphaNumeric3(e)
                        }}
                            ondrop="return false;"
                            value={patientData.nationalIdNumber}
                            onChange={e => setPatient({
                            ...patientData,
                            nationalIdNumber: e.target.value
                        })}
                            placeholder="e.g 631234567A12"
                            fullWidth
                            required/>
                        <span
                            id="error3"
                            style={{
                            color: 'red',
                            display: 'none'
                        }}>* Special Characters not allowed</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Passport Number"
                            value={patientData.passportNumber}
                            onKeyPress={(e) => {
                            isAlphaNumeric4(e)
                        }}
                            ondrop="return false;"
                            onChange={e => setPatient({
                            ...patientData,
                            passportNumber: e.target.value
                        })}
                            placeholder="e.g CB3225572"
                            fullWidth/>
                        <span
                            id="error4"
                            style={{
                            color: 'red',
                            display: 'none'
                        }}>* Special Characters not allowed</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <TextField
                            id="date"
                            label="Date of Birth"
                            type="date"
                            value={patientData.dateOfBirth}
                            required
                            className={classes.textField}
                            onChange={e => setPatient({
                            ...patientData,
                            dateOfBirth: e.target.value
                        })}
                            InputLabelProps={{
                            shrink: true
                        }}/>
                        <span
                            id="error"
                            style={{
                            color: 'red',
                            display: 'none'
                        }}>* Special Characters not allowed</span>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="email"
                            label="Email"
                            value={patientData.email}
                            onChange={e => setPatient({
                            ...patientData,
                            email: e.target.value
                        })}
                            placeholder="Email"
                            fullWidth
                            required/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone Number"
                            type='text'
                            name="number"
                            onKeyPress={(e) => {
                            isAlphaNumeric(e)
                        }}
                            ondrop="return false;"
                            value={patientData.phoneNumber}
                            onChange={e => setPatient({
                            ...patientData,
                            phoneNumber: e.target.value
                        })}
                        
                            fullWidth
                            required/>
                        <span
                            id="error"
                            style={{
                            color: 'red',
                            display: 'none'
                        }}>* Special Characters not allowed</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Street Address"
                            value={patientData.address.streetAddress}
                            onKeyPress={(e) => {
                            isAlphaNumeric(e)
                        }}
                            ondrop="return false;"
                            onChange={e => setPatient({
                            ...patientData,
                            address: e.target.value
                        })}
                        
                            fullWidth
                            required/>
                        <span
                            id="error"
                            style={{
                            color: 'red',
                            display: 'none'
                        }}>* Special Characters not allowed</span>
                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Province</InputLabel>
                            <Select
                                native
                                value={patientData.province}
                                required
                                onChange={e => setPatient({
                                ...patientData,
                                province: e.target.value
                            })}
                                inputProps={{
                                name: 'province',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/>
                                <option value="MANICALAND">MANICALAND</option>
                                <option value="MASHONALAND_CENTRAL">MASHONALAND CENTRAL</option>
                                <option value="MASHONALAND_EAST">MASHONALAND EAST</option>
                                <option value="HARARE">HARARE</option>
                                <option value="BULAWAYO">BULAWAYO</option>
                                <option value="MASHONALAND_WEST">MASHONALAND WEST</option>
                                <option value="MASVINGO">MASVINGO</option>
                                <option value="MATABELELAND_NORTH">MATABELELAND_NORTH</option>
                                <option value="MATABELELAND_SOUTH">MATABELELAND_SOUTH</option>
                                <option value="MIDLANDS">MIDLANDS</option>
                            </Select>
                        </FormControl>

                    </Grid>
                    {handleProvinces()}
                    {handleCities()}
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                            <Select
                                native
                                required
                                value={patientData.gender}
                                onChange={e => setPatient({
                                ...patientData,
                                gender: e.target.value
                            })}
                                inputProps={{
                                name: 'GENDER',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/>
                                <option value="FEMALE">FEMALE</option>
                                <option value="MALE">MALE</option>

                            </Select>
                        </FormControl>

                    </Grid>

                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    style={{
                    backgroundColor: "green",
                    color: 'white'
                }}>
                    Submit
                </Button>
            </form>

        </Container>
    );
}

const styles = {

    container: {
        borderLeft: "10px solid #4c8c40"
    }
}

export default EditPatient;