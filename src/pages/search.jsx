import React, { useContext } from 'react';
import { motion as m } from 'framer-motion';
import FormSearch from '../components/form-search';
import { SearchList } from '../components/search-list';
import { SearchData } from "../components/data/search-data";
import Divider from '@mui/material/Divider';

const Search = () => {

    const { formikSearch } = useContext(SearchData);

    setTimeout(() => {
        formikSearch.values.searchValue = "";
    }, 5000);

    return (
        <m.div className="w-100 d-flex row m-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <FormSearch formikSearch={formikSearch} />
            <Divider />
            <SearchList />
        </m.div>
    );
}

export { Search };