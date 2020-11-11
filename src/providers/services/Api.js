import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: `https://v2.api-football.com`
});

AxiosInstance.interceptors.request.use(
  async config => {

    document.body.classList.add('loading-indicator');
  
    config.headers = {
      'X-RapidAPI-Key': '55e1fb0c70edb23afccefb81ba68336e'
    }

    return config;
  },
  error => {
    Promise.reject(error)
  }
);

AxiosInstance.interceptors.response.use(
  async response => {

    document.body.classList.remove('loading-indicator');
  
    return response;
  },
  error => {
    Promise.reject(error)
  }
);

export default AxiosInstance;