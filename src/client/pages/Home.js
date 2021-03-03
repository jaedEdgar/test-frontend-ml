import React from 'react';
import Navbar from '../components/navbar';
import useSearch from "../hooks/useSearch"

export default function Home() {
  const [valueSearch, setValueSearch, handleSubmitSearch] = useSearch()
  return (
    <Navbar
      handleSubmitSearch={handleSubmitSearch}
      value={valueSearch}
      handleValueChange={setValueSearch}
    />
  );
}
