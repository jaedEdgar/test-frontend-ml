import React from 'react';
import formatNumber from '../utils/formatNumber';

export default function itemResume({ data }) {
  return (
    <div className='product-wrapp'>
      <div className='product-picture'>
        <img src={data.item.picture.secure_url} alt='' />
      </div>
      <div className='product-resume'>
        <span className='product-resume--status'>
          {data.item.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
          {data.item.sold_quantity} vendidos
        </span>
        <h1 className='product-resume--title'>{data.item.title}</h1>
        <span className='product-resume--price'>
          $ {formatNumber(data.item.price.amount)}
          <i className='product-resume--price-decimals'>
            {data.item.price.decimals <= 1
              ? `${data.item.price.decimals}0`
              : data.item.price.decimals}
          </i>
        </span>
        <button className='btn btn-primary'>Comprar</button>
      </div>
    </div>
  );
}
