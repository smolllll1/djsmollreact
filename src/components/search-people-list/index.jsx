import React, { useContext } from 'react';
import { motion as m } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ContentData } from '../data/content-data';
import { SearchData } from '../data/search-data';

export const SearchPeopleList = () => {

    const navigate = useNavigate();
    const { onHandlerCardsInfoPeople } = useContext(ContentData);
    const { searchPeopleResults, isSearchValue } = useContext(SearchData);

    return (
        <m.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex row w-100 px-5"
            style={{ backgroundColor: "#01b4e4" }}>
            <h6 className='text-secondary fw-light mt-3 mb-3'>
                <b>{searchPeopleResults?.data?.count}</b> people were found for the search query
                "<b>{isSearchValue}</b>"
            </h6>
            {searchPeopleResults?.data?.count === 0 ?
                <h6 className='text-secondary fw-light'>To return to the previous page click
                    <Link onClick={() => { navigate(-1) }} className="text-decoration-none"> here</Link>
                </h6>
                :
                null
            }
            {searchPeopleResults?.data?.results.map((item) => {
                return <Card key={item.id} className='d-flex flex-row w-100 p-0 mb-3'>
                    <div className='d-flex'>
                        <Link to={`/pop_people/${item.id}`}
                            onClick={() => { onHandlerCardsInfoPeople(item.id) }}>
                            <Card.Img src={`https://www.themoviedb.org/t/p/w90_and_h90_face${item.profile_path}`}
                                style={{ width: "6rem", objectFit: "cover" }}
                                alt="Card image" />
                        </Link>
                    </div>
                    <Card.Body className='d-flex row p-1 m-0'>
                        <Card.Title className='m-0 fs-6 fw-bold'>
                            {item.name}
                        </Card.Title>
                        <Card.Text className='m-0 fs-6'>
                            {item.known_for_department}
                        </Card.Text>
                        <Card.Text className='fs-7'>
                            <Link className='text-decoration-none'
                                style={{ color: "#01b4e4" }}
                                onClick={() => { navigate(-1) }}>
                                Go Back
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            })
            }
        </m.div>
    )
}
