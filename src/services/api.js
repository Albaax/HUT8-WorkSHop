import axios from 'axios';

export default axios.create({
  baseURL: 'https://processo-seletivo-hut8.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
})