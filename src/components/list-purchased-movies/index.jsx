import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import store from "../../redux/store";

export const ListPurchasedMovies = () => {

    // object store data movies 
    const storeDataMovies = store.getState();

    return (
        <Fragment>
            {storeDataMovies.movie.map((item, index) => {
                return <Card key={item.id * index + "b"}
                    style={{ backgroundColor: "#01D277" }}
                    className='d-flex flex-row w-100 p-0 mb-2 border'>
                    <div className='d-flex'>
                        <Card.Img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.backdrop_path}`}
                            style={{ width: "4rem", objectFit: "cover" }}
                            alt="Card image" />
                    </div>
                    <Card.Body className='d-flex row p-0 m-0'>
                        <div className='d-flex p-0 ps-2'>
                            <Card.Title className='m-0 pt-1 fs-6'>
                                {item.title}
                                <span className='fw-light ps-2'>
                                    {item.release_date}
                                </span>
                            </Card.Title>
                        </div>
                    </Card.Body>
                </Card>
            })
            }
        </Fragment>
    )
}
