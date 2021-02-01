import React from 'react';

export default function navbar({
  value,
  handleSubmitSearch,
  handleValueChange,
}) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmitSearch(e);
  };

  return (
    <header className='navbar navbar-search' onSubmit={handleSubmitForm}>
      <div className='container'>
        <a href='/' className='logo'></a>
        <form className='navbar-search--form'>
          <input
            type='text'
            name='search'
            className='navbar-search--input'
            placeholder='Nunca dejes de buscar'
            value={value}
            onChange={(e) => handleValueChange(e.target.value)}
          />
          <button
            type='submit'
            className='navbar-search--button'
            onClick={handleSubmitForm}
          >
            <span></span>
          </button>
        </form>
      </div>
    </header>
  );
}
