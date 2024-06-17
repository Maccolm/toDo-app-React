import axios from 'axios';

const api = axios.create({
  baseURL: 'https://to-do-app-git-main-maccolms-projects.vercel.app/api',
});

export default api;