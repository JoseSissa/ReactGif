import React, { useState, useEffect } from 'react';
import './App.css';
import { ListOfGifs } from './components/ListOfGifs.jsx';

function App() {
  const [keyword, setKeyword] = useState('javascript');
  return (
    <div className="App">
      <button onClick={()=>setKeyword('lords of the rings')}>Cambiar la keyword</button>
      <ListOfGifs
        keyword={keyword}
      />
    </div>
  )
};

export default App
