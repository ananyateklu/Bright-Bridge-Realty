import axios from 'axios';

const api = axios.create({
  baseURL: 'https://zillow-com1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
  },
});

export default api;
