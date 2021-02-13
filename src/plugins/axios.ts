import axios from 'axios';

const axiosPlugin = axios.create({
  baseURL: process.env.API_URI || 'http://localhost:8081/api/v1/',
  withCredentials: true,
});

export default axiosPlugin;
