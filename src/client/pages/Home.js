import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useHistory } from 'react-router-dom';

export default function Home() {
  let history = useHistory();
  const [valueSearch, setValueSearch] = useState('');

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
    </>
  );
}
