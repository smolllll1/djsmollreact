import React, { useContext } from 'react';
import { motion as m } from 'framer-motion';
import { getPeoplePage } from '../api/axios';
import { useQuery } from "react-query";
import PopularPeople from '../components/popular-people';
import PaginationPeople from '../components/pagination-people';
import { ContentData } from '../components/data/content-data';

const PeoplePages = () => {

    const { isPagePeople } = useContext(ContentData);

    // pagination people
    const {
        isLoading,
        isError,
        error,
        data: dataPeople,
    } = useQuery(["pop_people/", isPagePeople], () => getPeoplePage(isPagePeople), {
        keepPreviousData: true
    });

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex flex-column w-100"
            style={{ backgroundColor: 'rgb(1, 180, 228)' }}>
            <PopularPeople dataPeople={dataPeople} />
            <PaginationPeople
                isPagePeople={isPagePeople}
                dataPeople={dataPeople}
                isLoading={isLoading}
                isError={isError}
                error={error} />
        </m.div>
    )
}

export { PeoplePages };