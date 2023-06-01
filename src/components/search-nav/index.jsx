import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import './search-nav.css'

const SearchNav = ({ formikSearch }) => {

    const useStyleBtnSearch = {
        btn: {
            backgroundColor: "rgb(1, 180, 228)",
            color: "seashell",
            textTransform: "capitalize",
            fontSize: "1rem",
            marginLeft: "8px",
            '&:hover': {
                color: 'gray',
            },
        }
    }

    return (
        <section className="d-flex w-100 p-0">
            <form className="d-flex w-100 p-3" onSubmit={formikSearch.handleSubmit}>
                <label className="w-100" htmlFor="name">
                    <input className="w-100 search-input"
                        type="search"
                        name="searchValue"
                        value={formikSearch.values.searchValue}
                        onChange={formikSearch.handleChange}
                        onBlur={formikSearch.handleBlur}
                        placeholder="Search for a movie, person..."
                    />
                </label>
                <Link to={`?query=${formikSearch.values.searchValue}`}>
                    <Button type="submit" sx={useStyleBtnSearch.btn}>
                        Search
                    </Button>
                </Link>
            </form>
        </section>
    )
}

export default SearchNav;