import axios from 'axios';
const url = 'https://api.mercadolibre.com/items/';

async function getDescriptionById(id) {
  const result = await axios.get(`${url}${id}/description`);
  return result;
}

export default getDescriptionById;
