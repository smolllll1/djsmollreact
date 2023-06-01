import React, { useState, Fragment } from "react";
import CircularStatic from "../progress";
import ButtonFilterPeople from "./button-filter-people";
import PeopleCards from "./people-cards";

const PopularPeople = ({ dataPeople }) => {

    // gender filter people
    const [filteredPeople, setFilteredPeople] = useState([]);
    // 0 - all people cards 
    const [genderPeople, setGenderPeople] = useState(0);

    return (
        <Fragment>
            <h3 className="m-0 mt-1 px-2 align-self-center text-secondary">Popular People</h3>
            <div className="d-flex col justify-content-around mt-3">
                <ButtonFilterPeople
                    dataPeople={dataPeople}
                    setFilteredPeople={setFilteredPeople}
                    genderPeople={genderPeople}
                    setGenderPeople={setGenderPeople} />
            </div>
            {dataPeople === null ?
                <div className="text-center vh-100 mt-5">
                    <CircularStatic />
                </div>
                :
                <div className="d-flex gap-2 py-4 justify-content-center"
                    style={{ flexWrap: "wrap" }}>
                    {filteredPeople?.map((item, i) => {
                        return <PeopleCards
                            key={item.id * i + "d"}
                            item={item} />
                    })
                    }
                </div>
            }
        </Fragment >
    )
}

export default PopularPeople;