import axios from 'axios';

axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = 'http://localhost:8080';

export const instanceAPI = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });