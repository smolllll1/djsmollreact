import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import './form-search.css'

const FormSearch = ({ formikSearch }) => {

    const location = useLocation();

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
            <form className="d-flex w-100 p-2" onSubmit={formikSearch.handleSubmit}>
                <label className="w-100" htmlFor="searchValue">
                    <input className="w-100 search-input rounded"
                        id="searchValue"
                        type="search"
                        name="searchValue"
                        value={formikSearch.values.searchValue}
                        onChange={formikSearch.handleChange}
                        onBlur={formikSearch.handleBlur}
                        placeholder="Search for a movie, person..."
                    />
                </label>
                {location.pathname === "/" ?
                    <Link className="text-decoration-none"
                        to={`search/?query=${formikSearch.values.searchValue}`}>
                        <Button type="submit" sx={useStyleBtnSearch.btn}>
                            Search
                        </Button>
                    </Link>
                    :
                    <Link className="text-decoration-none"
                        to={`?query=${formikSearch.values.searchValue}`}>
                        <Button type="submit" sx={useStyleBtnSearch.btn}>
                            Search
                        </Button>
                    </Link>
                }
            </form>
        </section>
    )
}

export default FormSearch;