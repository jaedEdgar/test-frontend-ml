import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatItem, formatListCategories } from '../utils/';
import {
    getitemById,
    getCategoriesById,
    getDescriptionById,
} from '../services';

export default function useProduct() {
    let { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState([
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

    useEffect(() => getData(), []);
    function getData() {
        Promise.all([getitemById(id), getDescriptionById(id)]).then((resolve) => {
            const [
                { data: item },
                {
                    data: { plain_text },
                },
            ] = resolve;

            const { category_id } = item;
            const itemFormated = formatItem(item, plain_text);
            getCategories(category_id);
            setProduct(itemFormated);
        });
    }

    function getCategories(idCategory) {
        getCategoriesById(idCategory).then(({ data }) =>
            setCategories(formatListCategories(data))
        );
    }
    return [categories, product];
}
