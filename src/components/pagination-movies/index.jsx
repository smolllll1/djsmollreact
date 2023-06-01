import React, { useContext, useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { ContentData } from "../data/content-data";
import { NavLink, useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import CircularStatic from "../progress";

const PaginationMovies = (
    {
        isPageMovies,
        dataMovies,
        isLoading,
        isError,
        error
    }
) => {

    const location = useLocation();
    const { onHandlerPaginationMovies, setIsPageMovies } = useContext(ContentData);
    // visited pages
    const [visitedPagesMovies, setVisitedPagesMovies] = useState([isPageMovies]);
    // setTimeout pagination
    const [showPaginationMovies, setShowPaginationMovies] = useState(true);

    useEffect(() => {
        if (location.search) {
            const page = parseInt(location.search.split('=')[1]);
            setIsPageMovies(page);
        } else {
            setIsPageMovies(1);
        }
        if (dataMovies) {
            setTimeout(() => {
                setShowPaginationMovies(false)
            }, 2000)
        }
    }, [location.search, setIsPageMovies, dataMovies]);

    if (isLoading) return <div className="text-center mt-5">
        <CircularStatic />
    </div>;
    if (isError) return <div className="vh-100 text-secondary text-center mt-5">
        <Alert variant="danger">
            Something went wrong! Error: {error.message}
        </Alert>
    </div>;
    return (
        <Stack spacing={2}>
            {showPaginationMovies === false ?
                <Pagination
                    className='d-flex justify-content-center mb-4'
                    count={dataMovies?.total_pages}
                    page={isPageMovies}
                    onChange={(_, value) => {
                        onHandlerPaginationMovies(value);
                        setVisitedPagesMovies([...visitedPagesMovies, value]);
                    }}
                    renderItem={(item) => (
                        <PaginationItem
                            component={NavLink}
                            to={item.page === 1 ? "" : `?page=${item.page}`}
                            {...item}
                        />
                    )}
                    size="small"
                    showFirstButton
                    showLastButton
                    siblingCount={1}
                    shape='rounded'
                    sx={{
                        "a.MuiPaginationItem-rounded.Mui-selected": {
                            bgcolor: "rgb(1, 180, 228)",
                            color: "white",
                        },
                        "a.MuiPaginationItem-rounded": {
                            color: "#ffffff",
                        },
                        "div.MuiPaginationItem-ellipsis": {
                            color: "#ffffff",
                        }
                    }}
                />
                :
                null
            }
        </Stack>
    );
}

export default PaginationMovies;