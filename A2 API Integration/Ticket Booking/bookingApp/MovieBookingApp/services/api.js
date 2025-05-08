import axios from 'axios';

const API_KEY = '92f6e8e16fc0eab342de9380379564b3';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return res.data.results;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};
