import axios from 'axios';
const url = 'https://api.mercadolibre.com/categories/';

async function getCategoriesById(id) {
  const result = await axios.get(`${url}${id}`);
  return result;
}

export default getCategoriesById;
