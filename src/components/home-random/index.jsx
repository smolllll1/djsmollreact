import React, { useState, useEffect } from 'react';
import { getMoviesPage } from '../../api/axios';
import CircularStatic from "../progress";

const HomeRandom = () => {

    const [dataPopularMovies, setDataPopularMovies] = useState([]);

    useEffect(() => {
        let isMoviesPage = true;
        getMoviesPage().then((data) => {
            if (isMoviesPage) {
                setDataPopularMovies(data.results);
                return;
            }
        });
        return () => {
            isMoviesPage = false;
        }
    }, []);

    const endUrlMovies = dataPopularMovies.map((item) => {
        return (item.backdrop_path);
    });

    let randomImageMovies;
    randomImageMovies = endUrlMovies[Math.floor(Math.random() * endUrlMovies.length)];

    return (
        <section className='d-flex w-100 justify-content-center'>
            {randomImageMovies ?
                <div className='w-100 d-flex position-revative'>
                    <img src={`https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${randomImageMovies}`}
                        style={{
                            width: "100%",
                            height: "50vh",
                            objectFit: "cover",
                        }}
                        alt="Random images" />
                    <div className='text-white position-absolute mt-5 ms-5'>
                        <h2 className='fs-1 fw-bold'>Welcome.</h2>
                        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                    </div>
                </div>
                :
                <div className='mt-5'>
                   <CircularStatic /> 
                </div>
            }
        </section>
    );
}

export { HomeRandom };