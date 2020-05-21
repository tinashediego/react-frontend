import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {allUsers} from '../../../redux/actions/authActions'
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router'
import axios from 'axios'
import api from '../../../utils/helpers/api';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {TextField} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2)
        }
    }
}));

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5)
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

export default function AllUsers() {

    const classes = useStyles();
    const [open,
        setOpen] = React.useState(false);
    const [openError,
        setOpenError] = React.useState(false);

    const [openDel,
        setOpenDel] = useState();
    const [openErrorDel,
        setOpenErrorDel] = useState();
    var pu = useHistory()

    const handleClick = () => {
        setOpen(true);
    };
    const [errorMessage,
        setErrorMsage] = useState('')
    const handleClickDel = () => {
        setOpenDel(true);
        window.location.href = '/allusers'
    };
    const handleClickError = (x) => {
        setErrorMsage(x)
        setOpenError(true);
    };
    const handleClickErrorDel = (x) => {
        setErrorMsage(x)
        setOpenErrorDel(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);

    }
    const handleCloseDel = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenDel(false);

    }

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);

    };

    const handleCloseDelError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenErrorDel(false);

    };

    const [page,
        setPage] = React.useState(0);
    const [rowsPerPage,
        setRowsPerPage] = React.useState(5);
    const [getAdmins,
        setAdmins] = useState([])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const content = useSelector((state) => state.auth.allusers);

    const dispatch = useDispatch(allUsers());

    const [SearchData,
        setSearch] = useState({search: ''})

    useEffect(() => {

        const fetchData = async() => {

            const resp = await axios.get(`${api.apiUrl}/users/all`)

            setAdmins(resp.data)

        }

        fetchData()
        dispatch(allUsers());
    }, [dispatch]);

    function reset(x, y) {
        let newData = {

            email: x,
            username: y
        }

        axios
            .post(`${api.apiUrl}/users/reset-password`, newData)
            .then(resp => {

                handleClick()

            })
            .catch(err => {
                handleClickError(err.response.data.message)

            })

    }

    function EditUser(x, y) {

        if (x === undefined) {

            localStorage.setItem('itsAdmin', true)
            pu.push(`/editUser/${y}`)

        } else {

            localStorage.setItem('itsAdmin', false)
            pu.push(`/editUser/${x}`)

        }

    }

    function deleteUser(x, y, z) {

        if (y === undefined) {

            console.log(x, y, z)

        }

        if (x === undefined) {

            if (z === true) {

                axios
                    .patch(`${api.apiUrl}/users/${y}?status=false`)
                    .then(resp => {

                        //alert('sucess')
                        handleClickDel()
                    })
                    .catch(err => {

                        handleClickError(err.response.data.message)
                    })

            } else {

                axios
                    .patch(`${api.apiUrl}/users/${y}?status=true`)
                    .then(resp => {

                        //alert('sucess')
                        handleClickDel()
                    })
                    .catch(err => {

                        handleClickError(err.response.data.message)
                    })

            }

        } else {

            if (z === true) {

                axios
                    .patch(`${api.apiUrl}/testing-agents/${x}?status=false`)
                    .then(resp => {

                        //alert('sucess')
                        handleClickDel()
                    })
                    .catch(err => {

                        handleClickError(err.response.data.message)
                    })

            } else {

                axios
                    .patch(`${api.apiUrl}/testing-agents/${x}?status=true`)
                    .then(resp => {

                        //alert('sucess')
                        handleClickDel()
                    })
                    .catch(err => {

                        handleClickError(err.response.data.message)
                    })

            }

        }

    }

    if (!getAdmins) {

        return '.... Loading'
    }

    let finalArray = [...content]

    getAdmins.map(x => {

        if (x.group === 'ADMIN') {

            return content.push(x)
        }

    })

    if (!content) {

        return '... Loading'
    }

    console.log(finalArray)

    if (finalArray.length < 2) {

        return '... Loading'
    }

    return (

        <div>
            <h5 style={styles.container}>
                All Users
            </h5>

            <div align="right" style={{
                marginBottom: 10
            }}>
                <TextField
                    sty
                    placeholder="search by username"
                    value={SearchData.search}
                    onChange={e => setSearch({
                    ...SearchData,
                    search: e.target.value
                })}/>

            </div>

            <div className={classes.root}>

                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}>
                    <Alert onClose={handleClose} severity="success">
                        New password sent to user's email!
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={openError}
                    autoHideDuration={3000}
                    onClose={handleCloseError}
                    anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}>
                    <Alert onClose={handleCloseError} severity="error">
                        {errorMessage}
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={openDel}
                    onClose={handleCloseDel}
                    autoHideDuration={3000}
                    anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}>
                    <Alert onClose={handleCloseDel} severity="success">
                        User suspended successfully!
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
                variant="contained"
                style={{
                color: 'green'
            }}>
                <Link to='/adduser'>Add user</Link>
            </Button>

            <Table
                className='table table-striped table-bordered'
                aria-label="custom pagination table">

                <TableHead>

                    <TableRow>
                        <TableCell align="left">First name</TableCell>

                        <TableCell align="left">Last name</TableCell>
                        <TableCell align="left">User Name</TableCell>
                        <TableCell align="left">Phone Number</TableCell>
                        <TableCell align="left">National ID</TableCell>
                        <TableCell align="left">Practicing Number</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Group</TableCell>
                        <TableCell align="left">Testing Facility</TableCell>

                        <TableCell align="left">Actions</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? finalArray.filter((x) => {
                            return x
                                .username
                                .toLowerCase()
                                .indexOf(SearchData.search.toLowerCase()) !== -1
                        }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : finalArray).filter((x) => {
                        return x
                            .username
                            .toLowerCase()
                            .indexOf(SearchData.search.toLowerCase()) !== -1
                    }).map((x, i) => (
                        <TableRow key={i}>
                            <TableCell>{x.firstName}</TableCell>
                            <TableCell>{x.lastName}</TableCell>
                            <TableCell>{x.username}</TableCell>
                            <TableCell>{x.phoneNumber}</TableCell>
                            <TableCell>{x.nationalIdNumber}</TableCell>
                            <TableCell>{x.practicingNumber === undefined
                                    ? 'n/n'
                                    : x.practicingNumber}</TableCell>
                            <TableCell>{x.email}</TableCell>
                            <TableCell>{x.group}</TableCell>
                            <TableCell>{x.testingFacilityName === undefined
                                    ? 'n/n'
                                    : x.testingFacilityName}</TableCell>

                            <TableCell align="right">
                                <Button
                                    style={{
                                    backgroundColor: "orange",
                                    color: "white"
                                }}
                                    onClick={() => {
                                    reset(x.email, x.username)
                                }}>Reset password</Button>
                                &nbsp;&nbsp;

                            </TableCell>

                            <TableCell>

                                <Button
                                    color="primary"
                                    onClick={() => {
                                    EditUser(x.testingAgentId, x.id)
                                }}
                                    variant="contained">
                                    Edit</Button>
                                &nbsp;&nbsp;
                                <Button
                                    style={{
                                    backgroundColor: 'red',
                                    color: 'white'
                                }}
                                    onClick={() => {
                                    deleteUser(x.testingAgentId, x.id, x.enabled)
                                }}
                                    variant="contained">{x.enabled === true
                                        ? 'Suspend'
                                        : 'Activate'}</Button>
                                {console.log(x.enabled)}

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
                            count={finalArray.length}
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
        </div>

    );

}
const styles = {

    container: {
        borderLeft: "10px solid #4c8c40"
    }

}