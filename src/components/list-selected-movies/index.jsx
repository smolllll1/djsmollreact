import React, { Fragment, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import store from "../../redux/store";
import { ContentData } from '../data/content-data';
import { AuthenticationData } from '../data/authentication-data';
import { axiosBaseUrl } from "../../api/axios";

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

    const location = useLocation();
    const endUrlAccountUsers = location.pathname.split("/")[3];
    // GET URL BUY MOVIE
    const BUY_MOVIE_URL = `users/account/${endUrlAccountUsers}/`;

    // object store data movies 
    const storeDataMovies = store.getState();
    const { onHandlerCardsInfoMovies } = useContext(ContentData);
    const { responseLogin } = useContext(AuthenticationData);
    console.log(responseLogin.username)
    console.log(responseLogin.password)

    const onHandlerDeleteMovie = (value) => {
        storeDataMovies.movie.splice(value, 1);
    };

    const onHandlerBuyMovie = async (value) => {
        try {
            const response = await axiosBaseUrl({
                method: "post", url: BUY_MOVIE_URL,
                auth: {
                    username: responseLogin.username,
                    password: responseLogin.password,
                },
                data: {
                    id_buy_movie: value,
                },
            })
            if (response.status === 200) {
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Fragment>
            {storeDataMovies.movie.map((item, index) => {
                return <Card key={item.id * index + "b"}
                    style={{ backgroundColor: "rgba(13, 37, 63, .9)" }}
                    className='d-flex flex-row w-100 p-0 mb-2 border'>
                    <div className='d-flex'>
                        <Link to={`/pop_movies/${item.id}`}
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
