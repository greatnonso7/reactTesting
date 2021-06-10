import axios from 'axios';

export const API = 'https://randomuser.me/api';

export const fetchData = async () => {
  const url = API;

  return await axios.get(url);
};

fetchData();
