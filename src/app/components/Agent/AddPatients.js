import React, {useState} from 'react';
import axios from 'axios'
import {TextField} from '@material-ui/core';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import cityList from './city'
import HarareSurburbs from './Haras'
import BulawayoSurbubs from './Blues'
import {makeStyles} from '@material-ui/core/styles';

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

const AddPatient = ({next}) => {

    const classes = useStyles();

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

    console.log(cityList)

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
        nationalId: "",
        "phoneNumber": "",
        "gender": "",
        "city": "",
        "suburb": "",
        "province": ""

    })

    function ifYes() {

        console.log(patientData.city)

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

    

    function handleSubmit(e) {


        e.preventDefault();
        
    

        
    var newPatient = {
        userCommand: {
            "firstName": patientData.firstName,
            "lastName": patientData.lastName,
            "group": patientData.group,
            "gender": patientData.gender,
            "phoneNumber":'+263' + patientData.phoneNumber.substr(1),
            "email": patientData.email,
            "nationalIdNumber": patientData.nationalId,
            "passportNumber": patientData.passportNumber,
            "dateOfBirth": moment(patientData.dateOfBirth).format('DD/MM/YYYY'),
            thisAChildIsThisChildOrincapacitatedToUsePhone: patientData.thisAChild,
            "address": {
                "streetAddress": patientData.address,
                "city": patientData.city,
                "province": patientData.province,
                "suburb": patientData.suburb
            }
        }

    }



    if(`${moment().diff(newPatient.dateOfBirth, 'years',false)}`<'1' ||`${moment().diff(newPatient.dateOfBirth, 'years',false)}`>'95'){

        alert('Your date of birth must be  of person betwen 1 & 95')

    }else{
    
        axios
            .post(`${api.apiUrl}/patients`, newPatient)
            .then(resp => {
                console.log(resp)
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
                New Patient
            </Typography>

            <div className={classes.root}>

                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This is a success message!
                    </Alert>
                </Snackbar>

                <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
                    <Alert onClose={handleCloseError} severity="error">
                        There was an error
                    </Alert>
                </Snackbar>

            </div>

            <form onSubmit={handleSubmit} className={classes.form}>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            value={patientData.firstName}
                            onChange={e => setPatient({
                            ...patientData,
                            firstName: e.target.value
                        })}
                            placeholder="First Name"
                            autoComplete="firstName"
                            fullWidth required
                            />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            value={patientData.lastName}
                            onChange={e => setPatient({
                            ...patientData,
                            lastName: e.target.value
                        })}
                            placeholder="Last Name"
                            fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="National ID"
                            value={patientData.nationalId}
                            onChange={e => setPatient({
                            ...patientData,
                            nationalId: e.target.value
                        })}
                            placeholder="e.g 63-1234567A12"
                            fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Passport Number"
                            value={patientData.passportNumber}
                            onChange={e => setPatient({
                            ...patientData,
                            passportNumber: e.target.value
                        })}
                            placeholder="e.g CB3225572"
                            fullWidth />
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
                            fullWidth required/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone Number"
                            type='number'
                            name="number"
                            value={patientData.phoneNumber}
                            onChange={e => setPatient({
                            ...patientData,
                            phoneNumber: e.target.value
                        })}
                            placeholder="0123456789"
                            fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Address"
                            value={patientData.address}
                            onChange={e => setPatient({
                            ...patientData,
                            address: e.target.value
                        })}
                            placeholder="Address"
                            fullWidth required/>
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
                                <option value="MASHONALAND_CENTRAL">MASHONALAND_CENTRAL</option>
                                <option value="MASHONALAND_EAST">MASHONALAND_EAST</option>
                                <option value="HARARE">HARARE</option>
                                <option value="BULUWAYO">BULUWAYO</option>
                                <option value="MASHONALAND_WEST">MASHONALAND_WEST</option>
                                <option value="MASVINGO">MASVINGO</option>
                                <option value="MATABELELAND_NORTH">MATABELELAND_NORTH</option>
                                <option value="MATABELELAND_SOUTH">MATABELELAND_SOUTH</option>
                                <option value="MIDLANDS">MIDLANDS</option>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">City</InputLabel>
                            <Select
                                native
                                value={patientData.city}
                                required
                                onChange={e => setPatient({
                                ...patientData,
                                city: e.target.value
                            })}
                                inputProps={{
                                name: 'city',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/> {cityList.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>

                    {ifYes()}
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

export default AddPatient;