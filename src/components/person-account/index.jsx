import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { motion as m } from "framer-motion";
import { ListSelectedMovies } from '../list-selected-movies';
import { ListPurchasedMovies } from '../list-purchased-movies';

import './person-account.css';

// button style nav
const myStyleAccountUserBtn = {
    btn: {
        color: "dimgray",
        textTransform: "capitalize",
        fontSize: "1rem",
        '&:hover': {
            color: "#01D277",

        },
    }
}

const PersonAccount = ({ responseLogin }) => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: "100%" }}
        >
            <div className='d-flex row m-0'>
                <section className='d-flex col p-0 top-person-account align-items-center'>
                    <div className='d-flex m-5 justify-content-center 
                            align-items-center avatar-person-account-circle'>
                        <p style={{ fontSize: "4rem" }}>
                            {/* avatar first letter Username */}
                            <Link className='text-white py-3 px-4' to={"#"} style={{ textDecoration: 'none' }}>
                                {responseLogin?.username[0]}
                            </Link>
                        </p>
                    </div>
                    <p className='fs-2 m-1 fw-bold text-white'>
                        {/* after avatar item Username */}
                        <Link to={"#"} style={{ textDecoration: 'none', color: "white" }}>
                            {responseLogin?.username}
                        </Link>
                        <span className='fs-5 m-3 fw-normal text-secondary'>Member since
                            {responseLogin !== null ?
                                <span className='mx-2'>
                                    {responseLogin?.date_joined.split('', 7)}
                                </span>
                                :
                                null
                            }
                        </span>
                    </p>
                </section>
                <nav className='p-0'>
                    <Stack spacing={2}
                        backgroundColor="white"
                        justifyContent="center"
                        direction="row">
                        <Button variant="text" sx={myStyleAccountUserBtn.btn}>Button</Button>
                        <Button variant="text" sx={myStyleAccountUserBtn.btn}>Button</Button>
                        <Button variant="text" sx={myStyleAccountUserBtn.btn}>Button</Button>
                    </Stack>
                </nav>
                <section className='d-flex row m-0 p-0 bg-white border-top'>
                    <h4 className='mt-2'>Stats</h4>
                    <div className='d-flex col m-0'>
                        <div className='m-2'>
                            <p className='fs-5'>Total Edits</p>
                            <p className='fw-bold'
                                style={{ color: "#01D277", fontSize: "4rem" }}>0</p>
                        </div>
                        <div className='m-2'>
                            <p className='fs-5'>Total Ratings</p>
                            <p className='fw-bold'
                                style={{ color: "#01D277", fontSize: "4rem" }}>0</p>
                        </div>
                    </div>
                </section>
                <section className='g-0 row m-0 p-0 border-top'
                    style={{ backgroundColor: "rgba(13, 37, 63, 1)" }}>
                    <h4 className='mt-2 text-white'>List of added movies</h4>
                    <div className='col-lg-6 d-flex row px-5'>
                        <p className='mt-2 fs-5 text-white'>List of selected movies</p>
                        <ListSelectedMovies />
                    </div>
                    <div className='col-lg-6 d-flex row px-5'>
                        <p className='mt-2 fs-5 text-white'>List of purchased movies</p>
                        <ListPurchasedMovies />
                    </div>
                </section>
            </div>
        </m.div >
    )
}

export default PersonAccount;