import React, { useContext } from 'react';
import Gif from '../components/Gif/Gif.jsx';
import { GifsContext } from '../context/GifsContext.jsx';
import { useGifs } from '../hooks/useGifs.jsx';

function Detail({ params }) {

    const { gifs } = useContext(GifsContext);
    const gif = gifs.find(elem => elem.id === params.id);

    return ( 
        <>
            <Gif {...gif} />
        </>
    );
}

export { Detail };