const addMovie = (newMovie) => {
    return {
        type: "ADD_MOVIE",
        payload: newMovie,
    }
};

export { addMovie };