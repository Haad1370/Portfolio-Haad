import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const res = await axios.get(`${API}/posts`);
  return res.data;
};

export const getUser = async (userId) => {
  const res = await axios.get(`${API}/users/${userId}`);
  return res.data;
};

export const getComments = async (postId) => {
  const res = await axios.get(`${API}/posts/${postId}/comments`);
  return res.data;
};
