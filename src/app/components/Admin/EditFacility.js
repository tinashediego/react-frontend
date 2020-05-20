import React  ,{useEffect, useState} from 'react'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import {FormGroup, Form} from 'reactstrap'
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import api from '../../../utils/helpers/api'
import {useParams ,} from 'react-router'
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
import {makeStyles,} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5)
    }
}));


export default function EditFacility() {

  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);


  const handleClick = () => {
    setOpen(true);
  };
  const handleClickError = () => {
      setOpenError(true);
    };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);

  };

 const handleCloseError = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenError(false);
      
    };
  

    let a  = useParams()
    const classes = useStyles1();

    let [Fac ,setFac] = useState()



    useEffect(() => {
        const fetchData = async() => {

            const resp = await axios.get(`${api.apiUrl}/testing-facilities/${a.id}`)

            setFac(resp.data)

        }

        fetchData()


    },[])



    function handleCities() {

        switch (Fac.city) {
            case 'HARARE':

                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Surburb</InputLabel>
                            <Select
                                native
                                value={Fac.suburb}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.suburb}
                                onChange={e => setFac({
                                ...Fac,
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

        switch (Fac.province) {
            case 'MIDLANDS':
                return (
                    <Grid item xs={12} sm={6}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">CITIES</InputLabel>
                            <Select
                                native
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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
                                value={Fac.city}
                                onChange={e => setFac({
                                ...Fac,
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



    if(!Fac){


        return '... Loading'
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (Fac) {

            var newFac = {

                "location": {
                    "city": Fac.city,
                    "province": Fac.province,
                    "streetAddress": Fac.streetAddress,
                    surburb: Fac.surburb

                },

                "testingFacilityName": Fac.testingFacilityName

            }

            axios
                .put(`${api.apiUrl}/testing-facilities/${a.id}`, newFac)
                .then(resp => {

                    //alert('success')
                    handleClick()
             
                })
                .catch(err => {

                

                    //alert(err.message)
                    handleClickError()
                })

        }
    }



    console.log(Fac)


    return (
        <div>


        <h5 className="h" style={styles.h}>Edit Testing Facility</h5>
        <Form
        className="col-sm-12"
        onSubmit={handleSubmit}
        style={{
        width: "100%"
    }}>

<div className={classes.root}>
      
      <Snackbar open={open} anchorOrigin={{
      vertical: "top",
      horizontal: "center"}} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Facility edited successfully
        </Alert>
      </Snackbar>
   
   
      <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError} anchorOrigin={{
      vertical: "top",
      horizontal: "center"}}>
      <Alert onClose={handleCloseError} severity="error">
        Error, try again!
      </Alert>
    </Snackbar>
    
    </div>


        <FormGroup className="col-sm-12">

            <TextField
                className="col-sm-12"
                label="Facility  Name"
                value={Fac.testingFacilityName}
                onChange={e => setFac({
                ...Fac,
                testingFacilityName: e.target.value
            })}
                id="exampleEmail"
                placeholder="New Facility"
                required/>
        </FormGroup>
        <FormControl   className="col-sm-12">
            <InputLabel htmlFor="age-native-simple">Province</InputLabel>
            <Select
                native
                value={Fac.province}
                required
                onChange={e => setFac({
                ...Fac,
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
                value={Fac.streetAddress}
                onChange={e => setFac({
                ...Fac,
                streetAddress: e.target.value
            })}
                id="exampleEmail"
                placeholder="New Facility"/>
        </FormGroup>


        <Button color="primary" variant="contained"  type="submit">Update</Button>

    </Form>

        </div>
    )
}

const styles = {

    h:{
      borderLeft:"10px solid #4c8c40",
      
    }
    }