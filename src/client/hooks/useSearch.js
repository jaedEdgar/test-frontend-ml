import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useSearch() {
    let history = useHistory();
    const [valueSearch, setValueSearch] = useState('');

    const handleSubmitSearch = () => {
        history.push(`/items?search=${encodeURI(valueSearch)}`);
    };

    return [valueSearch, setValueSearch, handleSubmitSearch]
}
