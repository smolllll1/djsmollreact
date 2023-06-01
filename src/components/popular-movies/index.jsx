import React, { useState, Fragment } from "react";
import CircularStatic from "../progress";
import ButtonFilterMovies from "./button-filter-movies";
import MoviesCards from "./movies-cards";

const PopularMovies = ({dataMovies}) => {

    // genre filter movies
    const [filteredMovies, setFilteredMovies] = useState([]);
    // 0 - all genres 
    const [activeGenre, setActiveGenre] = useState(0);

    return (
        <Fragment>
            <h3 className="m-0 mt-1 px-2 align-self-center text-secondary">Popular Movies</h3>
            <div className="d-flex col justify-content-around mt-3">
                <ButtonFilterMovies
                    dataMovies={dataMovies}
                    setFilteredMovies={setFilteredMovies}
                    activeGenre={activeGenre}
                    setActiveGenre={setActiveGenre} />
            </div>
            {dataMovies === null ?
                <div className="text-center vh-100 mt-5">
                    <CircularStatic />
                </div>
                :
                <div className="w-100 d-flex gap-2 py-4 justify-content-center"
                    style={{ flexWrap: "wrap" }}>
                    {filteredMovies?.map((item, i) => {
                        return <MoviesCards
                            key={item.id * i + "r"}
                            item={item} />
                    })
                    }
                </div>
            }
        </Fragment >
    )
}

export default PopularMovies;