import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fc15dc45fb0a2c9bf3427e2f6d7b73db';

export const getTranding = () => {
  const response = axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  );
  return response;
};

export const getMovieById = movieId => {
  const response = axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  return response;
};

export const getMovieByQuery = query => {
  const response = axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`,
  );
  return response;
};

export const getCredits = movieId => {
  const response = axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return response;
};

export const getReviews = movieId => {
  const response = axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
  return response;
};