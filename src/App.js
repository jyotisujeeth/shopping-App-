import React from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import Header from './Components/Header/Header';


function App() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", color: "black" }}>Shoes Admin pages</h1>
      <Form />
      <List />
    </>
  );
}

export default App;
