import React from 'react';

export default function breadcrumbs({ breadcrumbsList }) {
  return (
    <div className='container'>
      <ul className='breadcrumbs'>
        {breadcrumbsList.map((el, index) => (
          <li key={index.toString()} className='breadcrumbs--item'>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
