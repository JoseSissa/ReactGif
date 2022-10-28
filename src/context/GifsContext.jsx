import React, { useState } from 'react';

const GifsContext = React.createContext({});

function GifsContextProvider({ children }) {

    const [gifs, setGifs] = useState([]);
    const [showButtonHome, setShowButtonHome] = useState(false);

    return (
        <GifsContext.Provider value={{gifs, setGifs, showButtonHome, setShowButtonHome}}>
            {children}
        </GifsContext.Provider>
    )
}

export { GifsContextProvider }
export { GifsContext };