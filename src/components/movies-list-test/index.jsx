import React, { useContext } from "react";
import { getMoviesPage } from '../../api/axios';
import { motion as m } from 'framer-motion';
import CircularStatic from "../progress";
import { ContentData } from "../data/content-data";
import { useQuery } from "react-query";
import Alert from 'react-bootstrap/Alert';
import Button from '@mui/material/Button';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addMovie } from "../../redux/actions";
import { connect } from "react-redux";
import { AuthenticationData } from "../data/authentication-data";

const MoviesListTest = ({ addNewMovie }) => {

    const location = useLocation();
    const navigate = useNavigate();
    // click cards movies id
    const { isPageMovies } = useContext(ContentData);
    // hidden add movie button if yuo are not logged in
    const { responseLogin } = useContext(AuthenticationData);
    // cards movies
    const {
        isLoading,
        isError,
        error,
        data: listInfoMovies,
    } = useQuery(["pop_movies/image/", isPageMovies], () => getMoviesPage(isPageMovies), {
        keepPreviousData: true
    });

    // button style go back
    const useStyleBtnGoBack = {
        button: {
            backgroundColor: "#01D277",
            color: 'floralwhite',
            textTransform: "capitalize",
            '&:hover': {
                backgroundColor: "#90cea1",
            },
        }
    }
    // button style add movie
    const useStyleBtnAddMovies = {
        button: {
            backgroundColor: "#01b4e4",
            color: 'floralwhite',
            textTransform: "capitalize",
            '&:hover': {
                backgroundColor: "#0d253f",
            },
        }
    }

    if (isLoading) return <div className="text-center vh-100 mt-5">
        <CircularStatic />
    </div>;
    if (isError) return <div className="vh-100 text-secondary text-center mt-5">
        <Alert variant="danger">
            Something went wrong! Error: {error.message}
        </Alert>
    </div>

    if (location.pathname.split("/")[2]) {
        return (
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="d-flex row w-100 justify-content-center px-3">
                {isLoading === true ?
                    <div className="mt-5">
                        <CircularStatic />
                    </div>
                    :
                    listInfoMovies?.results.filter((item) => {
                        return item.id === parseInt(location.pathname.split("/")[2]);
                    }).map((item, i) => {
                        console.log(item.id)
                        return <div key={item.id * i + "y"}
                            className="d-flex card my-3 p-0 position-relative w-100"
                            style={{ backgroundColor: 'rgba(13, 37, 63, 1)', zIndex: "0" }}>
                            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                className="rounded position-absolute opacity-25"
                                style={{ width: "100%", height: "100vh", objectFit: "cover", zIndex: "-1000" }}
                                alt={item.title}
                            />
                            <div className="row g-0">
                                <div className="col-lg-5 d-flex p-4 vh-100 justify-content-center align-items-center">
                                    <div className="w-100 h-100 d-flex">
                                        <Link onClick={() => { navigate(-1) }}>
                                            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                                className="rounded"
                                                style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: "1000" }}
                                                alt={item.title} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 d-flex vh-100 justify-content-center align-items-center">
                                    <div className="w-100 h-75 d-flex row"
                                        style={{ zIndex: "1000" }}>
                                        <div className="card-body text-white">
                                            <h2 className="card-title fw-bolder">
                                                {item.title}
                                            </h2>
                                            <h2 className="card-text fw-light">
                                                {item.release_date}
                                            </h2>
                                            <h3>Overview</h3>
                                            <p className="card-text">
                                                {item.overview}
                                            </p>
                                            <Button className="fs-5 mb-3 me-3"
                                                variant="contained"
                                                onClick={() => { navigate(-1) }}
                                                sx={useStyleBtnGoBack.button}>
                                                Go Back
                                            </Button>
                                            {responseLogin ?
                                                <Button className="fs-5 mb-3"
                                                    variant="contained"
                                                    disabled={false}
                                                    onClick={() => { addNewMovie(item) }}
                                                    sx={useStyleBtnAddMovies.button}>
                                                    Add Movie
                                                </Button>
                                                :
                                                <Button className="fs-5 mb-3"
                                                    variant="contained"
                                                    disabled={true}
                                                    onClick={() => { addNewMovie(item) }}
                                                    sx={useStyleBtnAddMovies.button}>
                                                    Add Movie
                                                </Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </m.div >
        )
    }
};

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMovie: (information) => {
            dispatch(addMovie(information))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListTest);