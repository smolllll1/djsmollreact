import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';

export default function ScrollInfoMovies({ listInfoPeople }) {
    
    if (listInfoPeople) {
        return (
            <ImageList sx={{ width: "75%", height: 250 }} cols={1} rowHeight={211}>
                {listInfoPeople?.known_for.map((item, i) => {
                    return <ImageListItem
                        key={item.id * i + "l"}
                        className="my-4 w-75">
                        < img
                            src={`http://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                            srcSet={`http://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                            className="rounded"
                            style={{ width: "75%", height: "100%", objectFit: "cover" }}
                            alt={item.title}
                            loading="lazy" />
                        <span className="fw-bold" style={{ fontSize: "14px" }}>
                            {item.title}
                            {item.name}
                        </span>
                        <span className="fw-light" style={{ fontSize: "12px" }}>
                            {item.release_date}
                        </span>
                    </ImageListItem>
                })
                }
            </ImageList>
        );
    };
}