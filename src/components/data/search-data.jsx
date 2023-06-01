import React, { useState, createContext, useEffect } from 'react';
import { useFormik } from "formik";
import { axiosBaseUrl } from "../../api/axios";
import { useQuery } from "react-query";
import { getSearchPeople, getSearchMovies } from '../../api/axios';
import { useLocation } from 'react-router-dom';

const SearchData = createContext();

// POST URL SEARCH
const SEARCH_URL = 'search/';

const SearchValueProvider = ({ children }) => {

    const location = useLocation();
    // search text
    const [isSearchValue, setIsSearchValue] = useState("");

    useEffect(() => {
        setIsSearchValue(location?.search.split("=")[1] || null)
    }, [location?.search])

    // formikSearch logics
    const formikSearch = useFormik({
        initialValues: {
            searchValue: "",
        },

        // Submit form search
        onSubmit: async (values) => {
            await axiosBaseUrl.get(SEARCH_URL, values)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                });
        }
    });

    // search people
    const searchPeopleResults = useQuery(["people", isSearchValue], () => getSearchPeople(isSearchValue), {
        keepPreviousData: true
    });

    // search movies
    const searchMoviesResults = useQuery(["movies", isSearchValue], () => getSearchMovies(isSearchValue), {
        keepPreviousData: true
    });

    // click li counter search movies
    const onHandlerSearchCardsMovies = (value) => {
        setIsSearchValue(value)
    }

    // click li counter search people
    const onHandlerSearchCardsPeople = (value) => {
        setIsSearchValue(value)
    }

    return (
        <SearchData.Provider
            value={{
                // form search
                formikSearch: formikSearch,
                // search people
                searchPeopleResults: searchPeopleResults,
                // search movies
                searchMoviesResults: searchMoviesResults,
                // search text
                isSearchValue: isSearchValue,
                // click li counter search movies
                onHandlerSearchCardsMovies: onHandlerSearchCardsMovies,
                // click li counter search people
                onHandlerSearchCardsPeople: onHandlerSearchCardsPeople,
            }}
        >
            {children}
        </SearchData.Provider>
    );
}

export { SearchValueProvider, SearchData };