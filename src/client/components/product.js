import React from 'react';
import { Link } from 'react-router-dom';
import formatNumber from '../utils/formatNumber';

export default function product({
  picture,
  title,
  amount,
  decimals,
  id,
  city_name,
  free_shipping,
}) {

  return (
    <li className='result-search--item'>
      <div className='result-search--preview'>
        <img src={picture} alt={title} />
      </div>
      <div className='result-search--wrapp'>
        <div className='result-search--description'>
          <div className='result-search--description-price'>
            <span className='result-search--description-mount'>
              $ {formatNumber(amount)}
            </span>
            {decimals !== 0 && (
              <span className='result-search--description-decimals'>
                {decimals.length === 1 ? `${decimals}0` : decimals}
              </span>
            )}
            {free_shipping && (
              <i className='free-shipping-icon' title='Envío gratis'></i>
            )}
          </div>
          <h2>
            <Link
              to={`/items/${id}`}
              className='result-search--description-title'
            >
              {title}
            </Link>
          </h2>
        </div>
        <span className='result-search--description-city'>{city_name}</span>
      </div>
    </li>
  );
}
