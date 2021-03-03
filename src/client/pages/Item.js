import React from 'react';
import useSearch from '../hooks/useSearch';
import useProduct from '../hooks/useProduct';

import {
  Navbar,
  Breadcrumbs,
  ProductDescription,
  ProductResume,
} from '../components';

export default function Item() {
  const [valueSearch, setValueSearch, handleSubmitSearch] = useSearch();
  const [categories, product] = useProduct()
  return (
    <>
      <Navbar
        handleSubmitSearch={handleSubmitSearch}
        value={valueSearch}
        handleValueChange={setValueSearch}
      />
      <Breadcrumbs breadcrumbsList={categories} />
      {product.item && <div className='container product-main'>
        <ProductResume data={product} />
        <ProductDescription description={product.item.description} />
      </div>}
    </>
  );
}
