import React, { useState } from 'react';
import { Route, Link, useLocation  } from "wouter";

import './App.css';
import { ListOfGifs } from './components/ListOfGifs/ListOfGifs.jsx';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home.jsx';
// Context
import { StaticContext } from './context/StaticContext.jsx';
import { GifsContextProvider } from './context/GifsContext.jsx';
import { SearchForm } from './components/SearchForm/SearchForm';

function App() {
  const [location, setLocation] = useLocation();

  

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

        <SearchForm setLocation={setLocation} />

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
