import axios from 'axios';
const url = 'https://api.mercadolibre.com/items/';

async function getitemById(id) {
  const result = await axios.get(`${url}${id}`);
  return result;
}

export default getitemById;
