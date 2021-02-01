import React from 'react';

export default function itemDescription({ description }) {
  return (
    <div className='container'>
      <div className='product-description'>
        <span className='product-description--header'>
          Descripción del producto
        </span>
        <p className='product-description--paragraph'>{description}</p>
      </div>
    </div>
  );
}
