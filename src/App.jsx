import React, { useState, useEffect } from 'react'
import './App.css'
import { getGifs } from './services/getGifs.jsx';

function App() {

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs().then(gifs => setGifs(gifs));
  }, []);
  
  return (
    <div className="App">
      {
        gifs.map((elem, index) => <img key={index} src={elem.url} alt={index} /> )
      }
    </div>
  )
};

export default App
