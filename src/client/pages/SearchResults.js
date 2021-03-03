import React from 'react';
import useSearch from '../hooks/useSearch';
import { Navbar, Breadcrumbs, ProductList, Loader } from '../components/';
import useProducts from '../hooks/useProducts';

export default function SearchResults() {
  const [valueSearch, setValueSearch, handleSubmitSearch] = useSearch();
  const [categories, products, showLoader, getProducts] = useProducts(
    setValueSearch,
    valueSearch
  );

  return (
    <>
      <Navbar
        handleSubmitSearch={() => {
          handleSubmitSearch();
          getProducts(valueSearch);
        }}
        value={valueSearch}
        handleValueChange={setValueSearch}
      />
      {showLoader && <Loader />}
      <Breadcrumbs breadcrumbsList={categories} />
      <ProductList products={products} />
    </>
  );
}
