const axios = require('axios');

const fetcher = async () => {
  const res = await axios.get('https://reqres.in/api/products/3');
  if (res?.data?.title) return res.data.title;
  return 'Error: Could not fetch data';
};

module.exports = fetcher;
