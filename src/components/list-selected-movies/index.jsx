import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import store from "../../redux/store";
import { ContentData } from '../data/content-data';
import { axiosBaseUrl } from "../../api/axios";

// GET URL BUY MOVIE
const BUY_MOVIE_URL = 'users/account/';

// button style buy movie
const useStyleBtnBuyMovies = {
    button: {
        width: "100%",
        height: "20px",
        backgroundColor: "#01D277",
        fontSize: "14px",
        color: 'floralwhite',
        textTransform: "capitalize",
        '&:hover': {
            backgroundColor: "#90cea1",
            color: 'floralwhite',
        },
    }
}

export const ListSelectedMovies = () => {

    // object store data movies 
    const storeDataMovies = store.getState();
    const { onHandlerCardsInfoMovies } = useContext(ContentData);

    const onHandlerDeleteMovie = (value) => {
        storeDataMovies.movie.splice(value, 1);
    };

    const onHandlerBuyMovie = async (value) => {
        console.log(value);
        await axiosBaseUrl.get(BUY_MOVIE_URL, value)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.message);
            });

    };

    return (
        <Fragment>
            {storeDataMovies.movie.map((item, index) => {
                return <Card key={item.id * index + "b"}
                    style={{ backgroundColor: "rgba(13, 37, 63, .9)" }}
                    className='d-flex flex-row w-100 p-0 mb-2 border'>
                    <div className='d-flex'>
                        <Link to={`/pop_movies/image/${item.id}`}
                            onClick={() => { onHandlerCardsInfoMovies(item.id) }}>
                            <Card.Img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.backdrop_path}`}
                                style={{ width: "4rem", objectFit: "cover" }}
                                alt="Card image" />
                        </Link>
                    </div>
                    <Card.Body className='d-flex row p-0 m-0'>
                        <div className='d-flex p-0 ps-2'>
                            <Card.Title className='m-0 pt-1 fs-6 text-white'>
                                {item.title}
                                <span className='fw-light ps-2 text-white'>
                                    {item.release_date}
                                </span>
                            </Card.Title>
                        </div>
                        <div className='d-flex p-0 ps-2'>
                            <Card.Text className='fs-6 m-0'>
                                <Link className='text-decoration-none text-danger'
                                    onClick={() => { onHandlerDeleteMovie(index) }}>
                                    Delete
                                </Link>
                            </Card.Text>
                        </div>
                        <div className='d-flex p-0 px-2'>
                            <Button className="fst-normal"
                                variant="contained"
                                onClick={() => { onHandlerBuyMovie(item.id) }}
                                sx={useStyleBtnBuyMovies.button}>
                                Buy Movie
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            })
            }
        </Fragment>
    )
}
