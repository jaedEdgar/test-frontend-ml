import { useState, useEffect } from 'react';
import useQuery from '../hooks/useQuery';
import { getItemsByQuery } from '../services';
import { formatListCategories, formatListItems } from '../utils/';

export default function useProducts(setValueSearch, valueSearch) {
  let query = useQuery();
  const [showLoader, setShowLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => getProductsOnLoad(), []);
  useEffect(() => {

  }, [valueSearch])

  const getProductsOnLoad = () => {
    const searchValue = query.get('search');
    setValueSearch(searchValue);
    getProducts(searchValue)
  }

  const getProducts = (searchValue) => {
    getItemsByQuery(searchValue).then(({ data }) => {
      const { filters } = data;
      const products = formatListItems(data);
      const categories = filters.length
        ? formatListCategories(filters[0].values[0])
        : [];
      setProducts(products);
      setCategories(categories);
      setShowLoader(false);
    });
  };

  return [categories, products, showLoader, getProducts]
} 
