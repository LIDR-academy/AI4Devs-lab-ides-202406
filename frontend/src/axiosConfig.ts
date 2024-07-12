import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3010', // Changed to point to the backend URL
});

export default instance;
