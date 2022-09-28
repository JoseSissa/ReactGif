import React, { useState } from 'react';
import { Route, Link, useLocation  } from "wouter";

import './App.css';
import { ListOfGifs } from './components/ListOfGifs/ListOfGifs.jsx';
import { Home } from './components/pages/Home.jsx';

function App() {

  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    setLocation(`/search/${keyword}`);
  };
  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <div className="App">
      <Link href='/'>
        <img src="../public/vite.svg" className='logo' alt="Logo" />
      </Link>

      <form onSubmit={handleSubmit} className="input-search">
        <input className='input-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gifs here ..." />
        <button className='input-search__button' type="submit">Search</button>
      </form>

      <Route path='/' component={Home}></Route>
      
      <Route path='/search/:keyword' component={ListOfGifs} />
    </div>
  )
};

export default App
