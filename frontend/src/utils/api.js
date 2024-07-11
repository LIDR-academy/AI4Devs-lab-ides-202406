import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3010', // Assuming backend is running on this URL
});

export default api;