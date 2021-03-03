import React from 'react';

import { Product } from './';

export default function productList({ products }) {
  return (
    <div className='container'>
      <ul className='result-search'>
        {products.length !== 0 &&
          products.map((item, index) => {
            const {
              picture,
              title,
              price,
              free_shipping,
              id,
              city_name,
            } = item;
            const { decimals, amount } = price;
            return (
              <Product
                key={index.toString()}
                id={id}
                decimals={decimals}
                amount={amount}
                picture={picture}
                title={title}
                free_shipping={free_shipping}
                city_name={city_name}
              />
            );
          })}
      </ul>
    </div>
  );
}
