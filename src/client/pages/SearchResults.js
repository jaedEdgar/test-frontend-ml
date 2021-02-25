import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getItemsByQuery } from '../services';
import Navbar from '../components/navbar';
import Breadcrumbs from '../components/breadcrumbs';
import ItemsSearch from '../components/itemsSearch';
import formatListCategories from '../utils/formatListCategories';
import formatListItems from '../utils/formatListItems';
import Loader from '../components/loader';

export default function SearchResults() {
  let history = useHistory();
  let query = useQuery();
  const [valueSearch, setValueSearch] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  const [data, setData] = useState({
    items: [],
    categories: [],
  });

  useEffect(() => {
    setValueSearch(query.get('search'));
    getItemsByQuery(query.get('search')).then((res) => {
      setData({
        categories: res.data.filters.length
          ? formatListCategories(res.data.filters[0].values[0])
          : [],
        items: formatListItems(res.data),
      });
      setShowLoader(false);
    });
  }, []);

  const handleSubmitSearch = () => {
    setShowLoader(true);

    history.push(`/items?search=${encodeURI(valueSearch)}`);
    getItemsByQuery(valueSearch).then((res) => {
      setData({
        categories: res.data.filters.length
          ? formatListCategories(res.data.filters[0].values[0])
          : [],
        items: formatListItems(res.data),
      });
      setShowLoader(false);
    });
  };

  return (
    <>
      <Navbar
        handleSubmitSearch={() => handleSubmitSearch()}
        value={valueSearch}
        handleValueChange={setValueSearch}
      />
      {!showLoader ? (
        <>
          <Breadcrumbs breadcrumbsList={data.categories} />
          <ItemsSearch data={data} />
        </>
      ) : (
          <Loader />
        )}
    </>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
