import React from 'react';

export default function breadcrumbs({ breadcrumbsList }) {
  return (
    <div className='container'>
      <ul className='breadcrumbs'>
        {breadcrumbsList.length !== 0 && breadcrumbsList.map((breadcrumb, index) => (
          <li key={index.toString()} className='breadcrumbs--item'>
            {breadcrumb}
          </li>
        ))}
      </ul>
    </div>
  );
}
