import React, { useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';

const ContentData = createContext();

const ContentDataProvider = ({ children }) => {

    const location = useLocation();

    // click cards (people-list-info page, movies-list-info page)
    const [isCardsPeopleId, setIsCardsPeopleId] = useState(parseInt(location?.pathname.split("/")[2]));
    const [isCardsMoviesId, setIsCardsMoviesId] = useState(parseInt(location?.pathname.split("/")[3]));

    // pagination (people page, movies page)
    const [isPagePeople, setIsPagePeople] = useState(location.search ? parseInt(location?.search.split("=")[1]) : 1);
    const [isPageMovies, setIsPageMovies] = useState(location.search ? parseInt(location?.search.split("=")[1]) : 1);

    // handler click cards people (value === id)
    const onHandlerCardsInfoPeople = (value) => {
        setIsCardsPeopleId(value);
    };

    // handler click cards movies (value === id)
    const onHandlerCardsInfoMovies = (value) => {
        setIsCardsMoviesId(value);
    };

    // handler chenge pagination people (value === number page)
    const onHandlerPaginationPeople = (value) => {
        setIsPagePeople(value);
    };

    // handler chenge pagination movies (value === number page)
    const onHandlerPaginationMovies = (value) => {
        setIsPageMovies(value);
    }

    return (
        <ContentData.Provider
            value={{
                // movies pagination (movies page)
                onHandlerPaginationMovies: onHandlerPaginationMovies,
                isPageMovies: isPageMovies,
                setIsPageMovies: setIsPageMovies,
                // people pagination (people page)
                onHandlerPaginationPeople: onHandlerPaginationPeople,
                isPagePeople: isPagePeople,
                setIsPagePeople: setIsPagePeople,
                // people cards (people list info component} 
                onHandlerCardsInfoPeople: onHandlerCardsInfoPeople,
                isCardsPeopleId: isCardsPeopleId,
                // movies cards (movies list info component}
                onHandlerCardsInfoMovies: onHandlerCardsInfoMovies,
                isCardsMoviesId: isCardsMoviesId,
            }}>
            {children}
        </ContentData.Provider>
    );
}

export { ContentDataProvider, ContentData };