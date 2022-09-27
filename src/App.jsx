import React, { useState, useEffect } from 'react'
import './App.css'
import { getGifs } from './services/getGifs.jsx';

function App() {

  const [gifs, setGifs] = useState(['primero', 'segundo']);

  useEffect(() => {
    console.log('render');
  }, []);
  
  return (
    <div className="App">
      {
        gifs.map((elem, index) => <p key={index}>{elem}</p>)
      }
      <button onClick={()=> setGifs(gifsDifferent)}>Cambiar</button>
    </div>
  )
};

export default App
