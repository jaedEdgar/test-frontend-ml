import React from 'react';
import { Link } from 'react-router-dom';
import formatNumber from '../utils/formatNumber';

export default function itemsSearch({ data }) {
  return (
    <div className='container'>
      <ul className='result-search'>
        {data.items.map((item, index) => (
          <li key={index.toString()} className='result-search--item'>
            <div className='result-search--preview'>
              <img src={item.picture} alt={item.title} />
            </div>
            <div className='result-search--wrapp'>
              <div className='result-search--description'>
                <div className='result-search--description-price'>
                  <span className='result-search--description-mount'>
                    $ {formatNumber(item.price.amount)}
                  </span>
                  {item.price.decimals !== 0 && (
                    <span className='result-search--description-decimals'>
                      {item.price.decimals.length === 1
                        ? `${item.price.decimals}0`
                        : item.price.decimals}
                    </span>
                  )}
                  {item.free_shipping && (
                    <i className='free-shipping-icon' title='Envío gratis'></i>
                  )}
                </div>
                <Link
                  to={`/items/${item.id}`}
                  className='result-search--description-title'
                >
                  <h2>{item.title}</h2>
                </Link>
              </div>
              <span className='result-search--description-city'>
                {item.city_name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
