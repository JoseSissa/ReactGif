import React from 'react';

const StaticContext =  React.createContext({
    name: "Valores sin estar dentro del provider",
    value: true
})

export { StaticContext };

