import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: `https://v2.api-football.com`
});

AxiosInstance.interceptors.request.use(
  async config => {
    config.headers = {
      'X-RapidAPI-Key': '55e1fb0c70edb23afccefb81ba68336e'
    }

    return config;
  },
  error => {
    Promise.reject(error)
  }
);

export default AxiosInstance;