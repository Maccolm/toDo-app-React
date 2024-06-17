import axios from 'axios';

const api = axios.create({
  baseURL: 'https://to-do-app-gold-iota.vercel.app/api',
});

export default api;