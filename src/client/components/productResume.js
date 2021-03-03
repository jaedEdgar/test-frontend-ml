import React from 'react';
import formatNumber from '../utils/formatNumber';

export default function productResume({ data: { item } }) {
  const { condition, sold_quantity, picture, title, price, } = item
  const { amount, decimals } = price
  const { secure_url } = picture
  return (
    <div className='product-wrapp'>
      <div className='product-picture'>
        <img src={secure_url} alt='' />
      </div>
      <div className='product-resume'>
        <span className='product-resume--status'>
          {condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
          {sold_quantity} vendidos
        </span>
        <h1 className='product-resume--title'>{title}</h1>
        <span className='product-resume--price'>
          $ {formatNumber(amount)}
          <i className='product-resume--price-decimals'>
            {decimals <= 1 ? `${decimals}0` : decimals}
          </i>
        </span>
        <button className='btn btn-primary'>Comprar</button>
      </div>
    </div>
  );
}
