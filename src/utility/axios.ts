import axios from 'axios';

export const instanceAPI = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
  });