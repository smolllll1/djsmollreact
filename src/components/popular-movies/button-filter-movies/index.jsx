import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonFilterMovies = ({
    dataMovies,
    setFilteredMovies,
    activeGenre,
    setActiveGenre
}) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFilteredMovies(dataMovies?.results);
            return;
        };
        const filtered = dataMovies?.results.filter((movie) => {
            return movie.genre_ids.includes(activeGenre);
        });
        setFilteredMovies(filtered)

    }, [activeGenre, setFilteredMovies, dataMovies]);

    const useStyleBtnMovies = {
        button: {
            backgroundColor: "rgb(1, 180, 228)",
            color: '#ffffff',
            textTransform: "capitalize",
            '&:hover': {
                color: "rgb(144, 206, 161)",
            },
        }
    }
    return (
        <Stack justifyContent="center"
            direction="row"
            flexWrap="wrap"
            gap="6px">
            <Button onClick={() => setActiveGenre(0)}
                sx={useStyleBtnMovies.button}
                variant="text">All</Button>
            <Button onClick={() => setActiveGenre(28)}
                sx={useStyleBtnMovies.button}
                variant="text">Action</Button>
            <Button onClick={() => setActiveGenre(12)}
                sx={useStyleBtnMovies.button}
                variant="text">Adventure</Button>
            <Button onClick={() => setActiveGenre(16)}
                sx={useStyleBtnMovies.button}
                variant="text">Animation</Button>
            <Button onClick={() => setActiveGenre(35)}
                sx={useStyleBtnMovies.button}
                variant="text">Comedy</Button>
            <Button onClick={() => setActiveGenre(80)}
                sx={useStyleBtnMovies.button}
                variant="text">Crime</Button>
            <Button onClick={() => setActiveGenre(18)}
                sx={useStyleBtnMovies.button}
                variant="text">Drama</Button>
            <Button onClick={() => setActiveGenre(10751)}
                sx={useStyleBtnMovies.button}
                variant="text">Family</Button>
            <Button onClick={() => setActiveGenre(14)}
                sx={useStyleBtnMovies.button}
                variant="text">Fantasy</Button>
            <Button onClick={() => setActiveGenre(36)}
                sx={useStyleBtnMovies.button}
                variant="text">History</Button>
            <Button onClick={() => setActiveGenre(27)}
                sx={useStyleBtnMovies.button}
                variant="text">Horror</Button>
        </Stack >
    );
}

export default ButtonFilterMovies;