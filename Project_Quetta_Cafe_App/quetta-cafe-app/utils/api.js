import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.100.18:5000/api', // Replace with your local IP if testing on real phone
});
