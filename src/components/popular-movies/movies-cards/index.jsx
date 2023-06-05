import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ContentData } from '../../data/content-data';

const MoviesCards = ({ item }) => {

    const { onHandlerCardsInfoMovies } = useContext(ContentData);

    if (item) {
        return (
            <m.div layout>
                <Card
                    style={{
                        width: '14rem',
                        boxShadow: "4px 5px 5px -4px rgba(13, 37, 63)",
                    }}>
                    <Link
                        id={item.id}
                        to={`/pop_movies/${item.id}`}
                        title={item.title}
                        alt={item.title}>
                        <Card.Img variant="top"
                            style={{ width:"100%", height:"333px", objectFit: "cover", cursor: "pointer" }}
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={item.title}
                            onClick={() => { onHandlerCardsInfoMovies(item.id) }}
                        />
                    </Link>
                    <Card.Body
                        style={{ height: "7rem" }}
                    >
                        <Card.Title style={{ fontSize: "0.875rem" }}>{item.title}</Card.Title>
                        <Card.Text style={{ fontSize: "0.875rem" }}>{item.release_date}</Card.Text>
                    </Card.Body>
                </Card>
            </m.div>
        );
    };
}

export default MoviesCards;