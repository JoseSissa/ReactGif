import React, { useState } from 'react';
import { Route, Link, useLocation  } from "wouter";

import './App.css';
import { ListOfGifs } from './components/ListOfGifs/ListOfGifs.jsx';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home.jsx';
// Context
import { StaticContext } from './context/StaticContext.jsx';
import { GifsContextProvider } from './context/GifsContext.jsx';

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
    <StaticContext.Provider value={
        {
          name: 'Jose',
          value: true
        }
      }
    >
      <div className="App">
        <Link href='/'>
          <img src="../public/vite.svg" className='logo' alt="Logo" />
        </Link>

        <form onSubmit={handleSubmit} className="input-search">
          <input className='input-search__box' type="text" defaultValue={keyword} onChange={handleChange} placeholder="Search a Gifs here ..." />
          <button className='input-search__button' type="submit">Search</button>
        </form>

        <GifsContextProvider>

          <Route path='/' component={ Home }></Route>
          
          <Route path='/search/:keyword' component={ ListOfGifs } /> 

          <Route path='/detail/:id' component={ Detail } />

        </GifsContextProvider>

      </div>
    </StaticContext.Provider>
  )
};

export default App
