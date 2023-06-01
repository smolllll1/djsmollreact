import React, { useContext } from 'react';
import { motion as m } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ContentData } from '../data/content-data';
import { SearchData } from '../data/search-data';

export const SearchMoviesList = () => {

    const navigate = useNavigate();
    const { onHandlerCardsInfoMovies } = useContext(ContentData);
    const { searchMoviesResults, isSearchValue } = useContext(SearchData);

    return (
        <m.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex row w-100 px-5">
            <h6 className="text-secondary fw-light mb-3 mt-3">
                <b>{searchMoviesResults?.data?.count}</b> movies were found for the search query "<b>{isSearchValue}</b>"
            </h6>
            {searchMoviesResults?.data?.count === 0 ?
                <h6 className='text-secondary fw-light'>To return to the previous page click
                    <Link onClick={() => { navigate(-1) }} className="text-decoration-none"> here</Link>
                </h6>
                :
                null
            }
            {searchMoviesResults?.data?.results.map((item) => {
                return <Card key={item.id} style={{ backgroundColor: "rgba(13, 37, 63, .9)" }}
                    className='d-flex flex-row w-100 p-0 mb-3 border-secondary'>
                    <div className='d-flex'>
                        <Link to={`/pop_movies/${item.id}`}
                            onClick={() => { onHandlerCardsInfoMovies(item.id) }}>
                            <Card.Img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.backdrop_path}`}
                                style={{ width: "6rem", objectFit: "cover" }}
                                alt="Card image" />
                        </Link>
                    </div>
                    <Card.Body className='d-flex row p-1 m-0'>
                        <Card.Title className='fs-6 fw-bold text-white'>
                            {item.title}
                        </Card.Title>
                        <Card.Text className='m-0 fs-6 text-white'>
                            {item.release_date}
                        </Card.Text>
                        <Card.Text className='fs-7'>
                            <Link className='text-decoration-none'
                                style={{ color: "#01D277" }}
                                onClick={() => { navigate(-1) }}>
                                Go Back
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            })
            }
        </m.div>
    )
}
