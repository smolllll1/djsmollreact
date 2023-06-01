import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ContentData } from '../data/content-data';
import { SearchData } from '../data/search-data';
import Alert from 'react-bootstrap/Alert';
import CircularStatic from "../progress";

const SearchCardsPeople = () => {

    const { onHandlerCardsInfoPeople } = useContext(ContentData);
    const { isSearchValue, searchPeopleResults } = useContext(SearchData);

    if (searchPeopleResults.isLoading) return <div className="text-center vh-100 mt-5">
        <CircularStatic />
    </div>;
    if (searchPeopleResults.isError) return <div className="vh-100 text-secondary text-center mt-5">
        <Alert variant="danger">
            Somethin went wrong! Error: {searchPeopleResults.error.message}
        </Alert>
    </div>

    if (isSearchValue !== "") {
        return (
            <Fragment>
                {searchPeopleResults?.data?.count === 0 ?
                    <h6 className='text-secondary fw-light'>There are no people that matched your query.</h6>
                    :
                    searchPeopleResults?.data?.results.map((item) => {
                        return <Card key={item.id}
                            className='d-flex flex-row w-100 mb-2 p-0'
                            style={{ backgroundColor: "rgba(13, 37, 63, .9)" }}>
                            <div className='d-flex'>
                                <Link to={`/pop_people/${item.id}`} onClick={() => { onHandlerCardsInfoPeople(item.id) }}>
                                    <Card.Img src={`https://www.themoviedb.org/t/p/w90_and_h90_face${item.profile_path}`}
                                        style={{ width: "6rem", objectFit: "cover" }}
                                        alt="Card image" />
                                </Link>
                            </div>
                            <Card.Body className='d-flex row m-0'>
                                <Card.Title className='fs-6 fw-bold text-white'>{item.name}</Card.Title>
                                <Card.Text className='fs-6 text-white'>{item.known_for_department}</Card.Text>
                            </Card.Body>
                        </Card>
                    })
                }
            </Fragment>
        )
    }
}

export { SearchCardsPeople };