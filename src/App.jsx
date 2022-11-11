import React from "react";
import { Route, useLocation } from "wouter";
// Context
import { GifsContextProvider } from "./context/GifsContext.jsx";
import { UserContext } from "./context/UserContext";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import Login from "./pages/Login";
import Logo from "./components/logo/Logo";
import notFound from "./pages/404";
import StartButton from "./components/StartButton/StartButton";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home.jsx";
import { ListOfGifs } from "./components/ListOfGifs/ListOfGifs.jsx";
import { SearchForm } from "./components/SearchForm/SearchForm";

function App() {
  const [location, setLocation] = useLocation();

  return (
    <UserContext>
      <div className="App">

        <GifsContextProvider>
          <Header />

          <Logo />

          <SearchForm setLocation={setLocation} />

          <Route path="/" component={Home}></Route>
          {/* Se le coloca un ? al rating para decirle que el parámetro es opcional, si no lo tiene entonces ignoralo y matchea */}
          <Route path="/search/:keyword/:rating?/:lang?" component={ListOfGifs} />

          <Route path="/detail/:id" component={Detail} />

          <Route path="/login" component={Login} />

          {/* <Route path='/:rest*' component={ notFound } /> */}

          <StartButton />
        </GifsContextProvider>
        
      </div>
    </UserContext>
  );
}

export default App;
