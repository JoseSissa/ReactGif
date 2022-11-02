import React from 'react';
import { Route, useLocation  } from "wouter";

import './App.css';
import { ListOfGifs } from './components/ListOfGifs/ListOfGifs.jsx';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home.jsx';
// Context
import { StaticContext } from './context/StaticContext.jsx';
import { GifsContextProvider } from './context/GifsContext.jsx';
import { SearchForm } from './components/SearchForm/SearchForm';
import StartButton from './components/StartButton/StartButton';
import Logo from './components/logo/Logo';
import notFound from './pages/404';

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
        
        <GifsContextProvider>

          <Logo />

          <SearchForm setLocation={setLocation} />

          <Route path='/' component={ Home }></Route>
          
          <Route path='/search/:keyword' component={ ListOfGifs } /> 

          <Route path='/detail/:id' component={ Detail } />

          <Route path='/404' component={ notFound } />

          <StartButton />

        </GifsContextProvider>

      </div>
    </StaticContext.Provider>
  )
};

export default App
