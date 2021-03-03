export default function formatItem({
  id,
  title,
  currency_id,
  pictures,
  condition,
  sold_quantity,
  price,
  shipping: { free_shipping },
},
  description
) {
  const formatPrice = price.toString().split('.');
  return {
    item: {
      id: id,
      title: title,
      price: {
        currency: currency_id,
        amount: formatPrice[0],
        decimals: formatPrice[1] || 0,
      },
      picture: pictures[0],
      condition: condition,
      free_shipping: free_shipping,
      sold_quantity: sold_quantity,
      description: description,
    },
  };
}