import axios from 'axios';
const url = 'https://api.mercadolibre.com/sites/MLA/search?q=';

async function getItemsByQuery(query) {
  const result = await axios.get(`${url}${encodeURI(query)}&limit=4`);
  return result;
}

export default getItemsByQuery;
