import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getSearchMovies } from '../../api/axios';
import Carousel from 'react-bootstrap/Carousel';
import CircularStatic from "../progress";
import { ContentData } from '../data/content-data';

import "./slider-home.css";

function SliderHomePage() {

    const { onHandlerCardsInfoMovies } = useContext(ContentData);
    const [isRandomFirst, setIsRandomFirst] = useState("");
    const [isRandomSecond, setIsRandomSecond] = useState("");
    const [isRandomThird, setIsRandomThird] = useState("");

    useEffect(() => {
        let isMovies = true;
        let randomSlideMoviesFirst;
        let randomSlideMoviesSecond;
        let randomSlideMoviesThird;
        // query all movies results
        getSearchMovies("").then((data) => {
            if (isMovies) {
                const endUrlMovies = data.results.map((item) => {
                    return item;
                });
                randomSlideMoviesFirst = endUrlMovies[Math.floor(Math.random() * data.count)];
                setIsRandomFirst(randomSlideMoviesFirst);
                randomSlideMoviesSecond = endUrlMovies[Math.floor(Math.random() * data.count)];
                setIsRandomSecond(randomSlideMoviesSecond);
                randomSlideMoviesThird = endUrlMovies[Math.floor(Math.random() * data.count)];
                setIsRandomThird(randomSlideMoviesThird);
                return;
            }
            return () => {
                isMovies = false;
            }
        });
    }, []);

    return (
        <section className='d-flex row w-100 mx-0'>
            <div className='my-0 slide-top' />
            {isRandomFirst === "" ?
                <div className='d-flex mt-5 justify-content-center'>
                    <CircularStatic />
                </div>
                :
                (<Carousel className='w-100 px-0'>
                    <Carousel.Item settimeout={5000}>
                        <Link to={`/pop_movies/${isRandomFirst?.id}`}
                            onClick={() => { onHandlerCardsInfoMovies(isRandomFirst?.id) }}>
                            <img className="d-block w-100"
                                src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)${isRandomFirst?.backdrop_path}`}
                                alt="First slide"
                                style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                        </Link>
                        <Carousel.Caption>
                            <h3>{isRandomFirst?.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item settimeout={5000}>
                        <Link to={`/pop_movies/${isRandomSecond?.id}`}
                            onClick={() => { onHandlerCardsInfoMovies(isRandomSecond?.id) }}>
                            <img className="d-block w-100"
                                src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)${isRandomSecond?.backdrop_path}`}
                                alt="First slide"
                                style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                        </Link>
                        <Carousel.Caption>
                            <h3>{isRandomSecond?.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item settimeout={5000} >
                        <Link to={`/pop_movies/${isRandomThird?.id}`}
                            onClick={() => { onHandlerCardsInfoMovies(isRandomThird?.id) }}>
                            <img className="d-block w-100"
                                src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)${isRandomThird?.backdrop_path}`}
                                alt="First slide"
                                style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                        </Link>
                        <Carousel.Caption>
                            <h3>{isRandomThird?.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                )
            }
        </section >
    );
}

export { SliderHomePage };