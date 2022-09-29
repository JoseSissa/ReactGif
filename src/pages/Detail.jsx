import React from 'react';

function Detail({ params }) {
    const {id} = params;
    return ( 
        <>
            <h3>{id}</h3>
        </>
    );
}

export { Detail };