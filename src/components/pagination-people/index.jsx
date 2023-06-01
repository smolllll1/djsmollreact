import React, { useContext, useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { ContentData } from '../data/content-data';
import { NavLink, useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import CircularStatic from "../progress";

const PaginationPeople = (
    {
        isPagePeople,
        dataPeople,
        isLoading,
        isError,
        error
    }
) => {

    const location = useLocation();
    const { onHandlerPaginationPeople, setIsPagePeople } = useContext(ContentData);
    // visited pages
    const [visitedPagesPeople, setVisitedPagesPeople] = useState([isPagePeople]);
    // setTimeout pagination
    const [showPaginationPeople, setShowPaginationPeople] = useState(true);

    useEffect(() => {
        if (location.search) {
            const page = parseInt(location.search.split('=')[1]);
            setIsPagePeople(page);
        } else {
            setIsPagePeople(1);
        }
        if (dataPeople) {
            setTimeout(() => {
                setShowPaginationPeople(false)
            }, 2000)
        }
    }, [location.search, setIsPagePeople, dataPeople]);

    if (isLoading) return <div className="text-center mt-5">
        <CircularStatic />
    </div>;
    if (isError) return <div className="vh-100 text-secondary text-center mt-5">
        <Alert variant="danger">
            Something went wrong! Error: {error.message}
        </Alert>
    </div>

    return (
        <Stack spacing={2}>
            {showPaginationPeople === false ?
                <Pagination
                    className='d-flex justify-content-center mb-4'
                    count={dataPeople?.total_pages}
                    page={isPagePeople}
                    onChange={(_, value) => {
                        onHandlerPaginationPeople(value);
                        setVisitedPagesPeople([...visitedPagesPeople, value]);
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
                            bgcolor: "rgb(13, 37, 63)",
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

export default PaginationPeople;