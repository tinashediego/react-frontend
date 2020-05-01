import React, {useState} from 'react';
import axios from 'axios'
import {TextField} from '@material-ui/core';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import cityList from './city'
import {makeStyles} from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
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
        "province": ""

    })

    var newPatient = {
        userCommand: {
            "firstName": patientData.firstName,
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
                "streetAddress": patientData.address,
                "city": patientData.city,
                "province": patientData.province
            }
        }

    }

    console.log(patientData.province)

    function handleSubmit(e) {

        e.preventDefault();
        if (patientData) {
            axios
                .post('http://45.76.141.84:8080/v1/patients', newPatient)
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
                            fullWidth/>
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
                            fullWidth/>
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
                            fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Passport Number"
                            value={patientData.passportNumber}
                            onChange={e => setPatient({
                            ...patientData,
                            passportNumber: e.target.value
                        })}
                            placeholder="e.g passport Number"
                            fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Date Of Birth (dd/mm/yyyy)"
                            type="date"
                            name="password"
                            value={patientData.dateOfBirth}
                            onChange={e => setPatient({
                            ...patientData,
                            dateOfBirth: e.target.value
                        })}
                            placeholder="dd/mm/yyyy"
                            fullWidth/>
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
                            fullWidth/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone Number"
                            type="text"
                            value={patientData.phoneNumber}
                            onChange={e => setPatient({
                            ...patientData,
                            phoneNumber: e.target.value
                        })}
                            placeholder="e.g +263772123456"
                            fullWidth/>
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
                            fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">City</InputLabel>
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
                                <option aria-label="None" value=""/> {cityList.map((team) => <option key={team.value} value={team}>{team}</option>)}
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Province</InputLabel>
                            <Select
                                native
                                value={patientData.province}
                                onChange={e => setPatient({
                                ...patientData,
                                province: e.target.value
                            })}
                                inputProps={{
                                name: 'province',
                                id: 'age-native-simple'
                            }}>
                                <option aria-label="None" value=""/>
                                <option value="BULAWAYO">BULAWAYO</option>
                                <option value="HARARE">HARARE</option>
                                <option value="MANICALAND">MANICALAND</option>
                                <option value="MASHONALAND_CENTRAL">MASHONALAND_CENTRAL</option>
                                <option value="MASHONALAND_EAST">MASHONALAND_EAST</option>
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
                            <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                            <Select
                                native
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
                color="primary"
                className={classes.submit}
              >
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