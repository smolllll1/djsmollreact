import React, { useContext } from 'react';
import { motion as m } from 'framer-motion';
import { getMoviesPage } from '../api/axios';
import { useQuery } from "react-query";
import PopularMovies from '../components/popular-movies';
import PaginationMovies from '../components/pagination-movies';
import { ContentData } from '../components/data/content-data';

const MoviesPages = () => {

    const { isPageMovies } = useContext(ContentData);

    // pagination movies
    const {
        isLoading,
        isError,
        error,
        data: dataMovies,
    } = useQuery(["pop_movies/", isPageMovies], () => getMoviesPage(isPageMovies), {
        keepPreviousData: true
    });

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex flex-column w-100">
            <PopularMovies dataMovies={dataMovies} />
            <PaginationMovies
                isPageMovies={isPageMovies}
                dataMovies={dataMovies}
                isLoading={isLoading}
                isError={isError}
                error={error} />
        </m.div>
    )
}

export { MoviesPages };