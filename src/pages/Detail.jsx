import React, { useContext } from 'react';
import { GifsContext } from '../context/GifsContext.jsx';
import { StaticContext } from '../context/StaticContext.jsx';

function Detail({ params }) {

    const context = useContext(StaticContext);
    console.log(context);

    return ( 
        <>
            <h3>{params.id}</h3>
        </>
    );
}

export { Detail };