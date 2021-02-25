export default function formatItem(data, description) {
  const price = data.price.toString().split('.');
  return {
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: price[0],
        decimals: price[1] || 0,
      },
      picture: data.pictures[0],
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: description,
    },
  };
}
