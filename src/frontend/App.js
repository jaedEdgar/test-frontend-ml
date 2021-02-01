import React from 'react';
import Routes from './routes';

function App({ url }) {
  return (
    <>
      <Routes />
      <h1>{url}</h1>
    </>
  );
}

export default App;
