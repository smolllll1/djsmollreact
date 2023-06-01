import React, { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { motion as m } from "framer-motion";
import { AuthenticationData } from '../data/authentication-data';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import './person-settings.css';

const PersonSettings = ({ responseLogin }) => {

    const navigate = useNavigate();
    const { onHandlerDeleteAccount } = useContext(AuthenticationData)

    const myStyleBtnDeleteAccount = {
        btn: {
            color: "gray",
            "&:hover": {
                color: "#01D277"
            }
        }
    }
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "white", width: "100%" }}>
            <section className='d-flex m-0'>
                <div className='d-flex col top-person-settings align-items-center'>
                    <div className='d-flex m-3 justify-content-center 
                        avatar-person-settings-circle'
                        style={{ cursor: "pointer" }}
                        onClick={() => { navigate(`/users/account/${responseLogin?.username}`) }}
                    >
                        <p className='text-white' style={{ fontSize: "2rem" }}>
                            {/* avatar first letter Username */}
                            {responseLogin?.username[0]}
                        </p>
                    </div>
                    <h2 className='m-1 fw-bold'>
                        {/* after avatar item Username */}
                        <Link to={`/users/account/${responseLogin?.username}`}
                            className="text-decoration-none text-white">
                            {responseLogin?.username}
                        </Link>
                    </h2>
                </div>
            </section>
            <section className='row g-0'>
                <div className='col-md-4 d-flex justify-content-center'>
                    <Stack direction="row" spacing={2} sx={{ borderTop: '10px' }}>
                        <Paper className='mt-3 mb-3 mx-5' style={{ width: "300px" }}>
                            <MenuList className='p-0'>
                                <li className='px-3 py-2 rounded-top'
                                    style={{
                                        backgroundColor: '#01D277',
                                        color: 'white',
                                        lineHeight: "2.5",
                                        fontSize: '1.2rem',
                                        letterSpacing: '0.00938em',
                                    }}>
                                    Settings
                                </li>
                                <MenuItem className='setting-link'>
                                    <Link to={"edit-profile"}>Edit Profile</Link>
                                </MenuItem>
                                <MenuItem className='setting-link'>
                                    <Link to={"account"}>Account Settings</Link>
                                </MenuItem>
                                <MenuItem className='setting-link'>
                                    <Link to={"streaming"}>Streaming Services</Link>
                                </MenuItem>
                                <MenuItem className='setting-link'>
                                    <Link to={"notifications"}>Notifications</Link>
                                </MenuItem>
                                <MenuItem className='setting-link'>
                                    <Link to={"blocked-users"}>Blocked Users</Link>
                                </MenuItem>
                                <MenuItem className='setting-link'>
                                    <Link to={"import-list"}>Import List</Link>
                                </MenuItem>
                                <MenuItem className='setting-link'>
                                    <Link to={"sharing"}>Sharing Settings</Link>
                                </MenuItem>
                                <MenuItem className='setting-link'>
                                    <Link to={"sessions"}>Sessions</Link>
                                </MenuItem>
                                <MenuItem className='setting-link'>
                                    <Link to={"api"}>API</Link>
                                </MenuItem>
                                <MenuItem className='setting-btn'
                                    sx={myStyleBtnDeleteAccount.btn}
                                    onClick={onHandlerDeleteAccount}>
                                    Delete Account
                                </MenuItem>
                            </MenuList>
                        </Paper>
                    </Stack>
                </div>
                <div className='col-md-8 d-flex row mt-3 mb-3 m-0 justify-content-center'>
                    <Outlet />
                </div>
            </section>
        </m.div >
    )
}

export { PersonSettings };