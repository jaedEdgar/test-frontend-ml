export default function formatListItems(data) {
  const result = data.results.map((item) => {
    const price = item.price.toString().split('.');
    return {
      id: item.id,
      title: item.title,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      city_name: item.address.city_name,
      price: {
        currency: item.currency_id,
        amount: price[0],
        decimals: price[1] || 0,
      },
    };
  });

  return result;
}
