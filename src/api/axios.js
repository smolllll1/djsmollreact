import axios from 'axios';
// base url
export const axiosBaseUrl = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});
// pagination people pages request
export const getPeoplePage = async (pageParam = 1) => {
  const response = await axiosBaseUrl.get(`pop_people/?page=${pageParam}`);
  return response.data;
};
// pagination movies pages request
export const getMoviesPage = async (pageParam = 1) => {
  const response = await axiosBaseUrl.get(`pop_movies/?page=${pageParam}`);
  return response.data;
};
// all people request
export const getAllPeopleId = async (idParam) => {
  const response = await axiosBaseUrl.get(`pop_people/${idParam}`);
  return response.data;
};
// all movies request
export const getAllMoviesId = async (idParam) => {
  const response = await axiosBaseUrl.get(`pop_movies/${idParam}`);
  return response.data;
};
// search people request
export const getSearchPeople = async (value) => {
  const response = await axiosBaseUrl.get(`search/search_people/?search=${value}`);
  return response.data;
};
// search movies request
export const getSearchMovies = async (value) => {
  const response = await axiosBaseUrl.get(`search/search_movies/?search=${value}`);
  return response.data;
};