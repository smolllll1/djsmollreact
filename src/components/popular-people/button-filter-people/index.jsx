import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonFilterPeople = ({
    dataPeople,
    setFilteredPeople,
    genderPeople,
    setGenderPeople
}) => {

    useEffect(() => {
        if (genderPeople === 0) {
            setFilteredPeople(dataPeople?.results);
            return;
        };
        const filtered = dataPeople?.results.filter((people) => {
            return people.gender === genderPeople
        });
        setFilteredPeople(filtered)

    }, [genderPeople, setFilteredPeople, dataPeople]);

    const useStyleBtnPeople = {
        button: {
            backgroundColor: 'rgb(13, 37, 63)',
            color: '#ffffff',
            textTransform: "capitalize",
            '&:hover': {
                color: "rgb(13, 37, 63)",
            },
        }
    }

    return (
        <Stack justifyContent="center"
            direction="row"
            flexWrap="wrap"
            gap="6px">
            <Button onClick={() => setGenderPeople(0)}
                sx={useStyleBtnPeople.button}
                variant="text">
                All
            </Button>
            <Button onClick={() => setGenderPeople(2)}
                sx={useStyleBtnPeople.button}
                variant="text">
                Men
            </Button>
            <Button onClick={() => setGenderPeople(1)}
                sx={useStyleBtnPeople.button}
                variant="text">
                Women
            </Button>
        </Stack >
    );
}

export default ButtonFilterPeople;