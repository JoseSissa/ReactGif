import React, { useState } from 'react';
import { Link, Route } from "wouter";

import './App.css';
import { ListOfGifs } from './components/ListOfGifs.jsx';

function App() {

  return (
    <div className="App">
      <Link href='/gif/metro'>metro</Link><br />
      <Link href='/gif/skyrim'>Skyrim</Link><br />
      <Link href='/gif/fallout'>fallout</Link><br />
      <Route path='/gif/:keyword' component={ListOfGifs} />
    </div>
  )
};

export default App
