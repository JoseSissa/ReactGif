import React, { useState } from 'react';
import { Link, Route } from "wouter";

import './App.css';
import { ListOfGifs } from './components/ListOfGifs/ListOfGifs.jsx';

function App() {

  return (
    <div className="App">
      <Link href='/'>
        <img src="../public/vite.svg" className='logo' alt="Logo" />
      </Link>
      <Link href='/search/metro'>metro</Link><br />
      <Link href='/search/skyrim'>Skyrim</Link><br />
      <Link href='/search/fallout'>fallout</Link><br />
      <Route path='/search/:keyword' component={ListOfGifs} />
    </div>
  )
};

export default App
