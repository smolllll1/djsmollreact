import React, { useContext } from "react";
import { getAllPeopleId } from '../../api/axios';
import { motion as m } from 'framer-motion';
import CircularStatic from "../progress";
import { ContentData } from "../data/content-data";
import { useQuery } from "react-query";
import Alert from 'react-bootstrap/Alert';
import ScrollInfoMovies from "./scroll-info-movies";
import { Link, useNavigate } from "react-router-dom";

const PeopleListInfo = () => {

    const navigate = useNavigate();
    // click cards people id
    const { isCardsPeopleId } = useContext(ContentData);

    // cards people
    const {
        isLoading,
        isError,
        error,
        data: listInfoPeople,
    } = useQuery(["pop_people", isCardsPeopleId], () => getAllPeopleId(isCardsPeopleId ? isCardsPeopleId : 224513), {
        keepPreviousData: true
    });

    if (isLoading) return <div className="text-center vh-100 mt-5">
        <CircularStatic />
    </div>;
    if (isError) return <div className="vh-100 text-secondary text-center mt-5">
        <Alert variant="danger">
            Something went wrong! Error: {error.message}
        </Alert>
    </div>;

    // simple (not property biography)
    const biography = [
        {
            id: 1,
            paragraphFirst: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui iusto nisi, odit reprehenderit, necessitatibus
            adipisci earum distinctio inventore dolore ullam quis
            delectus, voluptatibus minima repellat sequi. Sit ullam reiciendis iusto.`,
            paragraphSecond: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui iusto nisi, odit reprehenderit, necessitatibus
            adipisci earum distinctio inventore dolore ullam quis
            delectus, voluptatibus minima repellat sequi. Sit ullam reiciendis iusto.`,
        }
    ];

    if (listInfoPeople) {
        return (
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="d-flex w-100 justify-content-center px-3"
                style={{ backgroundColor: 'rgb(1, 180, 228)' }}>
                {isLoading === true ?
                    <div className="mt-5">
                        <CircularStatic />
                    </div>
                    :
                    <div className="card my-3 p-0 w-100"
                        style={{
                            backgroundColor: '#ffffff',
                            borderStyle: "none",
                            boxShadow: "4px 5px 5px -4px rgba(13, 37, 63)",
                        }}>
                        <div className="row g-0">
                            <div className="col-lg-4 p-4 d-flex justify-content-center">
                                <div className="w-100">
                                    <Link onClick={() => { navigate(-1) }}>
                                        <img src={`https://image.tmdb.org/t/p/original${listInfoPeople?.profile_path}`}
                                            className="rounded"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            alt={listInfoPeople?.name} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex justify-content-center align-items-center">
                                <div className="w-100 d-flex row">
                                    <div className="card-body">
                                        <h2 className="card-title fw-bold">
                                            {listInfoPeople.gender === 2 ?
                                                <Link onClick={() => { navigate(-1) }}
                                                    className="text-decoration-none"
                                                    style={{ color: "#01b4e4" }} >
                                                    {listInfoPeople?.name}
                                                </Link>
                                                :
                                                <Link onClick={() => { navigate(-1) }}
                                                    className="text-decoration-none"
                                                    style={{ color: "deeppink" }} >
                                                    {listInfoPeople?.name}
                                                </Link>
                                            }
                                        </h2>
                                        <h5 className="card-title">
                                            Biography
                                        </h5>
                                        {biography.map((item) => {
                                            return <div key={item.id}>
                                                <p>{item.paragraphFirst}</p>
                                                <p>{item.paragraphSecond}</p>
                                            </div>
                                        })
                                        }
                                        <h3 className="card-title mb-0 mt-2">
                                            Known For
                                        </h3>
                                        <div>
                                            <ScrollInfoMovies listInfoPeople={listInfoPeople} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </m.div >
        )
    }
};

export { PeopleListInfo };