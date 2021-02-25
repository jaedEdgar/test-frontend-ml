import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import {
  getitemById,
  getCategoriesById,
  getDescriptionById,
} from '../services';
import formatItem from '../utils/formatItem';
import formatListCategories from '../utils/formatListCategories';

import Navbar from '../components/navbar';
import Breadcrumbs from '../components/breadcrumbs';
import Loader from '../components/loader';
import Description from '../components/itemDescription';
import Resume from '../components/itemResume';

export default function Item() {
  let history = useHistory();
  let { id } = useParams();
  const [valueSearch, setValueSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([
    {
      item: {
        id: 0,
        title: '',
        price: {
          currency: '',
          amount: 0,
          decimals: 0,
        },
        picture: '',
        condition: '',
        free_shipping: false,
        sold_quantity: '',
        description: '',
      },
    },
  ]);

  useEffect(() => {
    Promise.all([getitemById(id), getDescriptionById(id)]).then((resolve) => {
      const [
        { data: item },
        {
          data: { plain_text },
        },
      ] = resolve;
      getCategories(item.category_id);
      setData(formatItem(item, plain_text));
    });
  }, []);

  function getCategories(idCategory) {
    getCategoriesById(idCategory).then((cat) =>
      setCategories(formatListCategories(cat.data))
    );
  }

  const handleSubmitSearch = () => {
    history.push(`/items?search=${encodeURI(valueSearch)}`);
  };

  return (
    <>
      <Navbar
        handleSubmitSearch={() => handleSubmitSearch()}
        value={valueSearch}
        handleValueChange={setValueSearch}
      />
      <Breadcrumbs breadcrumbsList={categories} />
      {data.item ? (
        <>
          <div className='container product-main'>
            <Resume data={data} />
            <Description description={data.item.description} />
          </div>
        </>
      ) : (
          <Loader />
        )}
    </>
  );
}
