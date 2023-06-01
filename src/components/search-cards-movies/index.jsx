import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ContentData } from '../data/content-data';
import { SearchData } from '../data/search-data';
import Alert from 'react-bootstrap/Alert';
import CircularStatic from "../progress";

const SearchCardsMovies = () => {

  const { onHandlerCardsInfoMovies } = useContext(ContentData);
  const { isSearchValue, searchMoviesResults } = useContext(SearchData);

  if (searchMoviesResults.isLoading) return <div className="text-center vh-100 mt-5">
    <CircularStatic />
  </div>;
  if (searchMoviesResults.isError) return <div className="vh-100 text-secondary text-center mt-5">
    <Alert variant="danger">
      Somethin went wrong! Error: {searchMoviesResults.error.message}
    </Alert>
  </div>

  if (isSearchValue !== "") {
    return (
      <Fragment>
        {searchMoviesResults?.data?.count === 0 ?
          <h6 className='text-secondary fw-light'>There are no movies that matched your query.</h6>
          :
          searchMoviesResults?.data?.results.map((item) => {
            return <Card key={item.id}
              className='d-flex flex-row w-100 mb-2 p-0'
              style={{ backgroundColor: "rgba(13, 37, 63, .9)" }}>
              <div className='d-flex'>
                <Link to={`/pop_movies/${item.id}`} onClick={() => { onHandlerCardsInfoMovies(item.id) }}>
                  <Card.Img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.backdrop_path}`}
                    style={{ width: "6rem", objectFit: "cover", zIndex: "1000" }}
                    alt="Card image" />
                </Link>
              </div>
              <Card.Body className='d-flex row p-1 m-0'>
                <Card.Title className='fs-6 fw-bold text-white'>{item.title}</Card.Title>
                <Card.Text className='fs-6 text-white'>{item.release_date}</Card.Text>
              </Card.Body>
            </Card>
          })
        }
      </Fragment>
    )
  }
}

export { SearchCardsMovies };